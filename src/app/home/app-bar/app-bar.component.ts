import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import type { IApp } from '../../models/app.model';
import type { ITab } from '../../models/tab.model';

@Component({
    selector: 'app-bar',
    styleUrls: ['./app-bar.component.css'],
    templateUrl: './app-bar.component.html'
})

export class AppBarComponent implements OnInit {
    @Input() public currentApp: IApp | null = null;
    @Input() public currentTab: ITab | null = null;
    @Input() public app2Hosts: { [id: number]: string } = {};
    @Input() public apps: IApp[] = [];
    @Input() public screenWidth: number = 0;
    @Input() public suggestions: any[] = [];
    @Input() public histories: any[] = [];
    @Input() public topApps: any[] = [];
    @Output() public onBtnAddApp: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onEnteredSearchBox: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onAppSelect: EventEmitter<IApp> = new EventEmitter<IApp>();
    @Output() public onAppClose: EventEmitter<IApp> = new EventEmitter<IApp>();
    @Output() public onContextMenu: EventEmitter<IApp> = new EventEmitter<IApp>();
    @Output() public onBtnAppAction: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onAppBarDoubleClick: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onSearch = new EventEmitter<string>();
    @Output() public onSearchReplacing = new EventEmitter<any>();
    @Output() public onSidebarToggle = new EventEmitter<void>();
    @Output() public onSettingsOpen = new EventEmitter<void>();
    @Output() public onMenuOpen = new EventEmitter<void>();

    public getHost(app: IApp): string {
        return this.app2Hosts[app.id] || '';
    }

    public onMouseUp(event: MouseEvent, app: IApp): void {
        if (event.button === 0) {
            this.onAppSelect.emit(app);
        }
    }

    public getTabWidth(): string {
        let width = 100 / this.apps.length;
        return width + '%';
    }

    ngOnInit(): void {
        // Initialize any additional logic if needed
    }
}
