
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IWebEvent } from '../../models/web-event.model';
import { ITab } from '../../models/tab.model';
import { IApp } from '../../models/app.model';
import { IHistoryItem } from '../../models/history-item.model';

@Component({
    selector: 'app-search',
    styleUrls: ['./app-search.component.css'],
    templateUrl: './app-search.component.html'
})

export class AppSearchComponent {

    @Input() public currentApp: IApp;
    @Input() public currentTab: ITab;
    @Input() public histories: IHistoryItem[];
    @Input() public topApps: IHistoryItem[];
    @Output() public onSearch: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onSearchReplacing: EventEmitter<IWebEvent> = new EventEmitter<IWebEvent>();
    private appSearch: string;
    private newSearch: boolean = true;
    private gotResult = false;
    private historiesSearched: IHistoryItem[];

    public show(oldUrl: string): void {
        this.newSearch = true;
        this.gotResult = false;
        if (oldUrl) {
            this.newSearch = false;
        }
        this.appSearch = oldUrl;
        this.historiesSearched = null;
        $('#app-search')['modal']('show');
        $('#app-search').on('shown.bs.modal', () => {
            $('#app-search-input').focus();
            $('#app-search-input').select();
        });
    }

    public hide(): void {
        $('#app-search')['modal']('hide');
    }

    private onSearchChanged(): void {
        this.historiesSearched = this.searchApp();
    }

    private searchApp(): IHistoryItem[] {
        let key = this.appSearch;
        if (!key || key.length === 0) {
            return null;
        }
        if (!this.histories || this.histories.length === 0) {
            return null;
        }
        let ret = [];
        let count = 0;
        for (let item of this.histories) {
            let link = item.link.toLocaleLowerCase();
            let title = item.title.toLocaleLowerCase();
            if (!title) {
                continue;
            }
            if (link.indexOf(key.toLocaleLowerCase()) >= 0) {
                ret.push(item);
                count++;
            } else if (title.indexOf(key.toLocaleLowerCase()) >= 0) {
                ret.push(item);
                count++;
            }
            if (count >= 5) {
                break;
            }
        }
        return ret;
    }

    private doSearch(link) {
        if (this.gotResult) {
            return;
        }
        this.gotResult = true;
        if (this.newSearch) {
            this.onSearch.emit(link);
            return;
        }
        let currentTab = JSON.parse(JSON.stringify(this.currentTab));
        let currentApp = JSON.parse(JSON.stringify(this.currentApp));
        let webEvent: IWebEvent = {
            tabId: currentTab.id,
            eventValue: link,
            app: currentApp,
            eventName: 'urlchanged'
        };
        this.onSearchReplacing.emit(webEvent);
    }

    private selectHistoryItem(item: IHistoryItem): void {
        this.doSearch(item.link);
    }
}
