import { Component, Output, EventEmitter, Input, OnInit, OnDestroy } from '@angular/core';
import type { IApp } from '../../models/app.model';
import type { ITab } from '../../models/tab.model';
import type { IHistoryItem } from '../../models/history-item.model';
import type { IWebEvent } from '../../models/web-event.model';

@Component({
    selector: 'app-nav',
    template: `
        <nav class="navbar navbar-expand-lg navbar-light bg-light navs">
            <div class="container-fluid">
                <div class="navbar-nav">
                    <button class="btn btn-sm btn-outline-secondary me-2" (click)="onBackClick.emit()">
                        <i class="bi bi-arrow-left"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-secondary me-2" (click)="onNextClick.emit()">
                        <i class="bi bi-arrow-right"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-secondary me-2" (click)="onReloadClick.emit()">
                        <i class="bi bi-arrow-clockwise"></i>
                    </button>
                </div>
                <div class="tab-container">
                    <div *ngFor="let tab of tabs" 
                         [class.active]="currentTab.id === tab.id"
                         class="tab-on-nav" 
                         (click)="onGotoTab.emit(tab)"
                         (contextmenu)="onContextMenu.emit(tab)">
                        <img [src]="tab.icon" width="16" height="16" *ngIf="tab.icon"/>
                        <span>{{tab.title || 'New Tab'}}</span>
                        <button class="btn-close btn-close-sm" 
                                (click)="$event.stopPropagation(); onCloseTab.emit(tab)">
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    `,
    styles: [`
        .navs {
            background-color: #f8f9fa;
            border-bottom: 1px solid #dee2e6;
            padding: 0.25rem 1rem;
        }
        .tab-container {
            display: flex;
            overflow-x: auto;
            flex-grow: 1;
            margin: 0 1rem;
        }
        .tab-on-nav {
            padding: 0.25rem 0.5rem;
            margin: 0 0.25rem;
            border: 1px solid #dee2e6;
            border-radius: 0.25rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            min-width: 100px;
            max-width: 200px;
        }
        .tab-on-nav.active {
            background-color: #e9ecef;
        }
        .tab-on-nav img {
            flex-shrink: 0;
        }
        .tab-on-nav span {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    `]
})
export class AppNavComponent implements OnInit, OnDestroy {
    @Input() currentApp: IApp = { id: 0, title: '', url: '', icon: '' };
    @Input() tabs: ITab[] = [];
    @Input() currentTab: ITab = { id: 0, appId: 0, title: '', url: '', hostName: '', icon: '' };
    @Input() histories: IHistoryItem[] = [];
    @Input() screenWidth: number = 0;

    @Output() onNextClick = new EventEmitter<any>();
    @Output() onBackClick = new EventEmitter<any>();
    @Output() onGotoTab = new EventEmitter<any>();
    @Output() onSearch = new EventEmitter<any>();
    @Output() onContextMenu = new EventEmitter<any>();
    @Output() onReloadClick = new EventEmitter<any>();
    @Output() onCloseTab = new EventEmitter<any>();

    ngOnInit() {}

    ngOnDestroy() {}

    public show(): void {
        // Implementation will be updated to use Angular modal
    }

    public hide(): void {
        // Implementation will be updated to use Angular modal
    }

    private onMouseUp(event: MouseEvent, tab: ITab): void {
        // middle button
        if (event.button === 1) {
            this.onCloseTab.emit(tab);
        }
    }

    private getHistoryForHost(): IHistoryItem[] {
        if (!this.currentTab) {
            return [];
        }
        if (!this.histories || this.histories.length === 0) {
            return [];
        }
        return this.histories
            .filter(item =>
                item.title
                && item.host.toLocaleLowerCase() === this.currentTab.hostName.toLocaleLowerCase())
            .slice(0, 10);
    }

    private selectHistoryItem(item: IHistoryItem): void {
        this.doSearch(item.link);
    }

    private doSearch(link: string): void {
        const currentTab = JSON.parse(JSON.stringify(this.currentTab));
        const currentApp = JSON.parse(JSON.stringify(this.currentApp));
        const webEvent: IWebEvent = {
            tabId: currentTab.id,
            eventValue: link,
            app: currentApp,
            eventName: 'urlchanged'
        };
        this.onSearch.emit(webEvent);
    }

    private getTabWidth(): string {
        const tabCount = this.tabs ? this.tabs.filter(tab => tab.appId === this.currentApp.id).length : 0;
        if (tabCount === 0) {
            return '0px';
        }
        const screenWidth = this.screenWidth - 180;
        const tabWidth = (screenWidth / tabCount) - 2;
        return tabWidth + 'px';
    }
}
