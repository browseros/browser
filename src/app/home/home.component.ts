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
    map(app => app || { id: 0, title: '', url: '', icon: '' } as IApp)
  );
  eventCurrentTab: Observable<ITab> = this.store.select(fromRoot.getEventCurrentTab).pipe(
    map(tab => tab || { id: 0, appId: 0, title: '', url: '', hostName: '', icon: '' } as ITab)
  );
  app2Hosts: Observable<{ [id: number]: string }> = this.store.select(fromRoot.getApp2Hosts);
  tabIds: Observable<number[]> = this.store.select(fromRoot.getTabIds);
  histories: Observable<IHistoryItem[]> = this.store.select(fromRoot.getHistories);
  topApps: Observable<IHistoryItem[]> = this.store.select(fromRoot.getTopApps);
  screenWidth: number = window.innerWidth;
  screenHeight: number = window.innerHeight;

  constructor(
    private router: Router,
    private store: Store<fromRoot.State>
  ) {
    console.log('[HomeComponent] Constructor called');
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

  onNextClick(event: any): void {
    this.store.dispatch(new appActions.DoNextAction({ id: 0, title: '', url: '', icon: '' }));
  }

  onBackClick(event: any): void {
    this.store.dispatch(new appActions.DoBackAction({ id: 0, title: '', url: '', icon: '' }));
  }

  onGotoTab(event: any): void {
    this.store.dispatch(new appActions.GotoTabAction(event));
  }

  doSearchReplacing(event: any) {
    // Handle search replacing
  }

  onTabContextMenu(event: any): void {
    console.log('Tab context menu:', event);
  }

  onReloadClick(event: any): void {
    this.store.dispatch(new appActions.DoReloadAction({ id: 0, title: '', url: '', icon: '' }));
  }

  onCloseTab(event: any): void {
    this.store.dispatch(new appActions.CloseTabAction(event));
  }

  onNewUrl(event: any): void {
    this.store.dispatch(new appActions.ChangeTabUrlAction(event));
  }

  onTitleChanged(event: any): void {
    this.store.dispatch(new appActions.ChangeTabTitleAction(event));
  }

  onIconChanged(event: any): void {
    this.store.dispatch(new appActions.ChangeTabIconAction(event));
  }

  onUrlChanged(event: any): void {
    this.store.dispatch(new appActions.ChangeTabUrlAction(event));
  }

  onDomReady(event: any): void {
    this.store.dispatch(new appActions.DomReadyAction(event));
  }

  onClicked(event: any): void {
    console.log('Clicked:', event);
  }

  onContextMenu(event: any) {
    // Handle context menu
  }

  doSearch(event: any) {
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
