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
    @Output() public onEnteredSearchBox: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onBtnAppAction: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onAppBarDoubleClick: EventEmitter<any> = new EventEmitter<any>();

    public getHost(app: IApp): string {
        return this.app2Hosts[app.id] || '';
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
