import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import type { IWebEvent } from '../../models/web-event.model';
import type { ITab } from '../../models/tab.model';
import type { IApp } from '../../models/app.model';
import type { IHistoryItem } from '../../models/history-item.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as appActions from '../../actions/app.actions';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
    selector: 'app-search',
    styleUrls: ['./app-search.component.css'],
    templateUrl: './app-search.component.html'
})
export class AppSearchComponent {
    @ViewChild('searchModal') public searchModal!: ElementRef;
    @Input() public currentApp: IApp = {} as IApp;
    @Input() public currentTab: ITab = {} as ITab;
    @Input() public histories: IHistoryItem[] = [];
    @Input() public topApps: IApp[] = [];
    @Input() public suggestions: any[] = [];
    @Output() public onSearch = new EventEmitter<string>();
    @Output() public onSearchReplacing = new EventEmitter<IWebEvent>();

    public appSearch: string = '';
    public currentSelectedSearchItem: number = 0;
    public historiesSearched: IHistoryItem[] = [];
    private gotResult: boolean = false;
    private newSearch: boolean = true;

    constructor(public store: Store<fromRoot.State>) {}

    ngOnInit(): void {
        this.historiesSearched = [];
    }

    public show(): void {
        $(this.searchModal.nativeElement).modal('show');
    }

    public hide(): void {
        $(this.searchModal.nativeElement).modal('hide');
    }

    public onSearchChangedHandler(): void {
        this.historiesSearched = this.searchApp();
    }

    public isCurrentSelectedSearchItem(index: number): boolean {
        return this.currentSelectedSearchItem === index;
    }

    public doGoogleSearch(searchText: string): void {
        this.appSearch = searchText;
        this.doSearch(searchText);
    }

    public isContainMethod(searchText: string): boolean {
        return searchText.includes('(') && searchText.includes(')');
    }

    public doSearch(searchText: string): void {
        if (this.gotResult) {
            return;
        }
        this.gotResult = true;
        if (this.newSearch) {
            let newLink = searchText;
            if (!this.isPotentialLink(searchText)) {
                newLink = this.getGoogleSearchLink(searchText);
            }
            this.onSearch.emit(newLink);
            return;
        }
        let currentTab = JSON.parse(JSON.stringify(this.currentTab));
        let currentApp = JSON.parse(JSON.stringify(this.currentApp));
        let newLink = searchText;
        if (!this.isPotentialLink(searchText)) {
            newLink = this.getGoogleSearchLink(searchText);
        }
        let webEvent: IWebEvent = {
            tabId: currentTab.id,
            eventValue: newLink,
            app: currentApp,
            eventName: 'urlchanged'
        };
        this.onSearchReplacing.emit(webEvent);
        $(this.searchModal.nativeElement).modal('hide');
    }

    public selectHistoryItem(item: IHistoryItem): void {
        this.doSearch(item.link);
    }

    private searchApp(): IHistoryItem[] {
        let key = this.appSearch;
        if (!key || key.length === 0) {
            this.store.dispatch(new appActions.ClearSuggestionsAction());
            return [];
        }
        this.store.dispatch(new appActions.GetSuggestionsAction(key));
        if (!this.histories || this.histories.length === 0) {
            return [];
        }
        let ret: IHistoryItem[] = [];
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

    private getGoogleSearchLink(suggestion: string): string {
        let googleLink = 'https://www.google.com/search?ie=UTF-8&q=' + encodeURI(suggestion);
        return googleLink;
    }

    private isPotentialLink(suggestion: string): boolean {
        return Boolean(suggestion) &&
            (suggestion.indexOf('.') >= 0) &&
            (suggestion.indexOf(' ') < 0);
    }

    public keyUp(event: KeyboardEvent): void {
        if (event.key === 'ArrowDown') {
            this.currentSelectedSearchItem = Math.min(this.currentSelectedSearchItem + 1, this.suggestions.length);
        } else if (event.key === 'ArrowUp') {
            this.currentSelectedSearchItem = Math.max(this.currentSelectedSearchItem - 1, 0);
        } else if (event.key === 'Enter') {
            this.doSearch(this.appSearch);
        }
    }
}
