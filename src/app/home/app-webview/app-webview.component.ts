import { Component, Output, EventEmitter, Input, AfterViewInit, ViewChildren, QueryList, ElementRef, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import type { ITab } from '../../models/tab.model';
import type { IApp } from '../../models/app.model';
import type { IWebEvent } from '../../models/web-event.model';
import { Subscription } from 'rxjs';
import type { WebviewTag } from 'electron';
import { webContents, Menu, MenuItem } from '@electron/remote';
import { ipcRenderer } from 'electron';
import * as appActions from '../../actions/app.actions';
import { map } from 'rxjs/operators';
import { AIAssistantService } from '../../services/ai-assistant.service';

interface IContextMenuItem {
    id: string;
    label: string;
    visible: boolean;
    role?: string;
}

@Component({
    selector: 'app-webview',
    templateUrl: './app-webview.component.html',
    styleUrls: ['./app-webview.component.scss']
})
export class AppWebviewComponent implements AfterViewInit, OnDestroy {
    @Input() public currentTab: ITab | null = null;
    @Input() public screenHeight: number = 0;
    @Input() public screenWidth: number = 0;
    @Input() public tabIds: number[] = [];
    @Output() public onTitleChanged = new EventEmitter<string>();
    @Output() public onIconChanged = new EventEmitter<string>();
    @Output() public onNewUrl = new EventEmitter<string>();
    @Output() public onUrlChanged = new EventEmitter<string>();
    @Output() public onContextMenu = new EventEmitter<any>();
    @Output() public onDomReady = new EventEmitter<IWebEvent>();
    @Output() public onClicked = new EventEmitter<any>();
    @Output() public onImageToAI = new EventEmitter<{ imageUrl: string, srcUrl: string }>();

    @ViewChildren('webview') private webviews!: QueryList<ElementRef<WebviewTag>>;
    private onFirstLoad: { [key: number]: boolean } = {};
    private tabsSub: Subscription;
    private tabs: ITab[] = [];
    private currentTabSub: Subscription;
    private currentApp: IApp;
    private appSub: Subscription;
    private backSub: Subscription;
    private nextSub: Subscription;
    private reloadSub: Subscription;
    public tabIdsInternal: number[] = [];
    private tabIdsSub: Subscription;
    public currentTabInternal: ITab | null = null;

    isAIAssistantOpen: boolean = false;
    private subscription: Subscription = new Subscription();

    constructor(
        public store: Store<fromRoot.State>,
        private cdr: ChangeDetectorRef,
        private aiAssistantService: AIAssistantService
    ) {
        console.log('[AppWebview] Constructor called');
        this.tabsSub = new Subscription();
        this.currentTabSub = new Subscription();
        this.currentApp = { id: 0, title: '', url: '', icon: '' };
        this.appSub = new Subscription();
        this.backSub = new Subscription();
        this.nextSub = new Subscription();
        this.reloadSub = new Subscription();

        // Subscribe to tabs
        this.tabsSub = this.store.select(fromRoot.getEventTabs).pipe(
            map(tabs => tabs || [])
        ).subscribe(tabs => {
            console.log('[AppWebview] Tabs updated:', tabs);
            // Only update if tabs array actually changed
            if (JSON.stringify(this.tabs) !== JSON.stringify(tabs)) {
                this.tabs = tabs;
                // Update tabIdsInternal when tabs change
                this.updateTabIdsInternal();
                this.cdr.detectChanges();
            }
        });

        // Subscribe to current tab
        this.currentTabSub = this.store.select(fromRoot.getEventCurrentTab).pipe(
            map(tab => tab || { id: 0, appId: 0, title: '', url: '', hostName: '', icon: '' })
        ).subscribe(tab => {
            console.log('[AppWebview] Current tab updated:', tab);
            this.currentTabInternal = tab;
            this.cdr.detectChanges();
        });

        // Subscribe to current app
        this.appSub = this.store.select(fromRoot.getEventCurrentApp).pipe(
            map(app => app || { id: 0, title: '', url: '', icon: '' })
        ).subscribe(app => {
            console.log('[AppWebview] Current app updated:', app);
            // Only update if app actually changed
            if (JSON.stringify(this.currentApp) !== JSON.stringify(app)) {
                this.currentApp = app;
                this.cdr.detectChanges();
            }
        });

        this.subscription.add(
            this.aiAssistantService.isOpen$.subscribe(
                isOpen => this.isAIAssistantOpen = isOpen
            )
        );
    }

    private updateTabIdsInternal() {
        // Get current tab IDs from tabs array
        const currentTabIds = this.tabs.map(tab => tab.id);
        
        // Find tabs to add (in currentTabIds but not in tabIdsInternal)
        const tabsToAdd = currentTabIds.filter(id => !this.tabIdsInternal.includes(id));
        
        // Find tabs to remove (in tabIdsInternal but not in currentTabIds)
        const tabsToRemove = this.tabIdsInternal.filter(id => !currentTabIds.includes(id));
        
        const tabIdsInternal = [...this.tabIdsInternal];
        // Add new tabs
        tabsToAdd.forEach(id => {
            console.log('[AppWebview] Adding tab:', id);
            //this.tabIdsInternal.push(id);
            tabIdsInternal.push(id);
        });
        
        // Remove old tabs
        tabsToRemove.forEach(id => {
            console.log('[AppWebview] Removing tab:', id);
            const index = this.tabIdsInternal.indexOf(id);
            if (index > -1) {
                //this.tabIdsInternal.splice(index, 1);
                tabIdsInternal.splice(index, 1);
            }
        });

        this.tabIdsInternal = tabIdsInternal;
        // Force change detection
        this.cdr.detectChanges();
    }

    public ngOnDestroy() {
        if (this.tabsSub) this.tabsSub.unsubscribe();
        if (this.currentTabSub) this.currentTabSub.unsubscribe();
        if (this.appSub) this.appSub.unsubscribe();
        if (this.backSub) this.backSub.unsubscribe();
        if (this.nextSub) this.nextSub.unsubscribe();
        if (this.reloadSub) this.reloadSub.unsubscribe();
        this.subscription.unsubscribe();
    }

    public ngAfterViewInit() {
        console.log('[AppWebview] Setting up webview events');
        
        // Subscribe to tabIds changes
        this.tabIdsSub = this.store.select(fromRoot.getTabIds).pipe(
            map(ids => ids || [])
        ).subscribe(ids => {
            console.log('[AppWebview] TabIds updated:', ids);
            this.updateTabIdsInternal();
        });

        // Subscribe to navigation actions
        this.backSub = this.store.select(fromRoot.getIsNavigatingBack).subscribe((action: any) => {
            if (action?.isCalling && this.currentTab?.id && action.tab.id === this.currentTab.id) {
                this.goBack();
                this.store.dispatch(new appActions.DoBackCompleteAction(action.app));
            }
        });

        this.nextSub = this.store.select(fromRoot.getIsNavigatingNext).subscribe((action: any) => {
            if (action?.isCalling && this.currentTab?.id && action.tab.id === this.currentTab.id) {
                this.goForward();
                this.store.dispatch(new appActions.DoNextCompleteAction(action.app));
            }
        });

        this.reloadSub = this.store.select(fromRoot.getIsNavigatingReload).subscribe((action: any) => {
            if (action?.isCalling && this.currentTab?.id && action.tab.id === this.currentTab.id) {
                this.reload();
                this.store.dispatch(new appActions.DoReloadCompleteAction(action.app));
            }
        });

        // Handle webview events for each webview
        this.webviews.changes.subscribe(webviews => {
            webviews.forEach((webviewRef: ElementRef<WebviewTag>, index: number) => {
                const webviewElm = webviewRef.nativeElement;
                const tabId = this.tabIds[index];
                
                console.log(`[AppWebview] Setting up events for webview ${tabId}`);

                // Handle webview events
                webviewElm.addEventListener('dom-ready', () => {
                    const currentUrl = webviewElm.getURL();
                    console.log(`[AppWebview] DOM ready for tab ${tabId}:`, {
                        currentUrl,
                        tabs: this.tabs
                    });

                    // Setup context menu after DOM is ready
                    try {
                        const webContentsId = webviewElm.getWebContentsId();
                        const wc = webContents.fromId(webContentsId);
                        if (wc) {
                            wc.removeAllListeners('context-menu');
                            wc.on('context-menu', (e: any, params: any) => {
                                console.log(`[AppWebview] Context menu params for tab ${tabId}:`, params);
                                
                                // Create menu items array with default items and screenshot option
                                const menuItems: IContextMenuItem[] = [
                                    {
                                        id: 'screenshot',
                                        label: 'Chụp ảnh màn hình',
                                        visible: true
                                    }
                                ];

                                // Add standard context menu items if text is selected
                                if (params.selectionText) {
                                    menuItems.unshift(
                                        {
                                            id: 'copy',
                                            label: 'Copy',
                                            role: 'copy',
                                            visible: true
                                        }
                                    );
                                }

                                // Add link-related items if there's a link
                                if (params.linkURL) {
                                    menuItems.unshift(
                                        {
                                            id: 'openLink',
                                            label: 'Open link in new tab',
                                            visible: true
                                        },
                                        {
                                            id: 'copyLink',
                                            label: 'Copy link address',
                                            visible: true
                                        }
                                    );
                                }

                                this.onContextMenu.emit({
                                    ...params,
                                    menuItems,
                                    x: e.x,
                                    y: e.y,
                                    screenshot: async () => {
                                        try {
                                            const image = await wc.capturePage();
                                            const dataUrl = image.toDataURL();
                                            
                                            // Create a temporary link to download the image
                                            const link = document.createElement('a');
                                            link.download = `screenshot-${new Date().toISOString()}.png`;
                                            link.href = dataUrl;
                                            link.click();
                                        } catch (error) {
                                            console.error('[AppWebview] Error capturing screenshot:', error);
                                        }
                                    }
                                });
                            });
                        }
                    } catch (err) {
                        console.error(`[AppWebview] Error setting up context menu for tab ${tabId}:`, err);
                    }

                    // Always emit dom-ready event
                    this.onDomReady.emit({
                        eventValue: null,
                        eventName: 'domready',
                        tabId: tabId,
                        app: this.currentApp || null
                    });
                });

                webviewElm.addEventListener('did-start-loading', () => {
                    console.log(`[AppWebview] Started loading for tab ${tabId}:`, webviewElm.getURL());
                });

                webviewElm.addEventListener('did-stop-loading', () => {
                    console.log(`[AppWebview] Stopped loading for tab ${tabId}:`, webviewElm.getURL());
                });

                webviewElm.addEventListener('did-fail-load', (e: any) => {
                    console.error(`[AppWebview] Failed to load for tab ${tabId}:`, {
                        errorCode: e.errorCode,
                        errorDescription: e.errorDescription,
                        validatedURL: e.validatedURL,
                        isMainFrame: e.isMainFrame
                    });
                });

                webviewElm.addEventListener('page-title-updated', (e: any) => {
                    console.log(`[AppWebview] Title updated for tab ${tabId}:`, e.title);
                    this.onTitleChanged.emit(e.title);
                });

                webviewElm.addEventListener('page-favicon-updated', (e: any) => {
                    console.log(`[AppWebview] Favicon updated for tab ${tabId}:`, e.favicons[0]);
                    this.onIconChanged.emit(e.favicons[0]);
                });

                webviewElm.addEventListener('did-navigate', (e: any) => {
                    console.log(`[AppWebview] Did navigate for tab ${tabId}:`, e.url);
                    this.onUrlChanged.emit(e.url);
                });

                webviewElm.addEventListener('did-get-redirect-request', (e: any) => {
                    console.log(`[AppWebview] Did get redirect request for tab ${tabId}:`, e.newURL);
                    this.onUrlChanged.emit(e.newURL);
                });

                webviewElm.addEventListener('new-window', (e: any) => {
                    console.log(`[AppWebview] New window for tab ${tabId}:`, e.url);
                    this.onNewUrl.emit(e.url);
                });

                webviewElm.addEventListener('context-menu', (e: any) => {
                    e.preventDefault();
                    
                    const { mediaType, srcURL } = e.params;
                    const isImage = mediaType === 'image';
                    
                    const menu = new Menu();
                    
                    // Add AI Assistant option for images
                    if (isImage) {
                        menu.append(new MenuItem({
                            label: 'Send to AI Assistant',
                            click: () => {
                                this.onImageToAI.emit({
                                    imageUrl: e.params.srcURL,
                                    srcUrl: e.params.pageURL
                                });
                                // Open AI Assistant if not already open
                                this.aiAssistantService.toggleAssistant();
                            }
                        }));
                        menu.append(new MenuItem({ type: 'separator' }));
                    }
                    
                    // Add other default context menu items
                    // ... existing context menu code ...
                    
                    menu.popup();
                });
            });
        });

        // Handle click events through IPC
        ipcRenderer.on('clicked', () => {
            console.log('[AppWebview] Click detected');
            this.onClicked.emit('clicked');
        });
    }

    public getTabUrl(tabId: number): string {
        const tab = this.tabs.find(t => t.id === tabId);
        console.log(`[AppWebview] Getting URL for tab ${tabId}:`, tab?.url);
        return tab?.url || '';
    }

    public handleContextMenu(event: any) {
        console.log('[AppWebview] Context menu event:', event);
        const webviewElm = this.webviews.find(w => w.nativeElement.id === `webview-${this.currentTab?.id}`)?.nativeElement;
        if (webviewElm) {
            const webContentsId = webviewElm.getWebContentsId();
            const wc = webContents.fromId(webContentsId);
            if (wc) {
                wc.on('context-menu', async (e: any, params: any) => {
                    console.log('[AppWebview] Context menu params:', params);
                    
                    // Create menu items array with default items and screenshot option
                    const menuItems: IContextMenuItem[] = [
                        {
                            id: 'screenshot',
                            label: 'Chụp ảnh màn hình',
                            visible: true
                        }
                    ];

                    // Add standard context menu items if text is selected
                    if (params.selectionText) {
                        menuItems.unshift(
                            {
                                id: 'copy',
                                label: 'Copy',
                                role: 'copy',
                                visible: true
                            }
                        );
                    }

                    // Add link-related items if there's a link
                    if (params.linkURL) {
                        menuItems.unshift(
                            {
                                id: 'openLink',
                                label: 'Open link in new tab',
                                visible: true
                            },
                            {
                                id: 'copyLink',
                                label: 'Copy link address',
                                visible: true
                            }
                        );
                    }

                    this.onContextMenu.emit({
                        ...params,
                        menuItems,
                        x: e.x,
                        y: e.y,
                        screenshot: async () => {
                            try {
                                // Get the full page size
                                const pageSize = await wc.executeJavaScript(`
                                    new Promise((resolve) => {
                                        resolve({
                                            width: Math.max(
                                                document.documentElement.scrollWidth,
                                                document.documentElement.clientWidth,
                                                document.documentElement.offsetWidth
                                            ),
                                            height: Math.max(
                                                document.documentElement.scrollHeight,
                                                document.documentElement.clientHeight,
                                                document.documentElement.offsetHeight
                                            )
                                        });
                                    });
                                `);

                                console.log('[AppWebview] Full page size:', pageSize);

                                // Capture the full page
                                const image = await wc.capturePage({
                                    x: 0,
                                    y: 0,
                                    width: pageSize.width,
                                    height: pageSize.height
                                });
                                const dataUrl = image.toDataURL();
                                
                                // Create a temporary link to download the image
                                const link = document.createElement('a');
                                link.download = `screenshot-${new Date().toISOString()}.png`;
                                link.href = dataUrl;
                                link.click();
                            } catch (error) {
                                console.error('[AppWebview] Error capturing screenshot:', error);
                            }
                        }
                    });
                });
            }
        }
    }

    // Navigation methods
    public goBack(): void {
        const webviewElm = this.webviews.find(w => w.nativeElement.id === `webview-${this.currentTab?.id}`)?.nativeElement;
        if (webviewElm && webviewElm.canGoBack()) {
            webviewElm.goBack();
        }
    }

    public goForward(): void {
        const webviewElm = this.webviews.find(w => w.nativeElement.id === `webview-${this.currentTab?.id}`)?.nativeElement;
        if (webviewElm && webviewElm.canGoForward()) {
            webviewElm.goForward();
        }
    }

    public reload(): void {
        const webviewElm = this.webviews.find(w => w.nativeElement.id === `webview-${this.currentTab?.id}`)?.nativeElement;
        if (webviewElm) {
            webviewElm.reload();
        }
    }

    public async captureCurrentTabScreenshot(): Promise<string> {
        const webviewElm = this.webviews.find(w => w.nativeElement.id === `webview-${this.currentTab?.id}`)?.nativeElement;
        if (!webviewElm) {
            throw new Error('No active webview found');
        }

        try {
            const webContentsId = webviewElm.getWebContentsId();
            const wc = webContents.fromId(webContentsId);
            if (wc) {
                // Get the full page size
                const pageSize = await wc.executeJavaScript(`
                    new Promise((resolve) => {
                        resolve({
                            width: Math.max(
                                document.documentElement.scrollWidth,
                                document.documentElement.clientWidth,
                                document.documentElement.offsetWidth
                            ),
                            height: Math.max(
                                document.documentElement.scrollHeight,
                                document.documentElement.clientHeight,
                                document.documentElement.offsetHeight
                            )
                        });
                    });
                `);

                console.log('[AppWebview] Full page size:', pageSize);

                // Capture the full page
                const image = await wc.capturePage({
                    x: 0,
                    y: 0,
                    width: pageSize.width,
                    height: pageSize.height
                });
                return image.toDataURL();
            }
            throw new Error('Could not get webContents');
        } catch (error) {
            console.error('[AppWebview] Error capturing screenshot:', error);
            throw error;
        }
    }

    // Event handler methods
    public handleTitleUpdated(event: any): void {
        this.onTitleChanged.emit(event.title);
    }

    public handleFaviconUpdated(event: any): void {
        this.onIconChanged.emit(event.favicons[0]);
    }

    public handleNavigate(event: any): void {
        this.onUrlChanged.emit(event.url);
    }

    public handleRedirectRequest(event: any): void {
        this.onUrlChanged.emit(event.newURL);
    }

    public handleNewWindow(event: any): void {
        this.onNewUrl.emit(event.url);
    }

    public getCurrentWebview(): Electron.WebviewTag | null {
        if (!this.currentTab || !this.webviews) return null;
        
        const index = this.tabIdsInternal.indexOf(this.currentTab.id);
        if (index === -1) return null;

        const webviewRef = this.webviews.toArray()[index];
        return webviewRef?.nativeElement || null;
    }
}
