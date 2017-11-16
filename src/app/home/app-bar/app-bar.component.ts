
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IApp } from '../../models/app.model';
import { ITab } from '../../models/tab.model';

@Component({
    selector: 'app-bar',
    styleUrls: ['./app-bar.component.css'],
    templateUrl: './app-bar.component.html'
})

export class AppBarComponent {
    @Input() public currentApp: IApp;
    @Input() public currentTab: ITab;
    @Input() public app2Hosts: { [id: number]: string };
    @Input() public apps: IApp[];
    @Input() public screenWidth: number;
    @Output() public onBtnAddApp: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onEnteredSearchBox: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onAppSelect: EventEmitter<IApp> = new EventEmitter<IApp>();
    @Output() public onAppClose: EventEmitter<IApp> = new EventEmitter<IApp>();
    @Output() public onContextMenu: EventEmitter<IApp> = new EventEmitter<IApp>();
    @Output() public onBtnAppAction: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onAppBarDoubleClick: EventEmitter<any> = new EventEmitter<any>();

    private getHost(app: IApp): string {
        return this.app2Hosts[app.id];
    }

    private onMouseUp($event, app) {
        // middle button
        if ($event.button === 1) {
            this.onAppClose.emit(app);
        }
    }

    private getTabWidth(): string {
        let appCount = this.apps ? this.apps.length : 0;
        if (appCount === 0) {
            return '0px';
        }
        let screenWidth = this.screenWidth - 390;
        let tabWidth = screenWidth / appCount;
        return tabWidth + 'px';
    }
}
