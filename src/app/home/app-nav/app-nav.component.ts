import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import type { IApp } from '../../models/app.model';
import type { ITab } from '../../models/tab.model';
import type { IHistoryItem } from '../../models/history-item.model';
import { IWebEvent } from '../../models/web-event.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { HistoryService } from '../../services/history.service';
import { webContents } from '@electron/remote';

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
    @Input() webview: Electron.WebviewTag | null = null;
    @Output() onSearch = new EventEmitter<any>();
    @Output() onNextClick = new EventEmitter<IApp>();
    @Output() onBackClick = new EventEmitter<IApp>();
    @Output() onReloadClick = new EventEmitter<IApp>();
    @Output() onGotoTab = new EventEmitter<ITab>();
    @Output() onCloseTab = new EventEmitter<ITab>();
    @Output() onContextMenu = new EventEmitter<any>();
    @Output() onZoomChange = new EventEmitter<number>();

    private readonly MIN_ZOOM = 0.25;
    private readonly MAX_ZOOM = 3.0;
    private readonly ZOOM_STEP = 0.05;
    public currentZoom = 1.0;

    public filteredHistories: IHistoryItem[] = [];
    public tabsInternal: ITab[] = [];
    public currentTabInternal: ITab = { id: 0, appId: 0, title: '', url: '', hostName: '', icon: '' };
    private tabsSub: Subscription;
    private currentTabSub: Subscription;

    constructor(
        private cdr: ChangeDetectorRef,
        private store: Store<fromRoot.State>,
        private historyService: HistoryService
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

        // Subscribe to currentTab from store
        this.currentTabSub = this.store.select(fromRoot.getEventCurrentTab).pipe(
            map(tab => tab || { id: 0, appId: 0, title: '', url: '', hostName: '', icon: '' })
        ).subscribe(tab => {
            console.log('[AppNav] Store currentTab updated:', tab);
            this.currentTabInternal = tab;
            this.updateHistories();
            this.cdr.detectChanges();
        });
    }

    ngOnDestroy() {
        if (this.tabsSub) {
            this.tabsSub.unsubscribe();
        }
        if (this.currentTabSub) {
            this.currentTabSub.unsubscribe();
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('[AppNav] Changes:', changes);
        
        if (changes['tabs']) {
            console.log('[AppNav] Tabs changed:', changes['tabs'].currentValue);
            this.tabsInternal = [...changes['tabs'].currentValue];
            this.cdr.detectChanges();
        }
        
        if (changes['currentTab']) {
            console.log('[AppNav] Current tab changed:', changes['currentTab'].currentValue);
            this.currentTabInternal = changes['currentTab'].currentValue;
            this.updateHistories();
            // Get current zoom when tab changes
            this.getCurrentZoom();
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
        console.log('[AppNav] Current tab:', this.currentTab);
        
        if (!this.currentTab?.hostName) {
            console.log('[AppNav] No current tab or hostname');
            this.filteredHistories = [];
            return;
        }

        this.filteredHistories = this.historyService.getHistoryByHost(this.currentTab.hostName);
        console.log('[AppNav] Filtered histories:', this.filteredHistories);
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

    public getShortenedUrl(url: string): string {
        try {
            if (!url) return '';
            // If URL is shorter than 40 chars, return as is
            if (url.length <= 40) return url;
            
            const urlObj = new URL(url);
            const path = urlObj.pathname;
            // Get the first path segment
            const firstSegment = path.split('/').filter(s => s)[0];
            if (!firstSegment) return urlObj.origin;
            
            return `${urlObj.origin}/${firstSegment}-...`;
        } catch {
            // If invalid URL, truncate the string directly
            return url.substring(0, 40) + '...';
        }
    }

    private async getCurrentZoom(): Promise<void> {
        try {
            if (!this.webview) {
                console.error('[AppNav] No webview available');
                return;
            }

            const webContentsId = this.webview.getWebContentsId();
            const wc = webContents.fromId(webContentsId);
            if (!wc) {
                console.error('[AppNav] Cannot get webContents');
                return;
            }

            const zoom = await wc.getZoomFactor();
            this.currentZoom = zoom;
            this.cdr.detectChanges();
        } catch (error) {
            console.error('[AppNav] Error getting zoom:', error);
        }
    }

    public async onZoomIn(event: any): Promise<void> {
        try {
            if (!this.webview) {
                console.error('[AppNav] No webview available');
                return;
            }

            const newZoom = Math.min(this.MAX_ZOOM, this.currentZoom + this.ZOOM_STEP);
            await this.setZoom(newZoom);
        } catch (error) {
            console.error('[AppNav] Error zooming in:', error);
        }
    }

    public async onZoomOut(event: any): Promise<void> {
        try {
            if (!this.webview) {
                console.error('[AppNav] No webview available');
                return;
            }

            const newZoom = Math.max(this.MIN_ZOOM, this.currentZoom - this.ZOOM_STEP);
            await this.setZoom(newZoom);
        } catch (error) {
            console.error('[AppNav] Error zooming out:', error);
        }
    }

    public async onZoomReset(event: any): Promise<void> {
        try {
            if (!this.webview) {
                console.error('[AppNav] No webview available');
                return;
            }

            await this.setZoom(1.0);
        } catch (error) {
            console.error('[AppNav] Error resetting zoom:', error);
        }
    }

    private async setZoom(zoomFactor: number): Promise<void> {
        try {
            if (!this.webview) {
                console.error('[AppNav] No webview available');
                return;
            }

            const webContentsId = this.webview.getWebContentsId();
            const wc = webContents.fromId(webContentsId);
            if (!wc) {
                console.error('[AppNav] Cannot get webContents');
                return;
            }

            await wc.setZoomFactor(zoomFactor);
            this.currentZoom = zoomFactor;
            this.onZoomChange.emit(zoomFactor);
            this.cdr.detectChanges();
        } catch (error) {
            console.error('[AppNav] Error setting zoom:', error);
            throw error;
        }
    }
}
