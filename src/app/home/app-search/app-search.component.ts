import { Component, Output, EventEmitter, Input } from '@angular/core';
import type { IWebEvent } from '../../models/web-event.model';
import type { ITab } from '../../models/tab.model';
import type { IApp } from '../../models/app.model';
import type { IHistoryItem } from '../../models/history-item.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as appActions from '../../actions/app.actions';
import { Observable } from 'rxjs';

declare const $: any;

@Component({
    selector: 'app-search',
    styleUrls: ['./app-search.component.css'],
    templateUrl: './app-search.component.html'
})
export class AppSearchComponent {
    @Input() public currentApp!: IApp;
    @Input() public currentTab!: ITab;
    @Input() public histories: IHistoryItem[] = [];
    @Input() public topApps: IHistoryItem[] = [];
    @Input() public suggestions: any[] = [];
    @Output() public onSearch: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onSearchReplacing: EventEmitter<IWebEvent> = new EventEmitter<IWebEvent>();
    private appSearch: string = '';
    private newSearch: boolean = true;
    private gotResult = false;
    private historiesSearched: IHistoryItem[] = [];
    private currentIndexOfSearches: number = -1;

    constructor(public store: Store<fromRoot.State>) {
    }

    public show(oldUrl: string): void {
        this.store.dispatch(new appActions.ClearSuggestionsAction());
        this.newSearch = true;
        this.gotResult = false;
        if (oldUrl) {
            this.newSearch = false;
        }
        this.appSearch = oldUrl;
        this.historiesSearched = [];
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

    private doSearch(link: string): void {
        if (this.gotResult) {
            return;
        }
        this.gotResult = true;
        if (this.newSearch) {
            let newLink = link;
            if (!this.isPotentialLink(link)) {
                newLink = this.getGoogleSearchLink(link);
            }
            this.onSearch.emit(newLink);
            return;
        }
        let currentTab = JSON.parse(JSON.stringify(this.currentTab));
        let currentApp = JSON.parse(JSON.stringify(this.currentApp));
        let newLink = link;
        if (!this.isPotentialLink(link)) {
            newLink = this.getGoogleSearchLink(link);
        }
        let webEvent: IWebEvent = {
            tabId: currentTab.id,
            eventValue: newLink,
            app: currentApp,
            eventName: 'urlchanged'
        };
        this.onSearchReplacing.emit(webEvent);
    }

    private getGoogleSearchLink(suggestion: string): string {
        let googleLink = 'https://www.google.com/search?ie=UTF-8&q=' + encodeURI(suggestion);
        return googleLink;
    }

    private doGoogleSearch(suggestion: string): void {
        if (this.isContainMethod(suggestion) && this.isPotentialLink(suggestion)) {
            this.doSearch(suggestion);
            return;
        }
        let googleLink = this.getGoogleSearchLink(suggestion);
        this.doSearch(googleLink);
    }

    private isContainMethod(suggestion: string): boolean {
        return Boolean(suggestion && (suggestion.indexOf('http://') === 0 || suggestion.indexOf('https://') === 0));
    }

    private isPotentialLink(suggestion: string): boolean {
        return Boolean(suggestion && suggestion.indexOf('.') >= 0 && suggestion.indexOf(' ') < 0);
    }

    private onUp($event: KeyboardEvent): void {
        if (this.currentIndexOfSearches <= -1) {
            this.currentIndexOfSearches = -1;
            return;
        }
        this.currentIndexOfSearches--;
    }

    private onDown($event: KeyboardEvent): void {
        if (this.currentIndexOfSearches >= 4) {
            this.currentIndexOfSearches = 0;
            return;
        }
        this.currentIndexOfSearches++;
    }

    private keyUp($event: KeyboardEvent): void {
        $event.preventDefault();
        console.log($event);
        if ($event.code === 'ArrowDown') {
            this.onDown($event);
            return;
        }
        if ($event.code === 'ArrowUp') {
            this.onUp($event);
            return;
        }
        if ($event.code === 'Enter') {
            console.log(this.currentIndexOfSearches);
            if (this.currentIndexOfSearches === -1) {
                this.doSearch(($event.target as HTMLInputElement).value);
                return;
            }
            if (this.currentIndexOfSearches === 0) {
                this.doGoogleSearch(this.appSearch);
                return;
            }
            this.doGoogleSearch(this.suggestions[this.currentIndexOfSearches - 1].key);
            return;
        }
        this.currentIndexOfSearches = -1;
    }
}
