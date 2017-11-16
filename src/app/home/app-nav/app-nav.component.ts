
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IApp } from '../../models/app.model';
import { ITab } from '../../models/tab.model';
import { IHistoryItem } from '../../models/history-item.model';
import { IWebEvent } from '../../models/web-event.model';

@Component({
    selector: 'app-nav',
    styleUrls: ['./app-nav.component.css'],
    templateUrl: './app-nav.component.html'
})

export class AppNavComponent {

    @Input() public currentApp: IApp;
    @Input() public tabs: ITab[];
    @Input() public screenWidth: number;
    @Input() public histories: IHistoryItem[];
    @Input() public currentTab: ITab;
    @Output() public onSearch: EventEmitter<IWebEvent> = new EventEmitter<IWebEvent>();
    @Output() public onNextClick: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onBackClick: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onReloadClick: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onGotoTab: EventEmitter<ITab> = new EventEmitter<ITab>();
    @Output() public onCloseTab: EventEmitter<ITab> = new EventEmitter<ITab>();
    @Output() public onContextMenu: EventEmitter<ITab> = new EventEmitter<ITab>();

    public show(): void {
        $('#app-search')['modal']('show');
    }

    public hide(): void {
        $('#app-search')['modal']('hide');
    }

    private onMouseUp($event, tab) {
        // middle button
        if ($event.button === 1) {
            this.onCloseTab.emit(tab);
        }
    }

    private getHistoryForHost(): IHistoryItem[] {
        if (!this.currentTab) {
            return null;
        }
        if (!this.histories || this.histories.length === 0) {
            return null;
        }
        return this.histories
            .filter(item =>
                item.title
                && item.host.toLocaleLowerCase() === this.currentTab.hostName.toLocaleLowerCase())
            .slice(0, 10);
    }

    private selectHistoryItem(item: IHistoryItem): void {
        this.doSearch(item.link);
    }

    private doSearch(link) {
        let currentTab = JSON.parse(JSON.stringify(this.currentTab));
        let currentApp = JSON.parse(JSON.stringify(this.currentApp));
        let webEvent: IWebEvent = {
            tabId: currentTab.id,
            eventValue: link,
            app: currentApp,
            eventName: 'urlchanged'
        };
        this.onSearch.emit(webEvent);
    }

    private getTabWidth(): string {
        let tabCount = this.tabs ? this.tabs.filter(tab => tab.appId === this.currentApp.id).length : 0;
        if (tabCount === 0) {
            return '0px';
        }
        let screenWidth = this.screenWidth - 180;
        let tabWidth = screenWidth / tabCount;
        return tabWidth + 'px';
    }
}
