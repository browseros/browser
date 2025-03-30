import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import type { IApp } from '../../models/app.model';
import type { ITab } from '../../models/tab.model';
import type { IHistoryItem } from '../../models/history-item.model';
import { IWebEvent } from '../../models/web-event.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-nav',
    templateUrl: './app-nav.component.html',
    styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit, OnDestroy, OnChanges {
    @Input() currentApp: IApp = { id: 0, title: '', url: '', icon: '' };
    @Input() tabs: ITab[] = [];
    @Input() screenWidth = 0;
    @Input() histories: IHistoryItem[] = [];
    @Input() currentTab: ITab = { id: 0, appId: 0, title: '', url: '', hostName: '', icon: '' };
    @Output() onSearch = new EventEmitter<any>();
    @Output() onNextClick = new EventEmitter<IApp>();
    @Output() onBackClick = new EventEmitter<IApp>();
    @Output() onReloadClick = new EventEmitter<IApp>();
    @Output() onGotoTab = new EventEmitter<ITab>();
    @Output() onCloseTab = new EventEmitter<ITab>();
    @Output() onContextMenu = new EventEmitter<any>();

    public filteredHistories: IHistoryItem[] = [];
    public tabsInternal: ITab[] = [];
    private tabsSub: Subscription;

    constructor(
        private cdr: ChangeDetectorRef,
        private store: Store<fromRoot.State>
    ) {}

    ngOnInit() {
        console.log('[AppNav] Initializing');
        // Subscribe to tabs from store
        this.tabsSub = this.store.select(fromRoot.getEventTabs).pipe(
            map(tabs => tabs || [])
        ).subscribe(tabs => {
            console.log('[AppNav] Store tabs updated:', tabs);
            this.tabsInternal = [...tabs];
            this.cdr.detectChanges();
        });
    }

    ngOnDestroy() {
        if (this.tabsSub) {
            this.tabsSub.unsubscribe();
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('[AppNav] Changes:', changes);
        
        if (changes['tabs']) {
            console.log('[AppNav] Tabs changed:', changes['tabs'].currentValue);
            this.tabsInternal = [...changes['tabs'].currentValue];
            this.cdr.detectChanges();
        }
        
        if (changes['histories']) {
            console.log('[AppNav] Histories changed:', changes['histories'].currentValue);
        }
        if (changes['currentTab']) {
            console.log('[AppNav] Current tab changed:', changes['currentTab'].currentValue);
        }
        if (changes['histories'] || changes['currentTab']) {
            this.updateHistories();
        }
    }

    public onMouseUp(event: MouseEvent, tab: ITab): void {
        // middle button
        if (event.button === 1) {
            this.onCloseTab.emit(tab);
        }
    }

    public updateHistories(): void {
        console.log('[AppNav] Updating histories');
        console.log('[AppNav] Current histories:', this.histories);
        console.log('[AppNav] Current tab:', this.currentTab);
        
        if (!this.currentTab) {
            console.log('[AppNav] No current tab');
            this.filteredHistories = [];
            return;
        }
        if (!this.histories || this.histories.length === 0) {
            console.log('[AppNav] No histories available');
            this.filteredHistories = [];
            return;
        }
        
        // Filter and sort by date (most recent first)
        this.filteredHistories = this.histories
            .filter(item => {
                console.log('[AppNav] History item:', item);
                console.log('[AppNav] Comparing:', item.host?.toLowerCase(), 'with', this.currentTab!.hostName.toLowerCase());
                return item.host?.toLowerCase() === this.currentTab!.hostName.toLowerCase();
            })
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 10);
            
        console.log('[AppNav] Filtered histories:', this.filteredHistories);
    }

    public getHistoryForHost(): IHistoryItem[] {
        return this.filteredHistories;
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
        const tabCount = this.tabsInternal ? this.tabsInternal.filter(tab => tab.appId === this.currentApp!.id).length : 0;
        if (tabCount === 0) {
            return '0px';
        }
        const screenWidth = this.screenWidth - 180;
        const tabWidth = (screenWidth / tabCount) - 2;
        return tabWidth + 'px';
    }

    public onBack(): void {
        if (this.currentApp) {
            this.onBackClick.emit(this.currentApp);
        }
    }

    public onNext(): void {
        if (this.currentApp) {
            this.onNextClick.emit(this.currentApp);
        }
    }

    public onReload(): void {
        if (this.currentApp) {
            this.onReloadClick.emit(this.currentApp);
        }
    }
}
