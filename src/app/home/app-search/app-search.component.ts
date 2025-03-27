import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ElementRef, ViewChild, HostListener } from '@angular/core';
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
    styleUrls: ['./app-search.component.scss'],
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

    @ViewChild('searchInput') searchInput!: ElementRef;

    public appSearch: string = '';
    public historiesSearched: IHistoryItem[] = [];
    public currentSelectedSearchItem: number = 0;
    public isVisible: boolean = false;

    constructor(private store: Store<fromRoot.State>) {}

    ngOnInit() {}

    ngOnDestroy() {}

    @HostListener('document:keydown.escape')
    onEscapePressed() {
        this.hide();
    }

    @HostListener('document:click', ['$event'])
    onClickOutside(event: MouseEvent) {
        const searchModal = (event.target as HTMLElement).closest('.search-modal');
        if (this.isVisible && !searchModal) {
            this.hide();
        }
    }

    public show(event?: any) {
        event?.preventDefault();
        event?.stopPropagation();
        this.store.dispatch(new appActions.ClearSuggestionsAction());
        this.appSearch = '';
        this.historiesSearched = [];
        this.currentSelectedSearchItem = -1;
        this.isVisible = true;
        setTimeout(() => {
            if (this.searchInput) {
                this.searchInput.nativeElement.focus();
            }
        });
    }

    public hide(): void {
        this.isVisible = false;
        this.appSearch = '';
        this.historiesSearched = [];
        this.currentSelectedSearchItem = -1;
        this.store.dispatch(new appActions.ClearSuggestionsAction());
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
        if (!key) return;
        
        // Handle URL directly if it's a valid URL or contains http(s)://
        if (this.isValidUrl(key)) {
            // Ensure URL has protocol
            const url = key.startsWith('http') ? key : `https://${key}`;
            this.onSearch.emit({ url });
            this.hide();
            return;
        }

        // Handle Google search
        const googleLink = this.getGoogleSearchLink(key);
        this.onSearch.emit({ url: googleLink });
        this.hide();
    }

    public doGoogleSearch(key: string) {
        if (!key) return;
        
        // If it looks like a URL, try to navigate directly
        if (this.isValidUrl(key)) {
            this.onSearch.emit({ url: this.formatUrl(key) });
        } else {
            // Otherwise do a Google search
            const googleLink = this.getGoogleSearchLink(key);
            this.onSearch.emit({ url: googleLink });
        }
        this.hide();
    }

    private getGoogleSearchLink(suggestion: string): string {
        return `https://www.google.com/search?ie=UTF-8&q=${encodeURIComponent(suggestion)}`;
    }

    private isValidUrl(str: string): boolean {
        // Check if it's already a valid URL
        try {
            new URL(str);
            return true;
        } catch {
            // Check if it could be a valid URL with https:// prefix
            try {
                new URL(`https://${str}`);
                return this.isPotentialLink(str);
            } catch {
                return false;
            }
        }
    }

    private formatUrl(url: string): string {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        return `https://${url}`;
    }

    private isPotentialLink(suggestion: string): boolean {
        return Boolean(
            suggestion && 
            suggestion.includes('.') && 
            !suggestion.includes(' ') &&
            !suggestion.includes('?') // Exclude search queries with dots
        );
    }

    public keyUp(event: any) {
        if (event.code === 'ArrowDown') {
            this.onDown(event);
            return;
        }
        if (event.code === 'ArrowUp') {
            this.onUp(event);
            return;
        }
        if (event.code === 'Enter') {
            const value = (event.target as HTMLInputElement).value.trim();
            if (this.currentSelectedSearchItem === -1) {
                this.doSearch(value);
            } else if (this.currentSelectedSearchItem === 0) {
                this.doGoogleSearch(this.appSearch);
            } else if (this.suggestions && this.suggestions[this.currentSelectedSearchItem - 1]) {
                this.doGoogleSearch(this.suggestions[this.currentSelectedSearchItem - 1].key);
            }
            return;
        }
        this.currentSelectedSearchItem = -1;
        this.onSearchChanged();
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
