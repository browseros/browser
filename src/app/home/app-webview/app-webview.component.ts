import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import type { IApp } from '../../models/app.model';
import type { ITab } from '../../models/tab.model';
import type { IWebEvent } from '../../models/web-event.model';

@Component({
    selector: 'app-webview',
    templateUrl: './app-webview.component.html',
    styleUrls: ['./app-webview.component.scss']
})
export class AppWebviewComponent implements AfterViewInit {
    @Input() public currentApp: IApp | null = null;
    @Input() public currentTab: ITab | null = null;
    @Input() public apps: IApp[] = [];
    @Input() public tabIds: number[] = [];
    @Input() public screenHeight: number = 0;
    @Input() public screenWidth: number = 0;

    @Output() public onClicked = new EventEmitter<any>();
    @Output() public onContextMenu = new EventEmitter<any>();
    @Output() public onDomReady = new EventEmitter<IWebEvent>();
    @Output() public onNewUrl = new EventEmitter<IWebEvent>();
    @Output() public onTitleChanged = new EventEmitter<IWebEvent>();
    @Output() public onIconChanged = new EventEmitter<IWebEvent>();
    @Output() public onUrlChanged = new EventEmitter<any>();

    ngAfterViewInit() {
        // Implementation
    }
}
