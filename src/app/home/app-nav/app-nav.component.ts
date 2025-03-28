import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IApp } from '../../models/app.model';
import { ITab } from '../../models/tab.model';
import { IHistoryItem } from '../../models/history-item.model';
import { IWebEvent } from '../../models/web-event.model';

@Component({
    selector: 'app-nav',
    templateUrl: './app-nav.component.html',
    styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {
    @Input() public currentApp: IApp | null = null;
    @Input() public tabs: ITab[] = [];
    @Input() public screenWidth: number = 0;
    @Input() public histories: IHistoryItem[] = [];
    @Input() public currentTab: ITab | null = null;
    @Output() public onSearch = new EventEmitter<any>();
    @Output() public onNextClick = new EventEmitter<any>();
    @Output() public onBackClick = new EventEmitter<any>();
    @Output() public onReloadClick = new EventEmitter<any>();
    @Output() public onGotoTab = new EventEmitter<any>();
    @Output() public onCloseTab = new EventEmitter<any>();
    @Output() public onContextMenu = new EventEmitter<any>();

    public onMouseUp(event: MouseEvent, tab: ITab): void {
        // middle button
        if (event.button === 1) {
            this.onCloseTab.emit(tab);
        }
    }

    public getHistoryForHost(): IHistoryItem[] | null {
        if (!this.currentTab || !this.histories || this.histories.length === 0) {
            return null;
        }
        return this.histories
            .filter(item =>
                item.title &&
                item.host.toLowerCase() === this.currentTab!.hostName.toLowerCase())
            .slice(0, 10);
    }

    public selectHistoryItem(item: IHistoryItem): void {
        this.doSearch(item.link);
    }

    private doSearch(link: string) {
        if (!this.currentTab || !this.currentApp) return;
        
        const webEvent: IWebEvent = {
            tabId: this.currentTab.id,
            eventValue: link,
            app: this.currentApp,
            eventName: 'urlchanged'
        };
        this.onSearch.emit(webEvent);
    }

    public getTabWidth(): string {
        if (!this.currentApp) return '0px';
        const tabCount = this.tabs ? this.tabs.filter(tab => tab.appId === this.currentApp!.id).length : 0;
        if (tabCount === 0) {
            return '0px';
        }
        const screenWidth = this.screenWidth - 180;
        const tabWidth = (screenWidth / tabCount) - 2;
        return tabWidth + 'px';
    }
}
