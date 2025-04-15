import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import type { IHistoryItem } from '../../models/history-item.model';
import { HistoryService } from '../../services/history.service';
import * as appActions from '../../actions/app.actions';
import { StateHelper } from '../../utils/state.helper';

@Component({
    selector: 'blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    public recentApps: IHistoryItem[] = [];
    public isVisible: boolean = true;

    constructor(
        private store: Store<fromRoot.State>,
        private historyService: HistoryService
    ) {}

    ngOnInit(): void {
        // Subscribe to history updates
        this.historyService.history$.subscribe(histories => {
            if (histories) {
                this.recentApps = this.historyService.getTopItems(8); // Show top 8 recent apps
            }
        });

        // Subscribe to store to know when to show/hide the blank page
        this.store.select(state => ({
            currentTab: state.app.currentTab,
            currentApp: state.app.currentApp
        })).subscribe(({ currentTab, currentApp }) => {
            this.isVisible = !currentApp && !currentTab;
        });
    }

    public handleAppClick(app: IHistoryItem): void {
        if (!app || !app.link) return;
        
        // Create a new tab with the app's URL
        const hostname = StateHelper.extractHostname(app.link);
        const newTab = {
            id: 0,  // Will be set by the reducer
            appId: 0,  // Will be set by the reducer
            title: app.title || hostname,
            url: app.link,
            hostName: hostname,
            icon: app.icon || ''
        };
        
        // Dispatch action to add the tab
        this.store.dispatch(new appActions.AddTabAction(newTab));
    }

    public handleSearch(event: Event): void {
        const input = event.target as HTMLInputElement;
        const query = input.value.trim();
        
        if (!query) return;

        // Prepare the URL
        let url = query;
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            // If it looks like a URL, add https://, otherwise search with Google
            if (query.includes('.') && !query.includes(' ')) {
                url = `https://${query}`;
            } else {
                url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            }
        }

        // Create a new tab with the search URL
        const hostname = StateHelper.extractHostname(url);
        const newTab = {
            id: 0,
            appId: 0,
            title: hostname,
            url: url,
            hostName: hostname,
            icon: ''
        };

        // Clear the input after search
        input.value = '';

        // Dispatch action to add the tab
        this.store.dispatch(new appActions.AddTabAction(newTab));
    }

    public getFaviconUrl(url: string): string {
        try {
            const hostname = new URL(url).hostname;
            return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
        } catch {
            return 'assets/icons/default-favicon.png';
        }
    }
} 