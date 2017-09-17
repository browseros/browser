import { Store } from '@ngrx/store';

import { Component, Output, EventEmitter, Input, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ITab } from '../../models/tab.model';
import * as fromRoot from '../../reducers';
import { IWebAction } from './../../models/web-action.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'web-view',
    styleUrls: ['./web-view.component.css'],
    templateUrl: './web-view.component.html'
})

export class WebviewComponent implements AfterViewInit, OnDestroy {
    @Input() public tab: ITab;
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
    private onFirstLoad = true;
    @ViewChild('webview') private webview: ElementRef;

    constructor(public store: Store<fromRoot.State>) {
    }

    public ngOnDestroy() {
        this.backSub.unsubscribe();
        this.nextSub.unsubscribe();
        this.changeSub.unsubscribe();
    }

    public ngAfterViewInit() {
        let self = this;
        self.backSub = this.store.select(fromRoot.getIsNavigatingBack).subscribe((action: IWebAction) => {
            if (action && action.isCalling && self.tab
                && action.tab.id === self.tab.id) {
                self.goBack();
            }
        });
        self.nextSub = this.store.select(fromRoot.getIsNavigatingNext).subscribe((action: IWebAction) => {
            if (action && action.isCalling && self.tab
                && action.tab.id === self.tab.id) {
                self.goForward();
            }
        });
        self.changeSub = this.store.select(fromRoot.getIsChangingUrl).subscribe((action: IWebAction) => {
            if (action && action.isCalling && action.tab && self.tab
                && action.tab.id === self.tab.id) {
                self.loadURL(action.value as string);
            }
        });

        let webviewElm = this.webview.nativeElement;
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
        webviewElm.addEventListener('dom-ready', (e) => {
            let wc = webviewElm.getWebContents();
            wc.on('context-menu', (e1, params) => {
                self.onContextMenu.emit(params);
            });
            if (self.onFirstLoad) {
                self.onFirstLoad = false;
                setTimeout(() => {
                    webviewElm.loadURL(self.tab.url);
                }, 100);
            }
        });
        webviewElm.addEventListener('did-navigate', (e) => {
            const protocol = require('url').parse(e.url).protocol;
            if (protocol === 'http:' || protocol === 'https:') {
                self.onUrlChanged.emit(e.url);
            }
        });
        // did-navigate
        debugger;
    }

    public goBack() {
        let self = this;
        setTimeout(() => {
            console.log('go back');
            let webviewElm = self.webview.nativeElement;
            console.log(webviewElm);
            if (webviewElm.canGoBack()) {
                webviewElm.goBack();
            } else {
                console.log('cannot go back');
            }
        }, 2000);
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
        webviewElm.goForward();
    }

    private getHeight() {
        return this.screenHeight - 80;
    }
}
