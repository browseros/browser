import { Component, OnInit, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import type { IApp } from '../models/app.model';
import type { ITab } from '../models/tab.model';
import type { IHistoryItem } from '../models/history-item.model';
import type { IWebEvent } from '../models/web-event.model';
import * as fromRoot from '../reducers';
import * as appActions from '../actions/app.actions';
import * as historyActions from '../actions/history.actions';
import { AppSearchComponent } from './app-search/app-search.component';
import { StateHelper } from '../utils/state.helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('appSearch') appSearch!: AppSearchComponent;

  eventApps: Observable<IApp[]> = this.store.select(fromRoot.getEventApps);
  eventTabs: Observable<ITab[]> = this.store.select(fromRoot.getEventTabs);
  eventCurrentApp: Observable<IApp> = this.store.select(fromRoot.getEventCurrentApp).pipe(
    map(app => app || { id: 0, title: '', url: '', icon: '' })
  );
  eventCurrentTab: Observable<ITab> = this.store.select(fromRoot.getEventCurrentTab).pipe(
    map(tab => tab || { id: 0, appId: 0, title: '', url: '', hostName: '', icon: '' })
  );
  app2Hosts: Observable<{ [id: number]: string }> = this.store.select(fromRoot.getApp2Hosts);
  host2Apps: Observable<{ [hostname: string]: number }> = this.store.select(fromRoot.getHost2Apps);
  tabIds: Observable<number[]> = this.store.select(fromRoot.getTabIds);
  histories: Observable<IHistoryItem[]> = this.store.select(fromRoot.getHistories);
  topApps: Observable<IHistoryItem[]> = this.store.select(fromRoot.getTopApps);
  screenWidth: number = window.innerWidth;
  screenHeight: number = window.innerHeight;

  private currentApp: IApp = { id: 0, title: '', url: '', icon: '' };
  private currentTab: ITab = { id: 0, appId: 0, title: '', url: '', hostName: '', icon: '' };
  private apps: IApp[] = [];
  private tabs: ITab[] = [];
  private host2AppsMap: { [hostname: string]: number } = {};

  constructor(
    private router: Router,
    private store: Store<fromRoot.State>
  ) {
    console.log('[HomeComponent] Constructor called');
    this.eventCurrentApp.subscribe(app => this.currentApp = app);
    this.eventCurrentTab.subscribe(tab => this.currentTab = tab);
    this.eventApps.subscribe(apps => this.apps = apps);
    this.eventTabs.subscribe(tabs => this.tabs = tabs);
    this.host2Apps.subscribe(h2a => this.host2AppsMap = h2a);
  }

  ngOnInit() {
    console.log('[HomeComponent] ngOnInit called');
  }

  ngOnDestroy() {
    console.log('[HomeComponent] ngOnDestroy called');
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
      tabId: 0,
      app: null
    };
    this.store.dispatch(new appActions.ChangeTabUrlAction(webEvent));
  }

  onTitleChanged(title: any): void {
    const webEvent: IWebEvent = {
      eventValue: title,
      eventName: 'titlechanged',
      tabId: 0,
      app: null
    };
    this.store.dispatch(new appActions.ChangeTabTitleAction(webEvent));
  }

  onIconChanged(icon: any): void {
    const webEvent: IWebEvent = {
      eventValue: icon,
      eventName: 'iconchanged',
      tabId: 0,
      app: null
    };
    this.store.dispatch(new appActions.ChangeTabIconAction(webEvent));
  }

  onUrlChanged(url: any): void {
    const webEvent: IWebEvent = {
      eventValue: url,
      eventName: 'urlchanged',
      tabId: 0,
      app: null
    };
    this.store.dispatch(new appActions.ChangeTabUrlAction(webEvent));
  }

  onDomReady(): void {
    const webEvent: IWebEvent = {
      eventValue: null,
      eventName: 'domready',
      tabId: 0,
      app: null
    };
    this.store.dispatch(new appActions.DomReadyAction(webEvent));
  }

  onClicked(event: any): void {
    console.log('Clicked:', event);
  }

  onContextMenu(event: any) {
    // Handle context menu
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
