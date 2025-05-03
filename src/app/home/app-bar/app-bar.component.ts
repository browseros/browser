import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { IApp } from '../../models/app.model';
import type { ITab } from '../../models/tab.model';
import type { IHistoryItem } from '../../models/history-item.model';
import { BrowserWindow, Menu, MenuItem, app } from '@electron/remote';
import { Store } from '@ngrx/store';
import * as appActions from '../../actions/app.actions';
import { StateHelper } from '../../utils/state.helper';
import { HistoryService } from '../../services/history.service';
import * as fromRoot from '../../reducers';

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
    public showRecentApps: boolean = false;
    public recentApps: IHistoryItem[] = [];

    constructor(private store: Store<fromRoot.State>, private historyService: HistoryService) {
        // Add click outside listener to close dropdown
        document.addEventListener('click', (event) => {
            if (this.isDropdownOpen) {
                const target = event.target as HTMLElement;
                const dropdown = document.querySelector('.dropdown-menu');
                if (dropdown && !dropdown.contains(target)) {
                    this.isDropdownOpen = false;
                }
            }
        });

        // Subscribe to history updates
        this.historyService.history$.subscribe(histories => {
            if (histories) {
                this.recentApps = this.historyService.getTopItems(10);
                console.log('[AppBar] Updated recent apps:', this.recentApps.length);
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

    public handleTabContextMenu(event: MouseEvent, tab: ITab): void {
        event.preventDefault();
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

        // Browser OS Menu (like Apple Menu)
        const browserOSMenu = new Menu();
        browserOSMenu.append(new MenuItem({
            label: 'About Browser OS',
            click: () => {
                this.showAboutDialog();
            }
        }));
        browserOSMenu.append(new MenuItem({ type: 'separator' }));
        browserOSMenu.append(new MenuItem({
            label: 'System Settings...',
            accelerator: 'CmdOrCtrl+,',
            click: () => {
                this.onBtnSettings.emit();
            }
        }));
        browserOSMenu.append(new MenuItem({ type: 'separator' }));
        browserOSMenu.append(new MenuItem({
            label: 'Sleep',
            click: () => {
                // TODO: Implement sleep mode
            }
        }));
        browserOSMenu.append(new MenuItem({
            label: 'Restart...',
            click: () => {
                const win = BrowserWindow.getFocusedWindow();
                if (win) {
                    app.relaunch();
                    app.quit();
                }
            }
        }));
        browserOSMenu.append(new MenuItem({
            label: 'Shut Down...',
            click: () => {
                app.quit();
            }
        }));
        menu.append(new MenuItem({
            label: 'Browser OS',
            submenu: browserOSMenu
        }));
        
        // File Menu
        const fileMenu = new Menu();
        fileMenu.append(new MenuItem({
            label: 'New Tab',
            accelerator: 'CmdOrCtrl+T',
            click: () => {
                this.handleNewTab();
            }
        }));
        fileMenu.append(new MenuItem({
            label: 'New Window',
            accelerator: 'CmdOrCtrl+N',
            click: () => {
                // TODO: Implement new window
            }
        }));
        fileMenu.append(new MenuItem({
            label: 'New Private Window',
            accelerator: 'CmdOrCtrl+Shift+N',
            click: () => {
                // TODO: Implement private window
            }
        }));
        fileMenu.append(new MenuItem({ type: 'separator' }));
        fileMenu.append(new MenuItem({
            label: 'Close Tab',
            accelerator: 'CmdOrCtrl+W',
            click: () => {
                if (this.currentTab) {
                    this.store.dispatch(new appActions.CloseTabAction(this.currentTab));
                }
            }
        }));
        fileMenu.append(new MenuItem({
            label: 'Close Window',
            accelerator: 'CmdOrCtrl+Shift+W',
            click: () => {
                const win = BrowserWindow.getFocusedWindow();
                if (win) win.close();
            }
        }));
        menu.append(new MenuItem({
            label: 'File',
            submenu: fileMenu
        }));

        // Edit Menu
        const editMenu = new Menu();
        editMenu.append(new MenuItem({
            label: 'Undo',
            accelerator: 'CmdOrCtrl+Z',
            role: 'undo'
        }));
        editMenu.append(new MenuItem({
            label: 'Redo',
            accelerator: 'CmdOrCtrl+Shift+Z',
            role: 'redo'
        }));
        editMenu.append(new MenuItem({ type: 'separator' }));
        editMenu.append(new MenuItem({
            label: 'Cut',
            accelerator: 'CmdOrCtrl+X',
            role: 'cut'
        }));
        editMenu.append(new MenuItem({
            label: 'Copy',
            accelerator: 'CmdOrCtrl+C',
            role: 'copy'
        }));
        editMenu.append(new MenuItem({
            label: 'Paste',
            accelerator: 'CmdOrCtrl+V',
            role: 'paste'
        }));
        editMenu.append(new MenuItem({
            label: 'Paste and Match Style',
            accelerator: 'CmdOrCtrl+Shift+V',
            role: 'pasteAndMatchStyle'
        }));
        editMenu.append(new MenuItem({
            label: 'Delete',
            role: 'delete'
        }));
        editMenu.append(new MenuItem({
            label: 'Select All',
            accelerator: 'CmdOrCtrl+A',
            role: 'selectAll'
        }));
        editMenu.append(new MenuItem({ type: 'separator' }));
        editMenu.append(new MenuItem({
            label: 'Find',
            accelerator: 'CmdOrCtrl+F',
            click: () => {
                // TODO: Implement find
            }
        }));
        menu.append(new MenuItem({
            label: 'Edit',
            submenu: editMenu
        }));

        // View Menu
        const viewMenu = new Menu();
        viewMenu.append(new MenuItem({
            label: 'Always Show Bookmarks Bar',
            type: 'checkbox',
            checked: true,
            click: () => {
                // TODO: Toggle bookmarks bar
            }
        }));
        viewMenu.append(new MenuItem({
            label: 'Always Show Full URLs',
            type: 'checkbox',
            checked: false,
            click: () => {
                // TODO: Toggle full URLs
            }
        }));
        viewMenu.append(new MenuItem({ type: 'separator' }));
        viewMenu.append(new MenuItem({
            label: 'Actual Size',
            accelerator: 'CmdOrCtrl+0',
            role: 'resetZoom'
        }));
        viewMenu.append(new MenuItem({
            label: 'Zoom In',
            accelerator: 'CmdOrCtrl+Plus',
            role: 'zoomIn'
        }));
        viewMenu.append(new MenuItem({
            label: 'Zoom Out',
            accelerator: 'CmdOrCtrl+-',
            role: 'zoomOut'
        }));
        viewMenu.append(new MenuItem({ type: 'separator' }));
        viewMenu.append(new MenuItem({
            label: 'Enter Full Screen',
            accelerator: 'Ctrl+Command+F',
            role: 'togglefullscreen'
        }));
        menu.append(new MenuItem({
            label: 'View',
            submenu: viewMenu
        }));

        // History Menu
        const historyMenu = new Menu();
        historyMenu.append(new MenuItem({
            label: 'Back',
            accelerator: 'CmdOrCtrl+[',
            click: () => {
                // TODO: Implement back
            }
        }));
        historyMenu.append(new MenuItem({
            label: 'Forward',
            accelerator: 'CmdOrCtrl+]',
            click: () => {
                // TODO: Implement forward
            }
        }));
        historyMenu.append(new MenuItem({ type: 'separator' }));
        historyMenu.append(new MenuItem({
            label: 'Show Full History',
            accelerator: 'CmdOrCtrl+Y',
            click: () => {
                // TODO: Show history
            }
        }));
        menu.append(new MenuItem({
            label: 'History',
            submenu: historyMenu
        }));

        // Apps Menu
        const appsMenu = new Menu();
        
        // Internal Apps submenu with categories
        const internalAppsSubmenu = new Menu();
        
        // Productivity
        internalAppsSubmenu.append(new MenuItem({
            label: 'Calculator',
            accelerator: 'CmdOrCtrl+Alt+C',
            click: () => {
                const url = 'http://localhost:4200/assets/internal-apps/calculator/calculator.html';
                const hostName = StateHelper.extractHostname(url);
                const newTab: ITab = {
                    id: 0,
                    appId: 0,
                    hostName,
                    title: 'Calculator',
                    url: url
                };
                this.store.dispatch(new appActions.AddTabAction(newTab));
            }
        }));
        internalAppsSubmenu.append(new MenuItem({
            label: 'Calendar',
            accelerator: 'CmdOrCtrl+Alt+L',
            click: () => {
                const url = 'http://localhost:4200/assets/internal-apps/calendar/calendar.html';
                const hostName = StateHelper.extractHostname(url);
                const newTab: ITab = {
                    id: 0,
                    appId: 0,
                    hostName,
                    title: 'Calendar',
                    url: url
                };
                this.store.dispatch(new appActions.AddTabAction(newTab));
            }
        }));

        // Media
        internalAppsSubmenu.append(new MenuItem({ type: 'separator' }));
        internalAppsSubmenu.append(new MenuItem({
            label: 'Camera',
            accelerator: 'CmdOrCtrl+Alt+M',
            click: () => {
                const url = 'http://localhost:4200/assets/internal-apps/camera/camera.html';
                const hostName = StateHelper.extractHostname(url);
                const newTab: ITab = {
                    id: 0,
                    appId: 0,
                    hostName,
                    title: 'Camera',
                    url: url
                };
                this.store.dispatch(new appActions.AddTabAction(newTab));
            }
        }));

        // Utilities
        internalAppsSubmenu.append(new MenuItem({ type: 'separator' }));
        internalAppsSubmenu.append(new MenuItem({
            label: 'Weather',
            accelerator: 'CmdOrCtrl+Alt+W',
            click: () => {
                const url = 'http://localhost:4200/assets/internal-apps/weather/weather.html';
                const hostName = StateHelper.extractHostname(url);
                const newTab: ITab = {
                    id: 0,
                    appId: 0,
                    hostName,
                    title: 'Weather',
                    url: url
                };
                this.store.dispatch(new appActions.AddTabAction(newTab));
            }
        }));

        // Education
        internalAppsSubmenu.append(new MenuItem({ type: 'separator' }));
        internalAppsSubmenu.append(new MenuItem({
            label: 'English Global Success 6',
            accelerator: 'CmdOrCtrl+Alt+E',
            click: () => {
                const url = 'http://localhost:4200/assets/internal-apps/english-global-6/english-global-6.html';
                const hostName = StateHelper.extractHostname(url);
                const newTab: ITab = {
                    id: 0,
                    appId: 0,
                    hostName,
                    title: 'English Global Success 6',
                    url: url
                };
                this.store.dispatch(new appActions.AddTabAction(newTab));
            }
        }));

        // Games
        internalAppsSubmenu.append(new MenuItem({ type: 'separator' }));
        internalAppsSubmenu.append(new MenuItem({
            label: '30/4 Tank Game',
            accelerator: 'CmdOrCtrl+Alt+G',
            click: () => {
                const url = 'http://localhost:4200/assets/internal-apps/30-4-tank/index.html';
                const hostName = StateHelper.extractHostname(url);
                const newTab: ITab = {
                    id: 0,
                    appId: 0,
                    hostName,
                    title: '30/4 Tank Game',
                    url: url
                };
                this.store.dispatch(new appActions.AddTabAction(newTab));
            }
        }));

        // Tin Học Lớp 6
        internalAppsSubmenu.append(new MenuItem({
            label: 'Tin Học Lớp 6',
            accelerator: 'CmdOrCtrl+Alt+T',
            click: () => {
                const url = 'http://localhost:4200/assets/internal-apps/tinHoc-lop6/tinHoc-lop6.html';
                const hostName = StateHelper.extractHostname(url);
                const newTab: ITab = {
                    id: 0,
                    appId: 0,
                    hostName,
                    title: 'Tin Học Lớp 6',
                    url: url
                };
                this.store.dispatch(new appActions.AddTabAction(newTab));
            }
        }));
        internalAppsSubmenu.append(new MenuItem({
            label: 'Une Petite Grenouille',
            accelerator: 'CmdOrCtrl+Alt+F',
            click: () => {
                const url = 'http://localhost:4200/assets/internal-apps/french-kids/french-kids.html';
                const hostName = StateHelper.extractHostname(url);
                const newTab: ITab = {
                    id: 0,
                    appId: 0,
                    hostName,
                    title: 'Une Petite Grenouille',
                    url: url
                };
                this.store.dispatch(new appActions.AddTabAction(newTab));
            }
        }));
        internalAppsSubmenu.append(new MenuItem({
            label: 'Ôn Tập Pháp Kỳ 2',
            accelerator: 'CmdOrCtrl+Alt+P',
            click: () => {
                const url = 'http://localhost:4200/assets/internal-apps/ontap-phap-ky2/ontap-phap-ky2.html';
                const hostName = StateHelper.extractHostname(url);
                const newTab: ITab = {
                    id: 0,
                    appId: 0,
                    hostName,
                    title: 'Ôn Tập Pháp Kỳ 2',
                    url: url
                };
                this.store.dispatch(new appActions.AddTabAction(newTab));
            }
        }));
        internalAppsSubmenu.append(new MenuItem({
            label: 'IELTS for Kids',
            accelerator: 'CmdOrCtrl+Alt+I',
            click: () => {
                const url = 'http://localhost:4200/assets/internal-apps/ielts-for-kids/index.html';
                const hostName = StateHelper.extractHostname(url);
                const newTab: ITab = {
                    id: 0,
                    appId: 0,
                    hostName,
                    title: 'IELTS for Kids',
                    url: url
                };
                this.store.dispatch(new appActions.AddTabAction(newTab));
            }
        }));

        appsMenu.append(new MenuItem({
            label: 'Internal Apps',
            submenu: internalAppsSubmenu
        }));

        // Add Apps menu to main menu
        menu.append(new MenuItem({
            label: 'Apps',
            submenu: appsMenu
        }));

        // Window Menu
        const windowMenu = new Menu();
        windowMenu.append(new MenuItem({
            label: 'Minimize',
            accelerator: 'CmdOrCtrl+M',
            role: 'minimize'
        }));
        windowMenu.append(new MenuItem({
            label: 'Zoom',
            role: 'zoom'
        }));
        windowMenu.append(new MenuItem({ type: 'separator' }));
        windowMenu.append(new MenuItem({
            label: 'Show Previous Tab',
            accelerator: 'CmdOrCtrl+Shift+[',
            click: () => {
                // TODO: Show previous tab
            }
        }));
        windowMenu.append(new MenuItem({
            label: 'Show Next Tab',
            accelerator: 'CmdOrCtrl+Shift+]',
            click: () => {
                // TODO: Show next tab
            }
        }));
        windowMenu.append(new MenuItem({ type: 'separator' }));
        windowMenu.append(new MenuItem({
            label: 'Bring All to Front',
            role: 'front'
        }));
        menu.append(new MenuItem({
            label: 'Window',
            submenu: windowMenu
        }));

        // Help Menu
        const helpMenu = new Menu();
        helpMenu.append(new MenuItem({
            label: 'Browser OS Help',
            accelerator: 'CmdOrCtrl+?',
            click: () => {
                // TODO: Show help
            }
        }));
        helpMenu.append(new MenuItem({ type: 'separator' }));
        helpMenu.append(new MenuItem({
            label: 'Release Notes',
            click: () => {
                // TODO: Show release notes
            }
        }));
        helpMenu.append(new MenuItem({
            label: 'Report an Issue',
            click: () => {
                // TODO: Open issue reporter
            }
        }));
        helpMenu.append(new MenuItem({ type: 'separator' }));
        helpMenu.append(new MenuItem({
            label: 'Privacy Policy',
            click: () => {
                // TODO: Show privacy policy
            }
        }));
        menu.append(new MenuItem({
            label: 'Help',
            submenu: helpMenu
        }));

        menu.popup({ window: BrowserWindow.getFocusedWindow()! });
    }

    private showAboutDialog(): void {
        const dialog = document.createElement('div');
        dialog.className = 'about-dialog-overlay';
        dialog.innerHTML = `
            <div class="about-dialog">
                <img src="assets/icons/browser-os-logo.png" alt="Browser OS Logo" class="logo">
                <h1>Browser OS</h1>
                <div class="version">Version 0.1.0</div>
                
                <div class="content">
                    <div class="description">
                        Browser OS is a modern, feature-rich browser built with Angular and Electron, 
                        designed to provide a seamless and powerful web browsing experience with integrated AI capabilities.
                    </div>

                    <div class="features-grid">
                        <div class="feature-item">
                            <i class="bi bi-robot"></i>
                            <h3>AI Assistant</h3>
                            <p>Smart AI-powered features and chat</p>
                        </div>
                        <div class="feature-item">
                            <i class="bi bi-rocket"></i>
                            <h3>Fast & Efficient</h3>
                            <p>Optimized for speed and performance</p>
                        </div>
                        <div class="feature-item">
                            <i class="bi bi-shield-check"></i>
                            <h3>Enhanced Security</h3>
                            <p>Sandboxed processes & secure browsing</p>
                        </div>
                        <div class="feature-item">
                            <i class="bi bi-window-stack"></i>
                            <h3>Advanced Tabs</h3>
                            <p>Smart tab management & organization</p>
                        </div>
                        <div class="feature-item">
                            <i class="bi bi-translate"></i>
                            <h3>AI Translation</h3>
                            <p>Smart content translation & analysis</p>
                        </div>
                        <div class="feature-item">
                            <i class="bi bi-camera"></i>
                            <h3>Visual Analysis</h3>
                            <p>Screenshot analysis & problem solving</p>
                        </div>
                        <div class="feature-item">
                            <i class="bi bi-search"></i>
                            <h3>Smart Search</h3>
                            <p>AI-powered search with suggestions</p>
                        </div>
                        <div class="feature-item">
                            <i class="bi bi-bookmark-star"></i>
                            <h3>Smart Bookmarks</h3>
                            <p>Advanced bookmark & history management</p>
                        </div>
                        <div class="feature-item">
                            <i class="bi bi-palette"></i>
                            <h3>Customizable</h3>
                            <p>Themes and personalization options</p>
                        </div>
                    </div>

                    <div class="tech-stack">
                        <span class="tech-item">Angular</span>
                        <span class="tech-item">Electron</span>
                        <span class="tech-item">TypeScript</span>
                        <span class="tech-item">NgRx</span>
                        <span class="tech-item">ChatGPT</span>
                        <span class="tech-item">Google AI</span>
                    </div>

                    <div class="copyright">
                        Copyright © 2024 Browser OS. All rights reserved.<br>
                        <a href="https://github.com/yourusername/browser-os" target="_blank">GitHub</a> · 
                        <a href="#" onclick="window.open('Architect/Home.md')">Documentation</a> · 
                        <a href="#" onclick="window.open('LICENSE')">License</a>
                    </div>
                </div>

                <button class="close-btn">Close</button>
            </div>
        `;

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .about-dialog-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                backdrop-filter: blur(5px);
            }
            .about-dialog {
                background: rgba(255, 255, 255, 0.8);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border-radius: 12px;
                padding: 24px;
                max-width: 800px;
                width: 90%;
                text-align: center;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }
            .logo {
                width: 128px;
                height: 128px;
                margin-bottom: 20px;
            }
            h1 {
                font-size: 24px;
                font-weight: 500;
                margin: 0 0 10px 0;
                color: #1d1d1f;
            }
            .version {
                font-size: 14px;
                color: #86868b;
                margin-bottom: 20px;
            }
            .content {
                margin: 20px 0;
            }
            .description {
                font-size: 14px;
                line-height: 1.5;
                color: #1d1d1f;
                margin-bottom: 25px;
                padding: 0 20px;
            }
            .features-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
                gap: 20px;
                padding: 20px;
                text-align: left;
            }
            .feature-item {
                padding: 15px;
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.5);
                transition: transform 0.2s;
            }
            .feature-item:hover {
                transform: translateY(-2px);
            }
            .feature-item i {
                font-size: 24px;
                color: #0071e3;
                margin-bottom: 10px;
            }
            .feature-item h3 {
                font-size: 16px;
                font-weight: 500;
                margin: 10px 0 5px;
                color: #1d1d1f;
            }
            .feature-item p {
                font-size: 13px;
                color: #86868b;
                margin: 0;
            }
            .tech-stack {
                margin: 25px 0;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 10px;
            }
            .tech-item {
                padding: 5px 12px;
                border-radius: 15px;
                background: rgba(0, 113, 227, 0.1);
                color: #0071e3;
                font-size: 13px;
            }
            .copyright {
                font-size: 12px;
                color: #86868b;
                margin: 20px 0;
            }
            .copyright a {
                color: #0071e3;
                text-decoration: none;
                margin: 0 5px;
            }
            .copyright a:hover {
                text-decoration: underline;
            }
            .close-btn {
                background: #0071e3;
                color: white;
                border: none;
                padding: 8px 20px;
                border-radius: 20px;
                font-size: 14px;
                cursor: pointer;
                transition: background-color 0.2s;
            }
            .close-btn:hover {
                background: #0077ed;
            }
            @media (max-width: 600px) {
                .features-grid {
                    grid-template-columns: 1fr;
                }
                .about-dialog {
                    padding: 20px;
                }
            }
        `;

        dialog.appendChild(style);
        document.body.appendChild(dialog);

        // Handle close
        const closeBtn = dialog.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                document.body.removeChild(dialog);
            });
        }

        // Close on overlay click
        dialog.addEventListener('click', (e) => {
            if (e.target === dialog) {
                document.body.removeChild(dialog);
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', function closeOnEscape(e) {
            if (e.key === 'Escape') {
                document.body.removeChild(dialog);
                document.removeEventListener('keydown', closeOnEscape);
            }
        });
    }

    public toggleRecentApps(event: MouseEvent): void {
        event.stopPropagation();
        this.showRecentApps = !this.showRecentApps;

        if (this.showRecentApps) {
            // Add click outside listener
            setTimeout(() => {
                document.addEventListener('click', this.handleClickOutside);
            });
        }
    }

    private handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const dropdown = document.querySelector('.recent-apps-dropdown');
        const button = document.querySelector('.action-button[title="Recent Apps"]');

        if (dropdown && button && 
            !dropdown.contains(target) && 
            !button.contains(target)) {
            this.showRecentApps = false;
            document.removeEventListener('click', this.handleClickOutside);
        }
    }

    public getUniqueHosts(historyItems: IHistoryItem[]): IHistoryItem[] {
        const hostMap = new Map<string, IHistoryItem>();
        
        // Group by host and keep the most recent/highest weight item for each host
        historyItems.forEach(item => {
            if (!item.host) return;
            
            if (!hostMap.has(item.host) || 
                (hostMap.get(item.host)?.weight || 0) < (item.weight || 0)) {
                hostMap.set(item.host, item);
            }
        });

        // Convert map back to array and sort by weight
        return Array.from(hostMap.values())
            .sort((a, b) => (b.weight || 0) - (a.weight || 0));
    }

    public handleRecentAppClick(app: IHistoryItem): void {
        if (!app || !app.link) return;
        
        // Create a new tab with the app's URL
        const hostname = StateHelper.extractHostname(app.link);
        const newTab: ITab = {
            id: StateHelper.getNewTabId(this.tabs),
            appId: 0,  // Will be set by the reducer
            title: app.title || hostname,
            url: app.link,
            hostName: hostname,
            icon: app.icon || ''
        };
        
        // Dispatch action to add the tab
        this.store.dispatch(new appActions.AddTabAction(newTab));
        
        // Close the recent apps dropdown
        this.showRecentApps = false;
    }

    public handleNewTab(): void {
        const newTab: ITab = {
            id: 0,  // Will be set by the reducer
            appId: 0,  // Will be set by the reducer
            title: 'New Tab',
            url: 'about:blank',
            hostName: 'New Tab',
            icon: ''
        };
        this.store.dispatch(new appActions.AddTabAction(newTab));
    }
}
