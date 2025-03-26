import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { IApp } from '../../models/app.model';
import type { ITab } from '../../models/tab.model';
import type { IWebEvent } from '../../models/web-event.model';

@Component({
    selector: 'app-webview',
    templateUrl: './app-webview.component.html',
    styleUrls: ['./app-webview.component.css']
})
export class AppWebviewComponent {
    @Input() public currentApp: IApp = {} as IApp;
    @Input() public currentTab: ITab = {} as ITab;
    @Input() public apps: IApp[] = [];
    @Input() public tabIds: number[] = [];
    @Input() public screenHeight: number = 0;
    @Input() public screenWidth: number = 0;
    @Output() public onDomReady: EventEmitter<IWebEvent> = new EventEmitter<IWebEvent>();
    @Output() public onNewUrl: EventEmitter<IWebEvent> = new EventEmitter<IWebEvent>();
    @Output() public onTitleChanged: EventEmitter<IWebEvent> = new EventEmitter<IWebEvent>();
    @Output() public onIconChanged: EventEmitter<IWebEvent> = new EventEmitter<IWebEvent>();
    @Output() public onUrlChanged: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onContextMenu: EventEmitter<any> = new EventEmitter<any>();

    public onDomReadyHandler(): void {
        this.onDomReady.emit({
            eventValue: '',
            eventName: 'domready',
            tabId: this.currentTab.id,
            app: this.currentTab
        });
    }

    public onNewUrlHandler(event: Event): void {
        this.onNewUrl.emit({
            eventValue: (event.target as HTMLInputElement).value,
            eventName: 'newurl',
            tabId: this.currentTab.id,
            app: this.currentTab
        });
    }

    public onTitleChangedHandler(event: Event): void {
        this.onTitleChanged.emit({
            eventValue: (event.target as HTMLInputElement).value,
            eventName: 'titlechanged',
            tabId: this.currentTab.id,
            app: this.currentTab
        });
    }

    public onIconChangedHandler(event: Event): void {
        this.onIconChanged.emit({
            eventValue: (event.target as HTMLInputElement).value,
            eventName: 'iconchanged',
            tabId: this.currentTab.id,
            app: this.currentTab
        });
    }

    public onUrlChangedHandler(event: Event): void {
        this.onUrlChanged.emit((event.target as HTMLInputElement).value);
    }
}
