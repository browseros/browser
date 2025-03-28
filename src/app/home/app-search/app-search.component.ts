import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import type { IApp } from '../../models/app.model';
import type { ITab } from '../../models/tab.model';
import type { IHistoryItem } from '../../models/history-item.model';
import { StateHelper } from '../../reducers/helper';

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
    @Output() onSearchReplacing = new EventEmitter<string>();

    isVisible = false;
    searchText = '';
    selectedIndex = -1;
    suggestions: IHistoryItem[] = [];
    historiesSearched: IHistoryItem[] = [];

    show(event?: MouseEvent) {
        this.isVisible = true;
        setTimeout(() => {
            this.searchInput.nativeElement.focus();
        }, 100);
    }

    hide() {
        this.isVisible = false;
        this.searchText = '';
        this.selectedIndex = -1;
        this.suggestions = [];
        this.historiesSearched = [];
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
            if (this.selectedIndex === 0) {
                // Google search is always first item
                this.doGoogleSearch(this.searchText);
            } else if (this.selectedIndex > 0 && this.selectedIndex <= this.suggestions.length) {
                this.onSearch.emit({ url: this.suggestions[this.selectedIndex - 1].link });
            } else {
                // If no suggestion selected, try to navigate directly or fallback to Google search
                const url = this.isPotentialLink(this.searchText) ? 
                    this.searchText : 
                    `https://www.google.com/search?q=${encodeURIComponent(this.searchText)}`;
                this.onSearch.emit({ url });
            }
            this.hide();
        } else if (event.key === 'Escape') {
            this.hide();
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            this.selectedIndex = Math.min(this.selectedIndex + 1, this.suggestions.length);
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
        }
    }

    onInput(event: Event) {
        const target = event.target as HTMLInputElement;
        this.searchText = target.value;
        this.updateSuggestions();
    }

    private updateSuggestions() {
        if (!this.searchText) {
            this.suggestions = [];
            this.historiesSearched = [];
            return;
        }

        const searchLower = this.searchText.toLowerCase();
        this.suggestions = [
            ...this.histories.filter(h => 
                h.title.toLowerCase().includes(searchLower) || 
                h.link.toLowerCase().includes(searchLower)
            ),
            ...this.topApps.filter(a => 
                a.title.toLowerCase().includes(searchLower) || 
                a.link.toLowerCase().includes(searchLower)
            )
        ].slice(0, 10);

        this.historiesSearched = this.histories.filter(h => 
            h.title.toLowerCase().includes(searchLower) || 
            h.link.toLowerCase().includes(searchLower)
        ).slice(0, 10);
    }

    isCurrentSelectedSearchItem(index: number): boolean {
        return this.selectedIndex === index;
    }

    doGoogleSearch(text: string) {
        if (this.isPotentialLink(text)) {
            this.onSearch.emit({ url: text });
        } else {
            const url = `https://www.google.com/search?q=${encodeURIComponent(text)}`;
            this.onSearch.emit({ url });
        }
        this.hide();
    }

    selectHistoryItem(item: IHistoryItem) {
        this.onSearch.emit({ url: item.link });
        this.hide();
    }

    private isPotentialLink(text: string): boolean {
        return Boolean(text && 
               (text.startsWith('http://') || text.startsWith('https://') || 
                (text.includes('.') && !text.includes(' '))));
    }
}
