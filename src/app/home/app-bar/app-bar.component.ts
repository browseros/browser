import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { IApp } from '../../models/app.model';
import type { ITab } from '../../models/tab.model';

@Component({
    selector: 'app-bar',
    templateUrl: './app-bar.component.html',
    styleUrls: ['./app-bar.component.scss']
})

export class AppBarComponent {
    @Input() public currentApp: IApp | null = null;
    @Input() public currentTab: ITab | null = null;
    @Input() public app2Hosts: { [id: number]: string } = {};
    @Input() public apps: IApp[] = [];
    @Input() public screenWidth: number = 0;
    @Output() public onAppSelect = new EventEmitter<IApp>();
    @Output() public onAppClose = new EventEmitter<IApp>();
    @Output() public onContextMenu = new EventEmitter<IApp>();
    @Output() public onBtnAddApp: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onEnteredSearchBox: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
    @Output() public onBtnAppAction: EventEmitter<void> = new EventEmitter<void>();
    @Output() public onAppBarDoubleClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    @Output() public onSearch = new EventEmitter<any>();
    @Output() public gotoApp = new EventEmitter<IApp>();
    @Output() public onAppContextMenu = new EventEmitter<IApp>();
    @Output() public closeApp = new EventEmitter<IApp>();

    public getHost(app: IApp): string {
        try {
            return new URL(app.url).hostname;
        } catch {
            return app.title || '';
        }
    }

    public getTabWidth(): string {
        return `${100 / this.apps.length}%`;
    }

    public onMouseUp(event: MouseEvent, app: IApp): void {
        if (event.button === 1) {
            this.onAppClose.emit(app);
        }
    }
}
