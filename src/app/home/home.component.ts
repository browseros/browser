import { Component, OnInit, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  eventCurrentApp: Observable<IApp | null> = this.store.select(fromRoot.getEventCurrentApp);
  eventCurrentTab: Observable<ITab | null> = this.store.select(fromRoot.getEventCurrentTab);
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

  onNextClick(app: IApp) {
    this.store.dispatch(new appActions.DoNextAction(app));
  }

  onBackClick(app: IApp) {
    this.store.dispatch(new appActions.DoBackAction(app));
  }

  onGotoTab(tab: ITab) {
    this.store.dispatch(new appActions.GotoTabAction(tab));
  }

  doSearchReplacing(event: any) {
    // Handle search replacing
  }

  onTabContextMenu(event: any) {
    // Handle tab context menu
  }

  onReloadClick(event: any) {
    this.store.dispatch(new appActions.DoReloadAction({ id: 0, title: '', url: '', icon: '' }));
  }

  onCloseTab(tab: ITab) {
    this.store.dispatch(new appActions.CloseTabAction(tab));
  }

  onNewUrl(event: IWebEvent) {
    this.store.dispatch(new appActions.ChangeTabUrlAction(event));
  }

  onTitleChanged(event: IWebEvent) {
    this.store.dispatch(new appActions.ChangeTabTitleAction(event));
  }

  onIconChanged(event: IWebEvent) {
    this.store.dispatch(new appActions.ChangeTabIconAction(event));
  }

  onUrlChanged(event: IWebEvent) {
    this.store.dispatch(new appActions.ChangeTabUrlAction(event));
  }

  onDomReady(event: IWebEvent) {
    this.store.dispatch(new appActions.DomReadyAction(event));
  }

  onClicked(event: any) {
    // Handle click event
  }

  onContextMenu(event: any) {
    // Handle context menu
  }

  doSearch(event: any) {
    // Handle search
  }
}
