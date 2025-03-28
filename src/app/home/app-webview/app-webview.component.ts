import { Component, Output, EventEmitter, Input, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import type { ITab } from '../../models/tab.model';
import type { IApp } from '../../models/app.model';
import type { IWebEvent } from '../../models/web-event.model';
import { Subscription } from 'rxjs';
import type { WebviewTag } from 'electron';
import { webContents } from '@electron/remote';
import { ipcRenderer } from 'electron';

@Component({
    selector: 'app-webview',
    templateUrl: './app-webview.component.html',
    styleUrls: ['./app-webview.component.scss']
})
export class AppWebviewComponent implements AfterViewInit, OnDestroy {
    @Input() public currentTab: ITab | null = null;
    @Input() public screenHeight: number = 0;
    @Input() public screenWidth: number = 0;
    @Output() public onTitleChanged = new EventEmitter<string>();
    @Output() public onIconChanged = new EventEmitter<string>();
    @Output() public onNewUrl = new EventEmitter<string>();
    @Output() public onUrlChanged = new EventEmitter<string>();
    @Output() public onContextMenu = new EventEmitter<any>();
    @Output() public onDomReady = new EventEmitter<IWebEvent>();
    @Output() public onClicked = new EventEmitter<any>();

    @ViewChild('webview') private webview!: ElementRef<WebviewTag>;
    private onFirstLoad = true;
    private tabsSub: Subscription | undefined;
    private currentTabSub: Subscription | undefined;
    private currentApp: IApp | undefined;
    private appSub: Subscription | undefined;

    constructor(public store: Store<fromRoot.State>) {
        console.log('[AppWebview] Constructor called');
    }

    public ngOnDestroy() {
        if (this.tabsSub) {
            this.tabsSub.unsubscribe();
        }
        if (this.currentTabSub) {
            this.currentTabSub.unsubscribe();
        }
        if (this.appSub) {
            this.appSub.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        console.log('[AppWebview] Setting up webview events');
        const self = this;
        self.onFirstLoad = true;

        const webviewElm = self.webview.nativeElement;
        console.log('[AppWebview] Webview element:', webviewElm);

        // Handle webview events
        webviewElm.addEventListener('dom-ready', () => {
            console.log('[AppWebview] DOM ready');
            self.onDomReady.emit({
                eventValue: null,
                eventName: 'domready',
                tabId: self.currentTab?.id || 0,
                app: null
            });
        });

        webviewElm.addEventListener('page-title-updated', (e: any) => {
            console.log('[AppWebview] Title updated:', e.title);
            self.onTitleChanged.emit(e.title);
        });

        webviewElm.addEventListener('page-favicon-updated', (e: any) => {
            console.log('[AppWebview] Favicon updated:', e.favicons[0]);
            self.onIconChanged.emit(e.favicons[0]);
        });

        webviewElm.addEventListener('did-navigate', (e: any) => {
            console.log('[AppWebview] Did navigate:', e.url);
            self.onUrlChanged.emit(e.url);
        });

        webviewElm.addEventListener('did-get-redirect-request', (e: any) => {
            console.log('[AppWebview] Did get redirect request:', e.newURL);
            self.onUrlChanged.emit(e.newURL);
        });

        webviewElm.addEventListener('new-window', (e: any) => {
            console.log('[AppWebview] New window:', e.url);
            self.onNewUrl.emit(e.url);
        });

        // Handle click events through IPC
        ipcRenderer.on('clicked', () => {
            console.log('[AppWebview] Click detected');
            self.onClicked.emit('clicked');
        });

        // Handle context menu
        const webContentsId = webviewElm.getWebContentsId();
        const wc = webContents.fromId(webContentsId);
        if (wc) {
            wc.on('context-menu', (e: any, params: any) => {
                console.log('[AppWebview] Context menu:', params);
                self.onContextMenu.emit(params);
            });
        }
    }

    // Event handler methods
    public handleTitleUpdated(event: any): void {
        this.onTitleChanged.emit(event.title);
    }

    public handleFaviconUpdated(event: any): void {
        this.onIconChanged.emit(event.favicons[0]);
    }

    public handleNavigate(event: any): void {
        this.onUrlChanged.emit(event.url);
    }

    public handleRedirectRequest(event: any): void {
        this.onUrlChanged.emit(event.newURL);
    }

    public handleNewWindow(event: any): void {
        this.onNewUrl.emit(event.url);
    }
}
