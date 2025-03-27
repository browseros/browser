import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { IApp } from '../../models/app.model';
import type { ITab } from '../../models/tab.model';
import type { IHistoryItem } from '../../models/history-item.model';

@Component({
    selector: 'app-nav',
    templateUrl: './app-nav.component.html',
    styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {
    @Input() currentApp: IApp = { id: 0, title: '', url: '', icon: '' };
    @Input() tabs: ITab[] = [];
    @Input() currentTab: ITab = { id: 0, appId: 0, title: '', url: '', hostName: '', icon: '' };
    @Input() histories: IHistoryItem[] = [];
    @Input() screenWidth: number = 0;

    @Output() onNextClick = new EventEmitter<void>();
    @Output() onBackClick = new EventEmitter<void>();
    @Output() onGotoTab = new EventEmitter<ITab>();
    @Output() onContextMenu = new EventEmitter<ITab>();
    @Output() onReloadClick = new EventEmitter<void>();
    @Output() onCloseTab = new EventEmitter<ITab>();
    @Output() onUrlChanged = new EventEmitter<{ tabId: number; url: string; appId: number }>();

    ngOnInit() {}

    ngOnDestroy() {}

    public show(): void {
        // Implementation will be updated to use Angular modal
    }

    public hide(): void {
        // Implementation will be updated to use Angular modal
    }

    private onMouseUp(event: MouseEvent, tab: ITab): void {
        if (event.button === 1) {
            // Middle click
            event.preventDefault();
            this.onCloseTab.emit(tab);
        } else if (event.button === 0) {
            // Left click
            this.onGotoTab.emit(tab);
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
        this.onUrlChanged.emit({
            tabId: this.currentTab.id,
            url: item.link,
            appId: this.currentApp.id
        });
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
