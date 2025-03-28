import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { IApp } from '../../models/app.model';
import type { ITab } from '../../models/tab.model';

@Component({
    selector: 'app-bar',
    templateUrl: './app-bar.component.html',
    styleUrls: ['./app-bar.component.scss']
})

export class AppBarComponent {
    @Input() public currentApp: IApp | null = null;
    @Input() public currentTab: ITab | null = null;
    @Input() public app2Hosts: { [id: number]: string } = {};
    @Input() public apps: IApp[] = [];
    @Input() public tabs: ITab[] = [];
    @Input() public screenWidth: number = 0;
    @Output() public onAppSelect = new EventEmitter<any>();
    @Output() public onAppClose = new EventEmitter<any>();
    @Output() public onContextMenu = new EventEmitter<any>();
    @Output() public onBtnAddApp = new EventEmitter<any>();
    @Output() public onEnteredSearchBox = new EventEmitter<any>();
    @Output() public onBtnAppAction = new EventEmitter<any>();
    @Output() public onAppBarDoubleClick = new EventEmitter<any>();
    @Output() public onTabSelect = new EventEmitter<any>();
    @Output() public onTabClose = new EventEmitter<any>();
    @Output() public onTabContextMenu = new EventEmitter<any>();
    @Output() public onSearch = new EventEmitter<any>();
    @Output() public gotoApp = new EventEmitter<any>();
    @Output() public onAppContextMenu = new EventEmitter<any>();
    @Output() public closeApp = new EventEmitter<any>();

    public getHost(app: IApp): string {
        if (!app || !app.url) return '';
        try {
            return new URL(app.url).hostname;
        } catch {
            return app.title || '';
        }
    }

    public getAppTabs(app: IApp): ITab[] {
        if (!app || !this.tabs) return [];
        return this.tabs.filter(tab => tab.appId === app.id);
    }

    public getTabWidth(): string {
        return `${100 / this.apps.length}%`;
    }

    public onMouseUp(event: MouseEvent, app: IApp): void {
        if (event.button === 1) {
            this.onAppClose.emit(app);
        }
    }

    public onTabMouseUp(event: MouseEvent, tab: ITab): void {
        if (event.button === 1) {
            this.onTabClose.emit(tab);
        }
    }
}
