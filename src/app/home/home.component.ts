import { Component, OnInit, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import type { IApp } from '../models/app.model';
import type { ITab } from '../models/tab.model';
import type { IHistoryItem } from '../models/history-item.model';
import type { IWebEvent } from '../models/web-event.model';
import * as fromRoot from '../reducers';
import * as appActions from '../actions/app.actions';
import { NewHistoryAction } from '../reducers/app';
import { AppSearchComponent } from './app-search/app-search.component';
import { StateHelper } from '../utils/state.helper';
import { Menu, MenuItem, BrowserWindow, app, dialog } from '@electron/remote';
import { clipboard } from 'electron';
import { webContents } from '@electron/remote';
import { ScreenshotService } from '../services/screenshot.service';

interface DownloadResult {
    success: boolean;
    path?: string;
    error?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('appSearch') appSearch!: AppSearchComponent;

  histories$: Observable<IHistoryItem[]> = this.store.select(fromRoot.getHistories).pipe(
    map(histories => histories || [])
  );
  currentApp$: Observable<IApp> = this.store.select(fromRoot.getEventCurrentApp).pipe(
    map(app => app || { id: 0, title: '', url: '', icon: '' })
  );
  currentTab$: Observable<ITab> = this.store.select(fromRoot.getEventCurrentTab).pipe(
    map(tab => tab || { id: 0, appId: 0, title: '', url: '', hostName: '', icon: '' })
  );
  apps$: Observable<IApp[]> = this.store.select(fromRoot.getEventApps).pipe(
    map(apps => apps || [])
  );
  tabs$: Observable<ITab[]> = this.store.select(fromRoot.getEventTabs).pipe(
    map(tabs => tabs || [])
  );
  app2Hosts$: Observable<{ [id: number]: string }> = this.store.select(fromRoot.getApp2Hosts).pipe(
    map(hosts => hosts || {})
  );
  host2Apps: Observable<{ [hostname: string]: number }> = this.store.select(fromRoot.getHost2Apps);
  tabIds$: Observable<number[]> = this.store.select(fromRoot.getTabIds).pipe(
    map(ids => ids || [])
  );
  topApps: Observable<IHistoryItem[]> = this.store.select(fromRoot.getTopApps);
  screenWidth: number = window.innerWidth;
  screenHeight: number = window.innerHeight;
  public historiesArray: IHistoryItem[] = [];

  private currentApp: IApp = { id: 0, title: '', url: '', icon: '' };
  private currentTab: ITab = { id: 0, appId: 0, title: '', url: '', hostName: '', icon: '' };
  private apps: IApp[] = [];
  private tabs: ITab[] = [];
  private host2AppsMap: { [hostname: string]: number } = {};
  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private store: Store<fromRoot.State>,
    private screenshotService: ScreenshotService
  ) {
    console.log('[HomeComponent] Constructor called');
    this.subscriptions.push(
      this.currentApp$.subscribe(app => this.currentApp = app),
      this.currentTab$.subscribe(tab => this.currentTab = tab),
      this.apps$.subscribe(apps => this.apps = apps),
      this.tabs$.subscribe(tabs => this.tabs = tabs),
      this.host2Apps.subscribe(h2a => this.host2AppsMap = h2a),
      this.histories$.subscribe(h => {
        if (h && Array.isArray(h)) {
          // Filter out empty or invalid items
          const validHistories = h.filter(item => 
            item && 
            item.link && 
            item.host && 
            typeof item.link === 'string' && 
            typeof item.host === 'string'
          );
          
          if (validHistories.length !== this.historiesArray.length) {
            console.log('[HomeComponent] Histories updated:', validHistories.length, 'valid items');
            this.historiesArray = validHistories;
          }
        }
      })
    );

    // Listen for download complete events
    const { ipcRenderer } = require('electron');
    ipcRenderer.on('download-complete', (_event: Electron.IpcRendererEvent, result: DownloadResult) => {
      if (result.success) {
        console.log('[HomeComponent] Download completed:', result.path);
        // You can add a notification or toast message here
      } else {
        console.error('[HomeComponent] Download failed:', result.error);
        // You can show an error message to the user here
      }
    });
  }

  ngOnInit() {
    console.log('[HomeComponent] ngOnInit called');
  }

  ngOnDestroy() {
    console.log('[HomeComponent] ngOnDestroy called');
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  @HostListener('window:resize')
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  gotoApp(app: IApp) {
    this.store.dispatch(new appActions.GotoAppAction(app));
  }

  closeApp(app: IApp) {
    this.store.dispatch(new appActions.CloseAppAction(app));
  }

  onAppContextMenu(event: any) {
    // Handle app context menu
  }

  onBtnAppAction(event: any) {
    // Handle app action button click
  }

  onAppBarDoubleClick(event: any) {
    // Handle app bar double click
  }

  onNextClick(event: IApp): void {
    this.store.dispatch(new appActions.DoNextAction(event));
  }

  onBackClick(event: IApp): void {
    this.store.dispatch(new appActions.DoBackAction(event));
  }

  onGotoTab(tab: ITab): void {
    this.store.dispatch(new appActions.GotoTabAction(tab));
  }

  doSearchReplacing(event: IWebEvent): void {
    if (!event || !event.eventValue) return;
    this.store.dispatch(new appActions.ChangeTabUrlAction(event));
  }

  onTabContextMenu(event: any): void {
    console.log('Tab context menu:', event);
  }

  onReloadClick(event: IApp): void {
    this.store.dispatch(new appActions.DoReloadAction(event));
  }

  onCloseTab(tab: ITab): void {
    this.store.dispatch(new appActions.CloseTabAction(tab));
  }

  onNewUrl(url: any): void {
    const webEvent: IWebEvent = {
      eventValue: url,
      eventName: 'newurl',
      tabId: this.currentTab.id,
      app: this.currentApp
    };
    this.store.dispatch(new appActions.ChangeTabUrlAction(webEvent));
  }

  onTitleChanged(title: any): void {
    const webEvent: IWebEvent = {
      eventValue: title,
      eventName: 'titlechanged',
      tabId: this.currentTab.id,
      app: this.currentApp
    };
    this.store.dispatch(new appActions.ChangeTabTitleAction(webEvent));
  }

  onIconChanged(icon: any): void {
    const webEvent: IWebEvent = {
      eventValue: icon,
      eventName: 'iconchanged',
      tabId: this.currentTab.id,
      app: this.currentApp
    };
    this.store.dispatch(new appActions.ChangeTabIconAction(webEvent));
  }

  onUrlChanged(url: any): void {
    const webEvent: IWebEvent = {
      eventValue: url,
      eventName: 'urlchanged',
      tabId: this.currentTab.id,
      app: this.currentApp
    };
    this.store.dispatch(new appActions.ChangeTabUrlAction(webEvent));
  }

  onDomReady(event: IWebEvent): void {
    console.log('[HomeComponent] DOM ready event received:', event);
    
    // Reset zoom factor to 1.0 when DOM is ready
    const webview = document.querySelector(`webview#webview-${this.currentTab.id}`) as Electron.WebviewTag;
    if (webview) {
      const webContentsId = webview.getWebContentsId();
      const wc = webContents.fromId(webContentsId);
      if (wc) {
        wc.setZoomFactor(1.0);
      }
    }
    
    // Only proceed if we have valid tab and app
    if (!this.currentTab?.url || !this.currentTab?.hostName) {
      console.log('[HomeComponent] Skipping history update - invalid tab data');
      return;
    }

    // Dispatch only the DomReadyAction - history will be handled in the reducer
    this.store.dispatch(new appActions.DomReadyAction(event));
  }

  onClicked(event: any): void {
    console.log('Clicked:', event);
  }

  onContextMenu(params: any) {
    console.log('[Home] Context menu:', params);
    const menu = new Menu();

    // Add screenshot option
    menu.append(new MenuItem({
      label: 'Capture full page',
      click: async () => {
        try {
          const webview = document.querySelector(`webview#webview-${this.currentTab.id}`) as Electron.WebviewTag;
          if (!webview) {
            console.error('[Home] No webview found for current tab:', this.currentTab.id);
            return;
          }

          // Capture the page using the screenshot service
          const base64Image = await this.screenshotService.captureFullPage(webview);

          // Create a temporary link to download the image
          const link = document.createElement('a');
          link.download = `screenshot-${new Date().toISOString()}.png`;
          link.href = base64Image;
          link.click();
          console.log('[Home] Screenshot saved');
        } catch (error) {
          console.error('[Home] Error capturing screenshot:', error);
        }
      }
    }));

    // Handle link context menu
    if (params.linkURL) {
      menu.append(new MenuItem({
        label: 'Open link in new tab',
        click: () => {
          const hostName = StateHelper.extractHostname(params.linkURL);
          this.store.dispatch(new appActions.AddTabAction({
            id: 0,
            appId: 0,
            hostName,
            title: '',
            url: params.linkURL
          }));
        }
      }));

      menu.append(new MenuItem({
        label: 'Copy link address',
        click: () => {
          clipboard.writeText(params.linkURL);
        }
      }));
    }

    // Handle text selection context menu with smart search features
    if (params.selectionText) {
      const searchText = encodeURIComponent(params.selectionText);
      
      // Add search submenu
      const searchSubmenu = new Menu();
      searchSubmenu.append(new MenuItem({
        label: 'Google',
        click: () => {
          const hostName = StateHelper.extractHostname(`https://www.google.com/search?q=${searchText}`);
          this.store.dispatch(new appActions.AddTabAction({
            id: 0,
            appId: 0,
            hostName,
            title: '',
            url: `https://www.google.com/search?q=${searchText}`
          }));
        }
      }));
      
      searchSubmenu.append(new MenuItem({
        label: 'Bing',
        click: () => {
          const hostName = StateHelper.extractHostname(`https://www.bing.com/search?q=${searchText}`);
          this.store.dispatch(new appActions.AddTabAction({
            id: 0,
            appId: 0,
            hostName,
            title: '',
            url: `https://www.bing.com/search?q=${searchText}`
          }));
        }
      }));
      
      searchSubmenu.append(new MenuItem({
        label: 'DuckDuckGo',
        click: () => {
          const hostName = StateHelper.extractHostname(`https://duckduckgo.com/?q=${searchText}`);
          this.store.dispatch(new appActions.AddTabAction({
            id: 0,
            appId: 0,
            hostName,
            title: '',
            url: `https://duckduckgo.com/?q=${searchText}`
          }));
        }
      }));

      menu.append(new MenuItem({
        label: 'Search with',
        submenu: searchSubmenu
      }));

      // Add translate submenu with more languages
      const translateSubmenu = new Menu();
      
      // Common languages
      const languages = [
        { code: 'en', name: 'English' },
        { code: 'vi', name: 'Vietnamese' },
        { code: 'ja', name: 'Japanese' },
        { code: 'ko', name: 'Korean' },
        { code: 'zh', name: 'Chinese' },
        { code: 'fr', name: 'French' },
        { code: 'de', name: 'German' },
        { code: 'es', name: 'Spanish' },
        { code: 'ru', name: 'Russian' },
        { code: 'pt', name: 'Portuguese' },
        { code: 'it', name: 'Italian' },
        { code: 'nl', name: 'Dutch' },
        { code: 'pl', name: 'Polish' },
        { code: 'ar', name: 'Arabic' },
        { code: 'hi', name: 'Hindi' }
      ];

      languages.forEach(lang => {
        translateSubmenu.append(new MenuItem({
          label: lang.name,
          click: () => {
            const hostName = StateHelper.extractHostname(`https://translate.google.com/?sl=auto&tl=${lang.code}&text=${searchText}`);
            this.store.dispatch(new appActions.AddTabAction({
              id: 0,
              appId: 0,
              hostName,
              title: '',
              url: `https://translate.google.com/?sl=auto&tl=${lang.code}&text=${searchText}`
            }));
          }
        }));
      });

      menu.append(new MenuItem({
        label: 'Translate to',
        submenu: translateSubmenu
      }));

      menu.append(new MenuItem({
        label: 'Copy',
        click: () => {
          clipboard.writeText(params.selectionText);
        }
      }));
    }

    // Handle image context menu with smart search features
    if (params.mediaType === 'image' && params.srcURL) {
      const imageUrl = encodeURIComponent(params.srcURL);
      
      menu.append(new MenuItem({
        label: 'Search image with Google',
        click: () => {
          const hostName = StateHelper.extractHostname(`https://lens.google.com/uploadbyurl?url=${imageUrl}`);
          this.store.dispatch(new appActions.AddTabAction({
            id: 0,
            appId: 0,
            hostName,
            title: '',
            url: `https://lens.google.com/uploadbyurl?url=${imageUrl}`
          }));
        }
      }));

      menu.append(new MenuItem({
        label: 'Download image to "Downloads"',
        click: async () => {
          const downloadsFolder = app.getPath('downloads');
          if (!downloadsFolder) return;
          
          // Extract filename from URL or generate one
          const urlObj = new URL(params.srcURL);
          const filename = urlObj.pathname.split('/').pop() || 'image.png';
          const targetPath = require('path').join(downloadsFolder, filename);
          
          this.saveUrlToFolder(params.srcURL, targetPath);
        }
      }));

      menu.append(new MenuItem({
        label: 'Save image to...',
        click: async () => {
          const win = BrowserWindow.getFocusedWindow();
          if (!win) return;

          const { canceled, filePath } = await dialog.showSaveDialog(win, {
            defaultPath: require('path').join(app.getPath('downloads'), 'image.png'),
            filters: [
              { name: 'Images', extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp'] },
              { name: 'All Files', extensions: ['*'] }
            ]
          });

          if (!canceled && filePath) {
            this.saveUrlToFolder(params.srcURL, filePath);
          }
        }
      }));

      menu.append(new MenuItem({
        label: 'Copy image',
        click: () => {
          clipboard.writeImage(params.srcURL);
        }
      }));
    }

    // Handle video context menu
    if (params.mediaType === 'video' && params.srcURL) {
      menu.append(new MenuItem({
        label: 'Download video to "Downloads"',
        click: async () => {
          const downloadsFolder = app.getPath('downloads');
          if (!downloadsFolder) return;
          
          // Extract filename from URL or generate one
          const urlObj = new URL(params.srcURL);
          const filename = urlObj.pathname.split('/').pop() || 'video.mp4';
          const targetPath = require('path').join(downloadsFolder, filename);
          
          this.saveUrlToFolder(params.srcURL, targetPath);
        }
      }));

      menu.append(new MenuItem({
        label: 'Save video to...',
        click: async () => {
          const win = BrowserWindow.getFocusedWindow();
          if (!win) return;

          const { canceled, filePath } = await dialog.showSaveDialog(win, {
            defaultPath: require('path').join(app.getPath('downloads'), 'video.mp4'),
            filters: [
              { name: 'Videos', extensions: ['mp4', 'webm', 'ogg'] },
              { name: 'All Files', extensions: ['*'] }
            ]
          });

          if (!canceled && filePath) {
            this.saveUrlToFolder(params.srcURL, filePath);
          }
        }
      }));
    }

    // If no menu items were added, add a default "Copy" option
    if (menu.items.length === 0) {
      menu.append(new MenuItem({
        label: 'Copy',
        click: () => {
          clipboard.writeText(params.selectionText || '');
        }
      }));
    }

    // Get the current window and show the menu
    const win = BrowserWindow.getFocusedWindow();
    if (win) {
      menu.popup({ window: win, x: params.x, y: params.y });
    }
  }

  private saveUrlToFolder(url: string, folderPath: string): void {
    const { ipcRenderer } = require('electron');
    ipcRenderer.send('download-file', {
      url: url,
      targetPath: folderPath
    });
  }

  doSearch(event: { url: string }) {
    if (!event || !event.url) return;
    
    const preparedUrl = StateHelper.prepareAppLink(event.url);
    const hostname = StateHelper.extractHostname(preparedUrl);
    
    // Check if an app exists for this hostname
    const existingApp = StateHelper.findAppByHostname(hostname, this.host2AppsMap, this.apps);
    
    if (existingApp) {
      // Add new tab to existing app
      const newTab: ITab = {
        id: StateHelper.getNewTabId(this.tabs),
        appId: existingApp.id,
        title: '',
        url: preparedUrl,
        hostName: hostname,
        icon: ''
      };
      this.store.dispatch(new appActions.AddTabAction(newTab));
    } else {
      // Create new app and tab
      const newAppId = StateHelper.getNewAppId(this.apps);
      const newApp = StateHelper.createApp(newAppId, preparedUrl);
      
      const newTab: ITab = {
        id: StateHelper.getNewTabId(this.tabs),
        appId: newAppId,
        title: '',
        url: preparedUrl,
        hostName: hostname,
        icon: ''
      };
      
      // Dispatch actions to create app and tab
      this.store.dispatch(new appActions.AddAppAction(newApp));
      this.store.dispatch(new appActions.AddTabAction(newTab));
    }
  }

  onBtnAIAssistant() {
    const aiAssistant = document.querySelector('app-ai-assistant') as any;
    if (aiAssistant) {
      aiAssistant.toggleAssistant();
    }
  }
}
