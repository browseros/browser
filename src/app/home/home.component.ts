import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import type { IApp } from '../models/app.model';
import type { ITab } from '../models/tab.model';
import type { IHistoryItem } from '../models/history-item.model';
import type { IWebEvent } from '../models/web-event.model';
import { Observable } from 'rxjs';
import * as appActions from '../actions/app.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public eventApps$: Observable<IApp[]>;
  public eventCurrentApp$: Observable<IApp>;
  public eventCurrentTab$: Observable<ITab>;
  public eventTabs$: Observable<ITab[]>;
  public histories$: Observable<IHistoryItem[]>;
  public suggestions$: Observable<any[]>;
  public topApps$: Observable<IApp[]>;
  public tabIds$: Observable<number[]>;
  public app2Hosts$: Observable<{ [id: number]: string }>;
  public currentApp: IApp = {} as IApp;

  screenWidth: number = window.innerWidth;
  screenHeight: number = window.innerHeight;

  constructor(private store: Store<fromRoot.State>) {
    this.eventApps$ = this.store.select(fromRoot.getEventApps);
    this.eventCurrentApp$ = this.store.select(fromRoot.getEventCurrentApp);
    this.eventCurrentTab$ = this.store.select(fromRoot.getEventCurrentTab);
    this.eventTabs$ = this.store.select(fromRoot.getEventTabs);
    this.histories$ = this.store.select(fromRoot.getHistories);
    this.suggestions$ = this.store.select(fromRoot.getSuggestions);
    this.topApps$ = this.store.select(fromRoot.getTopApps);
    this.tabIds$ = this.store.select(fromRoot.getTabIds);
    this.app2Hosts$ = this.store.select(fromRoot.getApp2Hosts);
    this.eventCurrentApp$.subscribe(app => this.currentApp = app);
  }

  ngOnInit(): void {}

  public gotoApp(app: IApp): void {
    this.store.dispatch(new appActions.GotoAppAction(app));
  }

  public closeApp(app: IApp): void {
    this.store.dispatch(new appActions.CloseAppAction(app));
  }

  public onNextClick(): void {
    this.store.dispatch(new appActions.DoNextAction(this.currentApp));
  }

  public onBackClick(): void {
    this.store.dispatch(new appActions.DoBackAction(this.currentApp));
  }

  public onGotoTab(tab: ITab): void {
    this.store.dispatch(new appActions.GotoTabAction(tab));
  }

  public onNewUrl(event: IWebEvent): void {
    this.store.dispatch(new appActions.ChangeTabUrlAction(event));
  }

  public onTabContextMenu(event: any): void {
    console.log('Tab context menu:', event);
  }

  onAppContextMenu(event: any) {
    console.log('App context menu:', event);
  }

  onBtnAppAction(event: any) {
    console.log('App action:', event);
  }

  onAppBarDoubleClick(event: any) {
    console.log('App bar double click:', event);
  }

  onReloadClick(event: any) {
    console.log('Reload click:', event);
  }

  onCloseTab(event: any) {
    console.log('Close tab:', event);
  }

  onTitleChanged(event: any) {
    console.log('Title changed:', event);
  }

  onIconChanged(event: any) {
    console.log('Icon changed:', event);
  }

  onUrlChanged(event: any) {
    console.log('URL changed:', event);
  }

  onDomReady(event: any) {
    console.log('DOM ready:', event);
  }

  onClicked(event: any) {
    console.log('Clicked:', event);
  }

  onContextMenu(event: any) {
    console.log('Context menu:', event);
  }

  doSearch(event: any) {
    console.log('Search:', event);
  }

  doSearchReplacing(event: any) {
    console.log('Search replacing:', event);
  }
}
