import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
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
export class AppSearchComponent implements OnInit, OnDestroy {
    @Input() currentApp: IApp = { id: 0, title: '', url: '', icon: '' };
    @Input() suggestions: any[] = [];
    @Input() histories: IHistoryItem[] = [];
    @Input() topApps: IHistoryItem[] = [];
    @Input() currentTab: ITab = { id: 0, appId: 0, title: '', url: '', hostName: '', icon: '' };

    @Output() onSearch = new EventEmitter<any>();
    @Output() onSearchReplacing = new EventEmitter<any>();

    public appSearch: string = '';
    public historiesSearched: IHistoryItem[] = [];
    public currentSelectedSearchItem: number = 0;

    constructor(private store: Store<fromRoot.State>) {}

    ngOnInit() {}

    ngOnDestroy() {}

    public show(event?: any) {
        this.store.dispatch(new appActions.ClearSuggestionsAction());
        this.appSearch = '';
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

    public onSearchChanged() {
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

    public doSearch(key: string) {
        if (this.currentSelectedSearchItem === -1) {
            this.doGoogleSearch(key);
        } else if (this.suggestions && this.suggestions[this.currentSelectedSearchItem - 1]) {
            this.doGoogleSearch(this.suggestions[this.currentSelectedSearchItem - 1].key);
        }
    }

    public doGoogleSearch(key: string) {
        if (this.isContainMethod(key) && this.isPotentialLink(key)) {
            this.doSearch(key);
            return;
        }
        let googleLink = this.getGoogleSearchLink(key);
        this.doSearch(googleLink);
    }

    private getGoogleSearchLink(suggestion: string): string {
        let googleLink = 'https://www.google.com/search?ie=UTF-8&q=' + encodeURI(suggestion);
        return googleLink;
    }

    private isContainMethod(suggestion: string): boolean {
        return Boolean(suggestion && (suggestion.indexOf('http://') === 0 || suggestion.indexOf('https://') === 0));
    }

    private isPotentialLink(suggestion: string): boolean {
        return Boolean(suggestion && suggestion.indexOf('.') >= 0 && suggestion.indexOf(' ') < 0);
    }

    public keyUp(event: any) {
        event.preventDefault();
        console.log(event);
        if (event.code === 'ArrowDown') {
            this.onDown(event);
            return;
        }
        if (event.code === 'ArrowUp') {
            this.onUp(event);
            return;
        }
        if (event.code === 'Enter') {
            console.log(this.currentSelectedSearchItem);
            if (this.currentSelectedSearchItem === -1) {
                this.doSearch((event.target as HTMLInputElement).value);
                return;
            }
            if (this.currentSelectedSearchItem === 0) {
                this.doGoogleSearch(this.appSearch);
                return;
            }
            if (this.suggestions && this.suggestions[this.currentSelectedSearchItem - 1]) {
                this.doGoogleSearch(this.suggestions[this.currentSelectedSearchItem - 1].key);
            }
            return;
        }
        this.currentSelectedSearchItem = -1;
    }

    private onUp(event: any): void {
        if (this.currentSelectedSearchItem <= -1) {
            this.currentSelectedSearchItem = -1;
            return;
        }
        this.currentSelectedSearchItem--;
    }

    private onDown(event: any): void {
        if (this.currentSelectedSearchItem >= 4) {
            this.currentSelectedSearchItem = 0;
            return;
        }
        this.currentSelectedSearchItem++;
    }

    public isCurrentSelectedSearchItem(index: number): boolean {
        return this.currentSelectedSearchItem === index;
    }

    public selectHistoryItem(item: IHistoryItem) {
        this.doGoogleSearch(item.link);
        this.hide();
    }
}
