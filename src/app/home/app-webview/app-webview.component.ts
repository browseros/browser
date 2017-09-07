
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IApp } from '../../models/app.model';
import { ITab } from '../../models/tab.model';

@Component({
    selector: 'app-webview',
    styleUrls: ['./app-webview.component.css'],
    templateUrl: './app-webview.component.html'
})

export class AppWebviewComponent {
    @Input() public currentApp: IApp;
    @Input() public currentTab: ITab;
    @Input() public apps: IApp[];
    private currentTabId: number = 0;
}
