import { Component, OnInit, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IApp } from '../models/app.model';
import { ITab } from '../models/tab.model';
import { IWebEvent } from '../models/web-event.model';
import { IHistoryItem } from '../models/history-item.model';
import * as fromApp from '../reducers/app';
import * as appActions from '../actions/app.actions';
import { AppSearchComponent } from './app-search/app-search.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('appSearch') appSearch!: AppSearchComponent;

  eventApps: Observable<IApp[]> = this.store.select(fromApp.getApps);
  eventCurrentApp: Observable<IApp | null> = this.store.select(fromApp.getCurrentApp);
  eventCurrentTab: Observable<ITab | null> = this.store.select(fromApp.getCurrentTab);
  eventTabs: Observable<ITab[]> = this.store.select(fromApp.getTabs);
  histories: Observable<IHistoryItem[]> = this.store.select(fromApp.getHistories);
  suggestions: Observable<any[] | null> = this.store.select(fromApp.getSuggestions);
  topApps: Observable<IHistoryItem[]> = this.store.select(fromApp.getTopApps);
  tabIds: Observable<number[]> = this.store.select(fromApp.getTabIds);
  app2Hosts: Observable<{[key: number]: string}> = this.store.select(fromApp.getApp2Hosts);
  screenWidth: number = window.innerWidth;
  screenHeight: number = window.innerHeight;

  constructor(
    private router: Router,
    private store: Store<fromApp.State>
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

  gotoApp(appId: number) {
    const app = this.store.select(fromApp.getApps).subscribe(apps => {
      const targetApp = apps.find(a => a.id === appId);
      if (targetApp) {
        this.store.dispatch(new appActions.GotoAppAction(targetApp));
      }
    });
  }

  closeApp(appId: number) {
    const app = this.store.select(fromApp.getApps).subscribe(apps => {
      const targetApp = apps.find(a => a.id === appId);
      if (targetApp) {
        this.store.dispatch(new appActions.CloseAppAction(targetApp));
      }
    });
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

  onNextClick(event: any) {
    this.store.dispatch(new appActions.DoNextAction({ id: 0, title: '', url: '', icon: '' }));
  }

  onBackClick(event: any) {
    this.store.dispatch(new appActions.DoBackAction({ id: 0, title: '', url: '', icon: '' }));
  }

  onGotoTab(tabId: number) {
    const tab = this.store.select(fromApp.getTabs).subscribe(tabs => {
      const targetTab = tabs.find(t => t.id === tabId);
      if (targetTab) {
        this.store.dispatch(new appActions.GotoTabAction(targetTab));
      }
    });
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

  onCloseTab(tabId: number) {
    const tab = this.store.select(fromApp.getTabs).subscribe(tabs => {
      const targetTab = tabs.find(t => t.id === tabId);
      if (targetTab) {
        this.store.dispatch(new appActions.CloseTabAction(targetTab));
      }
    });
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
