import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import type { IApp } from '../../models/app.model';
import type { ITab } from '../../models/tab.model';
import type { IHistoryItem } from '../../models/history-item.model';
import type { IWebEvent } from '../../models/web-event.model';
import { GoogleSuggestionService } from '../../services/google-suggestion.service';

@Component({
    selector: 'app-search',
    templateUrl: './app-search.component.html',
    styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent {
    @ViewChild('searchInput') searchInput!: ElementRef;
    @ViewChild('searchBox') searchBox!: ElementRef;

    @Input() currentApp: IApp = { id: 0, title: '', url: '', icon: '' };
    @Input() currentTab: ITab = { id: 0, appId: 0, title: '', url: '', hostName: '', icon: '' };
    @Input() histories: IHistoryItem[] = [];
    @Input() topApps: IHistoryItem[] = [];

    @Output() onSearch = new EventEmitter<{ url: string }>();
    @Output() onSearchReplacing = new EventEmitter<any>();

    isVisible = false;
    searchText = '';
    selectedIndex = -1;
    suggestions: IHistoryItem[] = [];
    historiesSearched: IHistoryItem[] = [];
    gotResult = false;
    private searchSubject = new Subject<string>();
    private newSearch = true;

    constructor(private googleSuggestionService: GoogleSuggestionService) {
        // Set up search debounce
        this.searchSubject.pipe(
            filter(text => text.length > 0),
            debounceTime(300),
            distinctUntilChanged(),
            switchMap(text => this.googleSuggestionService.getSuggestionWords(text))
        ).subscribe(suggestions => {
            this.suggestions = suggestions.map(s => {
                const isUrl = this.isPotentialLink(s.key);
                return {
                    id: 0,
                    title: s.title || s.key,
                    link: s.key,
                    icon: '',
                    time: new Date(),
                    date: new Date(),
                    host: isUrl ? new URL(s.key.startsWith('http') ? s.key : `http://${s.key}`).hostname : '',
                    weight: 0
                } as IHistoryItem;
            });
        });
    }

    show(oldUrl?: string) {
        this.isVisible = true;
        this.gotResult = false;
        this.newSearch = !oldUrl;
        this.searchText = oldUrl || '';
        this.selectedIndex = -1;
        this.updateSuggestions();
        setTimeout(() => {
            this.searchInput.nativeElement.focus();
            if (oldUrl) {
                this.searchInput.nativeElement.select();
            }
        }, 100);
    }

    hide() {
        this.isVisible = false;
        this.searchText = '';
        this.selectedIndex = -1;
        this.suggestions = [];
        this.historiesSearched = [];
        this.gotResult = false;
    }

    keyUp(event: KeyboardEvent) {
        this.onKeyDown(event);
    }

    onSearchChanged() {
        this.onInput({ target: this.searchInput.nativeElement } as unknown as Event);
    }

    onKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (this.gotResult) {
                return;
            }
            this.gotResult = true;

            if (this.selectedIndex === 0) {
                // Google search is always first item
                this.doGoogleSearch(this.searchText);
            } else if (this.selectedIndex > 0 && this.selectedIndex <= this.suggestions.length) {
                const selectedItem = this.suggestions[this.selectedIndex - 1];
                if (this.isPotentialLink(selectedItem.link)) {
                    this.selectHistoryItem(selectedItem);
                } else {
                    this.doGoogleSearch(selectedItem.link);
                }
            } else {
                // If no suggestion selected, try to navigate directly or fallback to Google search
                this.doSearch(this.searchText);
            }
            this.hide();
        } else if (event.key === 'Escape') {
            this.hide();
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            const maxIndex = this.suggestions.length;
            if (this.selectedIndex >= maxIndex) {
                this.selectedIndex = 0;
            } else {
                this.selectedIndex++;
            }
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            if (this.selectedIndex <= 0) {
                this.selectedIndex = -1;
            } else {
                this.selectedIndex--;
            }
        }
    }

    onInput(event: Event) {
        const target = event.target as HTMLInputElement;
        this.searchText = target.value;
        this.selectedIndex = -1; // Reset selection when typing
        this.updateSuggestions();
        this.searchSubject.next(this.searchText);
    }

    private updateSuggestions() {
        if (!this.searchText || !this.searchText.trim()) {
            this.suggestions = [];
            this.historiesSearched = [];
            return;
        }

        const searchLower = this.searchText.toLowerCase();
        
        // Update history search results
        this.historiesSearched = (this.histories || []).filter(h => 
            (h.title && h.title.toLowerCase().includes(searchLower)) || 
            (h.link && h.link.toLowerCase().includes(searchLower))
        ).slice(0, 5);
    }

    isCurrentSelectedSearchItem(index: number): boolean {
        return this.selectedIndex === index;
    }

    doGoogleSearch(text: string) {
        if (!text || !text.trim()) {
            return;
        }
        const url = `https://www.google.com/search?ie=UTF-8&q=${encodeURI(text)}`;
        this.doSearch(url);
    }

    selectHistoryItem(item: IHistoryItem) {
        if (!item || !item.link) {
            return;
        }
        this.doSearch(item.link);
    }

    handleSuggestionClick(suggestion: IHistoryItem) {
        if (!suggestion || !suggestion.link) {
            return;
        }
        if (this.isPotentialLink(suggestion.link)) {
            this.selectHistoryItem(suggestion);
        } else {
            this.doGoogleSearch(suggestion.link);
        }
    }

    doSearch(link: string) {
        if (this.gotResult || !link || !link.trim()) {
            return;
        }
        this.gotResult = true;

        if (this.newSearch) {
            const newLink = this.isPotentialLink(link) ? link : this.getGoogleSearchLink(link);
            this.onSearch.emit({ url: newLink });
        } else {
            const currentTab = { ...this.currentTab };
            const currentApp = { ...this.currentApp };
            const newLink = this.isPotentialLink(link) ? link : this.getGoogleSearchLink(link);
            const webEvent: IWebEvent = {
                tabId: currentTab.id,
                eventValue: newLink,
                app: currentApp,
                eventName: 'urlchanged'
            };
            this.onSearchReplacing.emit(webEvent);
        }
        this.hide();
    }

    private getGoogleSearchLink(text: string): string {
        if (!text || !text.trim()) {
            return '';
        }
        return `https://www.google.com/search?ie=UTF-8&q=${encodeURI(text)}`;
    }

    private isPotentialLink(text: string): boolean {
        return Boolean(text && text.trim() && 
               (text.startsWith('http://') || text.startsWith('https://') || 
                (text.includes('.') && !text.includes(' '))));
    }
}
