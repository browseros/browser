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
    private store: Store<fromRoot.State>
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

    // Handle text selection context menu
    if (params.selectionText) {
      menu.append(new MenuItem({
        label: 'Copy',
        click: () => {
          clipboard.writeText(params.selectionText);
        }
      }));
    }

    // Handle image context menu
    if (params.mediaType === 'image' && params.srcURL) {
      menu.append(new MenuItem({
        label: 'Download image to "Downloads"',
        click: () => {
          const downloadsFolder = app.getPath('downloads');
          if (!downloadsFolder) return;
          this.saveUrlToFolder(params.srcURL, downloadsFolder);
        }
      }));

      menu.append(new MenuItem({
        label: 'Save image to...',
        click: () => {
          const win = BrowserWindow.getFocusedWindow();
          if (!win) return;

          const options = {
            properties: ['openDirectory' as const]
          };

          dialog.showOpenDialog(win, options).then(result => {
            if (!result.canceled && result.filePaths.length > 0) {
              this.saveUrlToFolder(params.srcURL, result.filePaths[0]);
            }
          });
        }
      }));
    }

    // Handle video context menu
    if (params.mediaType === 'video' && params.srcURL) {
      menu.append(new MenuItem({
        label: 'Download video to "Downloads"',
        click: () => {
          const downloadsFolder = app.getPath('downloads');
          if (!downloadsFolder) return;
          this.saveUrlToFolder(params.srcURL, downloadsFolder);
        }
      }));

      menu.append(new MenuItem({
        label: 'Save video to...',
        click: () => {
          const win = BrowserWindow.getFocusedWindow();
          if (!win) return;

          const options = {
            properties: ['openDirectory' as const]
          };

          dialog.showOpenDialog(win, options).then(result => {
            if (!result.canceled && result.filePaths.length > 0) {
              this.saveUrlToFolder(params.srcURL, result.filePaths[0]);
            }
          });
        }
      }));
    }

    menu.popup({ window: BrowserWindow.getFocusedWindow()! });
  }

  private saveUrlToFolder(url: string, folderPath: string): void {
    // TODO: Implement file download functionality
    console.log('[Home] Saving URL to folder:', { url, folderPath });
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
}
