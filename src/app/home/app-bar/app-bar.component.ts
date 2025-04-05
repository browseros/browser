import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { IApp } from '../../models/app.model';
import type { ITab } from '../../models/tab.model';
import { BrowserWindow, Menu, MenuItem } from '@electron/remote';
import { Store } from '@ngrx/store';
import * as appActions from '../../actions/app.actions';
import { StateHelper } from '../../utils/state.helper';

declare const window: any;

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
    @Input() public tabs: ITab[] = [];
    @Input() public screenWidth: number = 0;
    @Output() public onAppSelect = new EventEmitter<any>();
    @Output() public onAppClose = new EventEmitter<any>();
    @Output() public onContextMenu = new EventEmitter<any>();
    @Output() public onBtnAddApp = new EventEmitter<void>();
    @Output() public onEnteredSearchBox = new EventEmitter<void>();
    @Output() public onBtnAppAction = new EventEmitter<any>();
    @Output() public onAppBarDoubleClick = new EventEmitter<any>();
    @Output() public onTabSelect = new EventEmitter<any>();
    @Output() public onTabClose = new EventEmitter<any>();
    @Output() public onTabContextMenu = new EventEmitter<any>();
    @Output() public onSearch = new EventEmitter<any>();
    @Output() public gotoApp = new EventEmitter<any>();
    @Output() public onAppContextMenu = new EventEmitter<any>();
    @Output() public closeApp = new EventEmitter<any>();
    @Output() public onBtnAIAssistant = new EventEmitter<void>();
    @Output() public onBtnSettings = new EventEmitter<void>();

    public isDropdownOpen: boolean = false;

    constructor(private store: Store) {
        // Add click outside listener to close dropdown
        document.addEventListener('click', (event) => {
            const dropdown = document.querySelector('.dropdown');
            if (dropdown && !dropdown.contains(event.target as Node) && this.isDropdownOpen) {
                this.isDropdownOpen = false;
            }
        });
    }

    public getHost(app: IApp): string {
        if (!app || !app.url) return '';
        try {
            return new URL(app.url).hostname;
        } catch {
            return app.title || '';
        }
    }

    public getAppTabs(app: IApp): ITab[] {
        if (!app || !this.tabs) return [];
        if (this.currentApp && this.currentApp.id !== app.id) return [];
        return this.tabs.filter(tab => tab.appId === app.id);
    }

    public handleAppSelect(app: IApp): void {
        this.onAppSelect.emit(app);
    }

    public handleAppClose(event: Event, app: IApp): void {
        event.stopPropagation();
        this.onAppClose.emit(app);
    }

    public handleContextMenu(app: IApp): void {
        const menu = new Menu();
        menu.append(new MenuItem({
            label: 'Close app',
            click: () => {
                this.store.dispatch(new appActions.CloseAppAction(app));
            }
        }));
        menu.append(new MenuItem({
            label: 'Close other apps',
            click: () => {
                this.store.dispatch(new appActions.CloseOtherAppsAction(app));
            }
        }));
        menu.popup({ window: BrowserWindow.getFocusedWindow()! });
    }

    public handleAppBarDoubleClick(event: MouseEvent): void {
        this.handleMaximize();
    }

    public handleTabSelect(tab: ITab): void {
        this.onTabSelect.emit(tab);
    }

    public handleTabClose(event: Event, tab: ITab): void {
        event.stopPropagation();
        this.onTabClose.emit(tab);
    }

    public handleTabContextMenu(tab: ITab): void {
        const menu = new Menu();
        menu.append(new MenuItem({
            label: 'Close tab',
            click: () => {
                this.store.dispatch(new appActions.CloseTabAction(tab));
            }
        }));
        menu.append(new MenuItem({
            label: 'Close other tabs of this app',
            click: () => {
                this.store.dispatch(new appActions.CloseOtherTabsAction(tab));
            }
        }));
        menu.append(new MenuItem({
            label: 'Close other tabs of all apps',
            click: () => {
                this.store.dispatch(new appActions.CloseOtherTabsAllAppsAction(tab));
            }
        }));
        menu.popup({ window: BrowserWindow.getFocusedWindow()! });
    }

    public handleWindowControlsContextMenu(event: MouseEvent): void {
        const menu = new Menu();
        menu.append(new MenuItem({
            label: 'Close window',
            click: () => {
                const win = BrowserWindow.getFocusedWindow();
                if (win) win.close();
            }
        }));
        menu.append(new MenuItem({
            label: 'Minimize',
            click: () => {
                const win = BrowserWindow.getFocusedWindow();
                if (win) win.minimize();
            }
        }));
        menu.append(new MenuItem({
            label: 'Maximize',
            click: () => {
                const win = BrowserWindow.getFocusedWindow();
                if (win) {
                    if (win.isMaximized()) {
                        win.unmaximize();
                    } else {
                        win.maximize();
                    }
                }
            }
        }));
        menu.popup({ window: BrowserWindow.getFocusedWindow()! });
    }

    public handleMinimize() {
        const win = BrowserWindow.getFocusedWindow();
        if (win) {
            win.minimize();
        }
    }

    public handleMaximize() {
        const win = BrowserWindow.getFocusedWindow();
        if (win) {
            if (win.isMaximized()) {
                win.unmaximize();
            } else {
                win.maximize();
            }
        }
    }

    public handleClose() {
        const win = BrowserWindow.getFocusedWindow();
        if (win) {
            win.close();
        }
    }

    public toggleDropdown(): void {
        this.isDropdownOpen = !this.isDropdownOpen;
    }

    public handleMainMenuClick(event: MouseEvent): void {
        const menu = new Menu();
        
        // Add Settings menu item
        menu.append(new MenuItem({
            label: 'Settings',
            click: () => {
                this.onBtnSettings.emit();
            }
        }));

        // Add Internal Apps submenu
        const internalAppsSubmenu = new Menu();
        
        // Add Calculator
        internalAppsSubmenu.append(new MenuItem({
            label: 'Calculator',
            click: () => {
                const url = 'http://localhost:4200/assets/internal-apps/calculator/calculator.html';
                const hostName = StateHelper.extractHostname(url);
                
                const newTab: ITab = {
                    id: 0,
                    appId: 0,
                    hostName,
                    title: '',
                    url: url
                };
                
                this.store.dispatch(new appActions.AddTabAction(newTab));
            }
        }));

        // Add Calendar
        internalAppsSubmenu.append(new MenuItem({
            label: 'Calendar',
            click: () => {
                const url = 'http://localhost:4200/assets/internal-apps/calendar/calendar.html';
                const hostName = StateHelper.extractHostname(url);
                
                const newTab: ITab = {
                    id: 0,
                    appId: 0,
                    hostName,
                    title: '',
                    url: url
                };
                
                this.store.dispatch(new appActions.AddTabAction(newTab));
            }
        }));

        // Add Camera
        internalAppsSubmenu.append(new MenuItem({
            label: 'Camera',
            click: () => {
                const url = 'http://localhost:4200/assets/internal-apps/camera/camera.html';
                const hostName = StateHelper.extractHostname(url);
                
                const newTab: ITab = {
                    id: 0,
                    appId: 0,
                    hostName,
                    title: '',
                    url: url
                };
                
                this.store.dispatch(new appActions.AddTabAction(newTab));
            }
        }));

        menu.append(new MenuItem({
            label: 'Internal Apps',
            submenu: internalAppsSubmenu
        }));

        menu.popup({ window: BrowserWindow.getFocusedWindow()! });
    }
}
