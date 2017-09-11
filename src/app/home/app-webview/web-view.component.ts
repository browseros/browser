import { Store } from '@ngrx/store';

import { Component, Output, EventEmitter, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ITab } from '../../models/tab.model';
import * as fromRoot from '../../reducers';
import { IWebAction } from './../../models/web-action.model';

@Component({
    selector: 'web-view',
    styleUrls: ['./web-view.component.css'],
    templateUrl: './web-view.component.html'
})

export class WebviewComponent implements AfterViewInit {
    @Input() public tab: ITab;
    @Output() public onTitleChanged: EventEmitter<string> = new EventEmitter<string>();
    @ViewChild('webview') private webview: ElementRef;

    constructor(public store: Store<fromRoot.State>) {
        this.store.select(fromRoot.getIsNavigatingBack).subscribe((action: IWebAction) => {
            if (action && action.isCalling
                && action.app.hostName === this.tab.hostName
                && action.app.currentTab.url === this.tab.url) {
                this.goBack();
            }
        });
        this.store.select(fromRoot.getIsNavigatingNext).subscribe((action: IWebAction) => {
            if (action && action.isCalling
                && action.app.hostName === this.tab.hostName
                && action.app.currentTab.url === this.tab.url) {
                this.goForward();
            }
        });
    }

    public ngAfterViewInit() {
        let webviewElm = this.webview.nativeElement;
        webviewElm.addEventListener('page-title-updated', (e) => {
            this.onTitleChanged.emit(e.title);
        });
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
}
