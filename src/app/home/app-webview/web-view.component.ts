import { Store } from '@ngrx/store';

import { Component, Output, EventEmitter, Input, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ITab } from '../../models/tab.model';
import * as fromRoot from '../../reducers';
import { IWebAction } from './../../models/web-action.model';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'web-view',
    styleUrls: ['./web-view.component.css'],
    templateUrl: './web-view.component.html'
})

export class WebviewComponent implements AfterViewInit, OnDestroy {
    @Input() public tabId: number;
    @Input() public screenHeight: number;
    @Input() public screenWidth: number;
    @Output() public onTitleChanged: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onIconChanged: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onNewUrl: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onUrlChanged: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onContextMenu: EventEmitter<any> = new EventEmitter<any>();
    private backSub: Subscription;
    private nextSub: Subscription;
    private changeSub: Subscription;
    private tabsSub: Subscription;
    private onFirstLoad = true;
    private tabs: ITab[] = [];
    @ViewChild('webview') private webview: ElementRef;

    constructor(public store: Store<fromRoot.State>) {
    }

    public ngOnDestroy() {
        this.backSub.unsubscribe();
        this.nextSub.unsubscribe();
        this.changeSub.unsubscribe();
        this.tabsSub.unsubscribe();
    }

    public ngAfterViewInit() {
        let self = this;
        self.onFirstLoad = true;
        self.tabsSub = this.store.select(fromRoot.getEventTabs).subscribe((ts) => {
            self.tabs = JSON.parse(JSON.stringify(ts));
        });
        self.backSub = this.store.select(fromRoot.getIsNavigatingBack).subscribe((action: IWebAction) => {
            if (action && action.isCalling && self.tabId
                && action.tab.id === self.tabId) {
                self.goBack();
            }
        });
        self.nextSub = this.store.select(fromRoot.getIsNavigatingNext).subscribe((action: IWebAction) => {
            if (action && action.isCalling
                && action.tab.id === self.tabId) {
                self.goForward();
            }
        });
        self.changeSub = this.store.select(fromRoot.getIsChangingUrl).subscribe((action: IWebAction) => {
            if (action && action.isCalling && action.tab
                && action.tab.id === self.tabId) {
                self.loadURL(action.value as string);
                self.onUrlChanged.emit(action.value as string);
            }
        });

        let webviewElm = self.webview.nativeElement;
        webviewElm.addEventListener('page-title-updated', (e) => {
            self.onTitleChanged.emit(e.title);
        });
        webviewElm.addEventListener('page-favicon-updated', (e) => {
            if (e.favicons && e.favicons.length > 0) {
                self.onIconChanged.emit(e.favicons[0]);
            }
        });
        webviewElm.addEventListener('new-window', (e) => {
            const protocol = require('url').parse(e.url).protocol;
            if (protocol === 'http:' || protocol === 'https:') {
                self.onNewUrl.emit(e.url);
            }
        });
        webviewElm.addEventListener('did-get-redirect-request', (e) => {
            if (e.isMainFrame) {
                const protocol = require('url').parse(e.newURL).protocol;
                if (protocol === 'http:' || protocol === 'https:') {
                    self.onUrlChanged.emit(e.newURL);
                }
            }
        });

        let onContextMenu = (e1, params) => {
            self.onContextMenu.emit(params);
        };
        webviewElm.addEventListener('dom-ready', (e) => {
            let wc = webviewElm.getWebContents();
            wc.removeListener('context-menu', onContextMenu);
            wc.on('context-menu', onContextMenu);
            if (self.onFirstLoad) {
                self.onFirstLoad = false;
                let url = self.getTabUrl(self.tabId);
                webviewElm.loadURL(url);
            }
        });

        webviewElm.addEventListener('did-navigate', (e) => {
            const protocol = require('url').parse(e.url).protocol;
            if (protocol === 'http:' || protocol === 'https:') {
                self.onUrlChanged.emit(e.url);
            }
        });
    }

    public goBack() {
        let self = this;
        let webviewElm = self.webview.nativeElement;
        if (webviewElm.canGoBack()) {
            webviewElm.goBack();
        }
    }

    public loadURL(url: string) {
        let webviewElm = this.webview.nativeElement;
        webviewElm.loadURL(url);
    }

    public reload() {
        let webviewElm = this.webview.nativeElement;
        webviewElm.reload();
    }

    public goForward() {
        let webviewElm = this.webview.nativeElement;
        if (webviewElm.canGoForward()) {
            webviewElm.goForward();
        }
    }

    private getHeight() {
        return this.screenHeight - 80;
    }

    private getTabUrl(tabId: number): string {
        let tab = this.tabs.find(t => t.id === tabId);
        return tab.url;
    }
}
