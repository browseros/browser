import { Component, Output, EventEmitter, Input, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import type { ITab } from '../../models/tab.model';
import type { WebviewTag } from 'electron';
import * as fromRoot from '../../reducers';
import { Subscription } from 'rxjs';

@Component({
    selector: 'web-view',
    templateUrl: './web-view.component.html'
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
            if (this.isValidProtocol(e.url)) {
                self.onNewUrl.emit(e.url);
            }
        });

        webviewElm.addEventListener('did-navigate', (e: any) => {
            console.log('[WebView] Did navigate:', e.url);
            if (this.isValidProtocol(e.url)) {
                self.onUrlChanged.emit(e.url);
            }
        });

        webviewElm.addEventListener('did-get-redirect-request', (e: any) => {
            if (e.isMainFrame) {
                console.log('[WebView] Redirect request:', e.newURL);
                if (this.isValidProtocol(e.newURL)) {
                    self.onUrlChanged.emit(e.newURL);
                }
            }
        });

        webviewElm.addEventListener('dom-ready', () => {
            console.log('[WebView] DOM ready');
            self.onDomReady.emit('');
            if (self.onFirstLoad) {
                self.onFirstLoad = false;
                const url = self.getTabUrl(self.tabId);
                console.log('[WebView] Loading initial URL:', url);
                webviewElm.loadURL(url);
            }
        });

        webviewElm.addEventListener('did-fail-load', (e: any) => {
            console.error('[WebView] Failed to load:', e);
        });

        webviewElm.addEventListener('did-start-loading', () => {
            console.log('[WebView] Started loading');
        });

        webviewElm.addEventListener('did-stop-loading', () => {
            console.log('[WebView] Stopped loading');
        });

        webviewElm.addEventListener('did-finish-load', () => {
            console.log('[WebView] Finished loading');
        });

        webviewElm.addEventListener('click', () => {
            console.log('[WebView] Clicked');
            self.onClicked.emit('clicked');
        });

        webviewElm.addEventListener('contextmenu', (e: any) => {
            console.log('[WebView] Context menu');
            self.onContextMenu.emit(e);
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

    private isValidProtocol(url: string): boolean {
        try {
            const urlObj = new URL(url);
            return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
        } catch {
            return false;
        }
    }
}
