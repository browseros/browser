import { Component, Output, EventEmitter, Input, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import type { ITab } from '../../models/tab.model';
import type { WebviewTag } from 'electron';
import * as fromRoot from '../../reducers';
import { Subscription } from 'rxjs';
import { webContents } from '@electron/remote';

@Component({
    selector: 'web-view',
    template: `
        <webview
            #webview 
            [attr.preload]="preloadPath"
            src='about:blank' 
            [style.width]='screenWidth + "px"'
            [style.height]='screenHeight + "px"'
            style="display:flex; margin:0; padding:0; border:0;"
            nodeintegration
            nodeintegrationinsubframes
            plugins
            webpreferences="javascript=true,nodeIntegration=true,contextIsolation=false,webviewTag=true,webSecurity=false"
            allowpopups
            useragent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            partition="persist:general"
        >
        </webview>
    `,
    styles: [`
        :host {
            display: block;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        webview {
            display: flex;
            height: 100%;
            margin: 0;
            padding: 0;
            border: none;
            background: #fff;
        }
    `]
})
export class WebviewComponent implements AfterViewInit, OnDestroy {
    @Input() public tabId: number = 0;
    @Input() public screenHeight: number = 0;
    @Input() public screenWidth: number = 0;
    @Output() public onTitleChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onIconChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onNewUrl: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onUrlChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onContextMenu: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onDomReady: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onClicked: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('webview') private webview!: ElementRef<WebviewTag>;
    private onFirstLoad = true;
    private tabs: ITab[] = [];
    private tabsSub: Subscription | undefined;
    public preloadPath: string;

    constructor(public store: Store<fromRoot.State>) {
        console.log('[WebView] Constructor called');
        // Use absolute path for preload script
        this.preloadPath = './src/assets/js/preload.js';
        console.log('[WebView] Preload script path:', this.preloadPath);
    }

    public ngOnDestroy() {
        if (this.tabsSub) {
            this.tabsSub.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        console.log('[WebView] Setting up webview events');
        console.log('[WebView] Screen height:', this.screenHeight);
        
        const self = this;
        self.onFirstLoad = true;

        self.tabsSub = this.store.select(fromRoot.getEventTabs).subscribe((ts) => {
            self.tabs = JSON.parse(JSON.stringify(ts));
        });

        const webviewElm = self.webview.nativeElement;
        console.log('[WebView] Webview element:', webviewElm);

        webviewElm.addEventListener('did-start-loading', () => {
            console.log('[WebView] Started loading');
        });

        webviewElm.addEventListener('did-stop-loading', () => {
            console.log('[WebView] Stopped loading');
        });

        webviewElm.addEventListener('did-fail-load', (e: any) => {
            console.error('[WebView] Failed to load:', e);
            if (e.errorCode !== -3) { // Ignore ERR_ABORTED errors
                console.error('[WebView] Load error:', {
                    errorCode: e.errorCode,
                    errorDescription: e.errorDescription,
                    validatedURL: e.validatedURL,
                    isMainFrame: e.isMainFrame
                });
            }
        });

        webviewElm.addEventListener('page-title-updated', (e: any) => {
            console.log('[WebView] Title updated:', e.title);
            self.onTitleChanged.emit(e.title);
        });

        webviewElm.addEventListener('page-favicon-updated', (e: any) => {
            if (e.favicons && e.favicons.length > 0) {
                console.log('[WebView] Favicon updated:', e.favicons[0]);
                self.onIconChanged.emit(e.favicons[0]);
            }
        });

        webviewElm.addEventListener('new-window', (e: any) => {
            console.log('[WebView] New window:', e.url);
            try {
                const url = new URL(e.url);
                if (url.protocol === 'http:' || url.protocol === 'https:') {
                    self.onNewUrl.emit(e.url);
                }
            } catch (err) {
                console.error('[WebView] Invalid URL:', e.url);
            }
        });

        webviewElm.addEventListener('did-navigate', (e: any) => {
            console.log('[WebView] Did navigate:', e.url);
            try {
                const url = new URL(e.url);
                if (url.protocol === 'http:' || url.protocol === 'https:') {
                    self.onUrlChanged.emit(e.url);
                }
            } catch (err) {
                console.error('[WebView] Invalid URL:', e.url);
            }
        });

        webviewElm.addEventListener('did-get-redirect-request', (e: any) => {
            if (e.isMainFrame) {
                console.log('[WebView] Redirect request:', e.newURL);
                try {
                    const url = new URL(e.newURL);
                    if (url.protocol === 'http:' || url.protocol === 'https:') {
                        self.onUrlChanged.emit(e.newURL);
                    }
                } catch (err) {
                    console.error('[WebView] Invalid URL:', e.newURL);
                }
            }
        });

        const onContextMenu = (e1: any, params: any) => {
            self.onContextMenu.emit(params);
        };

        webviewElm.addEventListener('dom-ready', () => {
            console.log('[WebView] DOM ready');
            self.onDomReady.emit('');

            const webContentsId = webviewElm.getWebContentsId();
            console.log('[WebView] WebContents ID:', webContentsId);
            
            const wc = webContents.fromId(webContentsId);
            
            if (wc) {
                // Set content security policy
                wc.session.webRequest.onHeadersReceived((details, callback) => {
                    callback({
                        responseHeaders: {
                            ...details.responseHeaders,
                            'Content-Security-Policy': ["default-src 'self' 'unsafe-inline' 'unsafe-eval' data: https: http:;"]
                        }
                    });
                });
            }

            if (self.onFirstLoad) {
                self.onFirstLoad = false;
                const url = self.getTabUrl(self.tabId);
                console.log('[WebView] Loading initial URL:', url);
                webviewElm.loadURL(url);
            }
        });

        webviewElm.addEventListener('console-message', (e: any) => {
            console.log('[WebView Console]', e.message);
        });

        webviewElm.addEventListener('ipc-message', (e: any) => {
            if (e.channel === 'clicked') {
                console.log('[WebView] Click detected');
                this.onClicked.emit('clicked');
            }
        });

        // Add enhanced preload script error handling
        webviewElm.addEventListener('preload-error', (e: any) => {
            console.error('[WebView] Preload script error:', e);
        });

        webviewElm.addEventListener('preload-script-error', (e: any) => {
            console.error('[WebView] Preload script error (script):', e);
        });

        // Log when the webview is ready to show
        webviewElm.addEventListener('ready-to-show', () => {
            console.log('[WebView] Ready to show');
        });

        // Log when the webview is destroyed
        webviewElm.addEventListener('destroyed', () => {
            console.log('[WebView] Webview destroyed');
        });

        // Log any crashed events
        webviewElm.addEventListener('crashed', (e: any) => {
            console.error('[WebView] Crashed:', e);
        });

        // Log plugin crashed events
        webviewElm.addEventListener('plugin-crashed', (e: any) => {
            console.error('[WebView] Plugin crashed:', e);
        });
    }

    public loadURL(url: string) {
        console.log('[WebView] Loading URL:', url);
        const webviewElm = this.webview.nativeElement;
        try {
            webviewElm.loadURL(url).catch((err: any) => {
                console.error('[WebView] Error loading URL:', err);
            });
        } catch (e) {
            console.error('[WebView] Exception loading URL:', e);
        }
    }

    private getTabUrl(tabId: number): string {
        const tab = this.tabs.find(t => t.id === tabId);
        return tab ? tab.url : 'about:blank';
    }
}
