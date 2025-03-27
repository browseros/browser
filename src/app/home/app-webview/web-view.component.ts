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
            preload="./assets/js/preload.js"
            src='about:blank' 
            [style.width]='screenWidth + "px"'
            [style.height]='getHeight() + "px"'
            nodeintegration
            nodeintegrationinsubframes
            webpreferences="contextIsolation=false,nodeIntegration=true,enableRemoteModule=true"
            allowpopups
        >
        </webview>
    `
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

    constructor(public store: Store<fromRoot.State>) {
        console.log('[WebView] Constructor called');
    }

    public ngOnDestroy() {
        if (this.tabsSub) {
            this.tabsSub.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        console.log('[WebView] Setting up webview events');
        const self = this;
        self.onFirstLoad = true;

        self.tabsSub = this.store.select(fromRoot.getEventTabs).subscribe((ts) => {
            self.tabs = JSON.parse(JSON.stringify(ts));
        });

        const webviewElm = self.webview.nativeElement;
        console.log('[WebView] Webview element:', webviewElm);

        // Log webview properties to debug preload script
        console.log('[WebView] Webview preload path:', webviewElm.getAttribute('preload'));
        console.log('[WebView] Webview nodeIntegration:', webviewElm.getAttribute('nodeintegration'));
        console.log('[WebView] Webview webpreferences:', webviewElm.getAttribute('webpreferences'));

        webviewElm.addEventListener('did-start-loading', () => {
            console.log('[WebView] Started loading');
        });

        webviewElm.addEventListener('did-stop-loading', () => {
            console.log('[WebView] Stopped loading');
        });

        webviewElm.addEventListener('did-fail-load', (e: any) => {
            console.error('[WebView] Failed to load:', e);
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

            // Get the webContents ID and use it to get the webContents object
            const webContentsId = webviewElm.getWebContentsId();
            console.log('[WebView] WebContents ID:', webContentsId);
            
            // Use @electron/remote to get the webContents
            const wc = webContents.fromId(webContentsId);
            
            if (wc) {
                wc.removeListener('context-menu', onContextMenu);
                wc.on('context-menu', onContextMenu);

                // Enable webview devtools for debugging
                try {
                    wc.openDevTools();
                    console.log('[WebView] DevTools opened for webview');
                } catch (e) {
                    console.log('[WebView] Could not open devtools:', e);
                }
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

        // Add preload script error handling
        webviewElm.addEventListener('preload-error', (e: any) => {
            console.error('[WebView] Preload script error:', e);
        });
    }

    public loadURL(url: string) {
        console.log('[WebView] Loading URL:', url);
        const webviewElm = this.webview.nativeElement;
        webviewElm.loadURL(url);
    }

    public getHeight() {
        return this.screenHeight - 60;
    }

    private getTabUrl(tabId: number): string {
        const tab = this.tabs.find(t => t.id === tabId);
        return tab ? tab.url : 'about:blank';
    }
}
