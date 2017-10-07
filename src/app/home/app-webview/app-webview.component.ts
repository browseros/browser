
import { Component, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { IApp } from '../../models/app.model';
import { ITab } from '../../models/tab.model';
import { IWebEvent } from '../../models/web-event.model';

@Component({
    selector: 'app-webview',
    styleUrls: ['./app-webview.component.css'],
    templateUrl: './app-webview.component.html'
})

export class AppWebviewComponent {
    @Input() public currentApp: IApp;
    @Input() public currentTab: ITab;
    @Input() public apps: IApp[];
    @Input() public tabIds: number[];
    @Input() public screenHeight: number;
    @Input() public screenWidth: number;
    @Output() public onTitleChanged: EventEmitter<IWebEvent> = new EventEmitter<IWebEvent>();
    @Output() public onIconChanged: EventEmitter<IWebEvent> = new EventEmitter<IWebEvent>();
    @Output() public onNewUrl: EventEmitter<IWebEvent> = new EventEmitter<IWebEvent>();
    @Output() public onContextMenu: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onUrlChanged: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onDomReady: EventEmitter<IWebEvent> = new EventEmitter<IWebEvent>();
}
