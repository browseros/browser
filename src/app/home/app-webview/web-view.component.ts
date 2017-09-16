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
    @ViewChild('webview') private webview: ElementRef;

    constructor(public store: Store<fromRoot.State>) {
        this.backSub = this.store.select(fromRoot.getIsNavigatingBack).subscribe((action: IWebAction) => {
            if (action && action.isCalling && this.tab
                && action.tab.id === this.tab.id) {
                this.goBack();
            }
        });
        this.nextSub = this.store.select(fromRoot.getIsNavigatingNext).subscribe((action: IWebAction) => {
            if (action && action.isCalling && this.tab
                && action.tab.id === this.tab.id) {
                this.goForward();
            }
        });
        this.changeSub = this.store.select(fromRoot.getIsChangingUrl).subscribe((action: IWebAction) => {
            if (action && action.isCalling && action.tab && this.tab
                && action.tab.id === this.tab.id) {
                this.loadURL(action.value as string);
            }
        });
    }

    public ngOnDestroy() {
        this.backSub.unsubscribe();
        this.nextSub.unsubscribe();
        this.changeSub.unsubscribe();
    }

    public ngAfterViewInit() {
        let webviewElm = this.webview.nativeElement;
        webviewElm.addEventListener('page-title-updated', (e) => {
            this.onTitleChanged.emit(e.title);
        });
        webviewElm.addEventListener('page-favicon-updated', (e) => {
            if (e.favicons && e.favicons.length > 0) {
                this.onIconChanged.emit(e.favicons[0]);
            }
        });
        webviewElm.addEventListener('new-window', (e) => {
            const protocol = require('url').parse(e.url).protocol;
            if (protocol === 'http:' || protocol === 'https:') {
                this.onNewUrl.emit(e.url);
            }
        });
        webviewElm.addEventListener('did-get-redirect-request', (e) => {
            if (e.isMainFrame) {
                const protocol = require('url').parse(e.newURL).protocol;
                if (protocol === 'http:' || protocol === 'https:') {
                    this.onUrlChanged.emit(e.newURL);
                }
            }
        });
        webviewElm.addEventListener('dom-ready', (e) => {
            let wc = webviewElm.getWebContents();
            wc.on('context-menu', (e1, params) => {
                this.onContextMenu.emit(params);
            });
        });
        webviewElm.addEventListener('did-navigate', (e) => {
            const protocol = require('url').parse(e.url).protocol;
            if (protocol === 'http:' || protocol === 'https:') {
                this.onUrlChanged.emit(e.url);
            }
        });
        // did-navigate
    }

    public goBack() {
        let webviewElm = this.webview.nativeElement;
        webviewElm.goBack();
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
