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
import * as appActions from '../../actions/app.actions';

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
    private tabsSub: Subscription;
    private currentTabSub: Subscription;
    private currentApp: IApp;
    private appSub: Subscription;
    private backSub: Subscription;
    private nextSub: Subscription;
    private reloadSub: Subscription;

    constructor(public store: Store<fromRoot.State>) {
        console.log('[AppWebview] Constructor called');
        this.tabsSub = new Subscription();
        this.currentTabSub = new Subscription();
        this.currentApp = { id: 0, title: '', url: '', icon: '' };
        this.appSub = new Subscription();
        this.backSub = new Subscription();
        this.nextSub = new Subscription();
        this.reloadSub = new Subscription();
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
        if (this.backSub) {
            this.backSub.unsubscribe();
        }
        if (this.nextSub) {
            this.nextSub.unsubscribe();
        }
        if (this.reloadSub) {
            this.reloadSub.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        console.log('[AppWebview] Setting up webview events');
        const self = this;
        self.onFirstLoad = true;

        const webviewElm = self.webview.nativeElement;
        console.log('[AppWebview] Webview element:', webviewElm);

        // Subscribe to navigation actions
        this.backSub = this.store.select(fromRoot.getIsNavigatingBack).subscribe((action: any) => {
            if (action?.isCalling && this.currentTab?.id && action.tab.id === this.currentTab.id) {
                this.goBack();
                this.store.dispatch(new appActions.DoBackCompleteAction(action.app));
            }
        });

        this.nextSub = this.store.select(fromRoot.getIsNavigatingNext).subscribe((action: any) => {
            if (action?.isCalling && this.currentTab?.id && action.tab.id === this.currentTab.id) {
                this.goForward();
                this.store.dispatch(new appActions.DoNextCompleteAction(action.app));
            }
        });

        this.reloadSub = this.store.select(fromRoot.getIsNavigatingReload).subscribe((action: any) => {
            if (action?.isCalling && this.currentTab?.id && action.tab.id === this.currentTab.id) {
                this.reload();
                this.store.dispatch(new appActions.DoReloadCompleteAction(action.app));
            }
        });

        // Handle webview events
        webviewElm.addEventListener('dom-ready', () => {
            console.log('[AppWebview] DOM ready');
            if (this.currentTab && this.currentApp) {
                self.onDomReady.emit({
                    eventValue: null,
                    eventName: 'domready',
                    tabId: this.currentTab.id,
                    app: this.currentApp || null
                });
            }
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

    // Navigation methods
    public goBack(): void {
        const webviewElm = this.webview.nativeElement;
        if (webviewElm.canGoBack()) {
            webviewElm.goBack();
        }
    }

    public goForward(): void {
        const webviewElm = this.webview.nativeElement;
        if (webviewElm.canGoForward()) {
            webviewElm.goForward();
        }
    }

    public reload(): void {
        const webviewElm = this.webview.nativeElement;
        webviewElm.reload();
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
