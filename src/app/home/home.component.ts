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
  tabIds: Observable<number[]> = this.store.select(fromRoot.getTabIds);
  histories: Observable<IHistoryItem[]> = this.store.select(fromRoot.getHistories);
  topApps: Observable<IHistoryItem[]> = this.store.select(fromRoot.getTopApps);
  screenWidth: number = window.innerWidth;
  screenHeight: number = window.innerHeight;

  private currentApp: IApp = { id: 0, title: '', url: '', icon: '' };
  private currentTab: ITab = { id: 0, appId: 0, title: '', url: '', hostName: '', icon: '' };

  constructor(
    private router: Router,
    private store: Store<fromRoot.State>
  ) {
    console.log('[HomeComponent] Constructor called');
    this.eventCurrentApp.subscribe(app => this.currentApp = app);
    this.eventCurrentTab.subscribe(tab => this.currentTab = tab);
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

  onAppContextMenu(event: MouseEvent) {
    // Handle app context menu
  }

  onBtnAppAction(event: MouseEvent) {
    // Handle app action button click
  }

  onAppBarDoubleClick(event: MouseEvent) {
    // Handle app bar double click
  }

  onNextClick(event: MouseEvent): void {
    this.store.dispatch(new appActions.DoNextAction(this.currentApp));
  }

  onBackClick(event: MouseEvent): void {
    this.store.dispatch(new appActions.DoBackAction(this.currentApp));
  }

  onGotoTab(tab: ITab): void {
    this.store.dispatch(new appActions.GotoTabAction(tab));
  }

  doSearchReplacing(url: string) {
    // Handle search replacing
  }

  onTabContextMenu(event: MouseEvent): void {
    console.log('Tab context menu:', event);
  }

  onReloadClick(event: MouseEvent): void {
    this.store.dispatch(new appActions.DoReloadAction(this.currentApp));
  }

  onCloseTab(tab: ITab): void {
    this.store.dispatch(new appActions.CloseTabAction(tab));
  }

  onNewUrl(url: string): void {
    const webEvent: IWebEvent = {
      eventValue: url,
      eventName: 'newurl',
      tabId: this.currentTab.id,
      app: this.currentApp
    };
    this.store.dispatch(new appActions.ChangeTabUrlAction(webEvent));
  }

  onTitleChanged(title: string): void {
    const webEvent: IWebEvent = {
      eventValue: title,
      eventName: 'titlechanged',
      tabId: this.currentTab.id,
      app: this.currentApp
    };
    this.store.dispatch(new appActions.ChangeTabTitleAction(webEvent));
  }

  onIconChanged(icon: string): void {
    const webEvent: IWebEvent = {
      eventValue: icon,
      eventName: 'iconchanged',
      tabId: this.currentTab.id,
      app: this.currentApp
    };
    this.store.dispatch(new appActions.ChangeTabIconAction(webEvent));
  }

  onUrlChanged(url: string): void {
    const webEvent: IWebEvent = {
      eventValue: url,
      eventName: 'urlchanged',
      tabId: this.currentTab.id,
      app: this.currentApp
    };
    this.store.dispatch(new appActions.ChangeTabUrlAction(webEvent));
  }

  onDomReady(): void {
    const webEvent: IWebEvent = {
      eventValue: null,
      eventName: 'domready',
      tabId: this.currentTab.id,
      app: this.currentApp
    };
    this.store.dispatch(new appActions.DomReadyAction(webEvent));
  }

  onClicked(event: MouseEvent): void {
    console.log('Clicked:', event);
  }

  onContextMenu(event: MouseEvent) {
    // Handle context menu
  }

  doSearch(event: { url: string }) {
    if (!event || !event.url) return;
    
    // Create a new tab with the search URL
    const newTab: ITab = {
      id: Date.now(), // Generate a unique ID
      appId: 0, // This will be set by the reducer
      title: '',  // This will be updated when the page loads
      url: event.url,
      hostName: new URL(event.url).hostname,
      icon: ''  // This will be updated when the page loads
    };

    // Dispatch action to create and navigate to new tab
    this.store.dispatch(new appActions.AddTabAction(newTab));
  }
}
