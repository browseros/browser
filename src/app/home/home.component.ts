import { Component } from '@angular/core';
import { IApp } from '../models/app.model';
import { ITab } from '../models/tab.model';
import { IHistoryItem } from '../models/history-item.model';

@Component({
  selector: 'app-home',
  template: `
    <app-nav
      [currentApp]="currentApp || defaultApp"
      [tabs]="tabs"
      [currentTab]="currentTab || defaultTab"
      [histories]="histories"
      (onNextClick)="handleNext()"
      (onBackClick)="handleBack()"
      (onReloadClick)="handleReload()"
      (onGotoTab)="handleGotoTab($event)"
      (onCloseTab)="handleCloseTab($event)"
      (onContextMenu)="handleContextMenu($event)">
    </app-nav>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-12">
          <h1>Welcome to Browser OS</h1>
          <p>This is a desktop application that allows websites to run native functions of the operating system.</p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class HomeComponent {
  currentApp: IApp | null = null;
  tabs: ITab[] = [];
  currentTab: ITab | null = null;
  histories: IHistoryItem[] = [];

  // Default values for when currentApp or currentTab are null
  public defaultApp: IApp = {
    id: 0,
    title: 'Default App',
    url: '',
    icon: ''
  };

  public defaultTab: ITab = {
    id: 0,
    appId: 0,
    title: 'New Tab',
    url: '',
    hostName: '',
    icon: ''
  };

  constructor() {
    console.log('[HomeComponent] Initialized with default values');
  }

  handleNext() {
    console.log('Next clicked');
  }

  handleBack() {
    console.log('Back clicked');
  }

  handleReload() {
    console.log('Reload clicked');
  }

  handleGotoTab(tab: ITab) {
    console.log('Go to tab:', tab);
  }

  handleCloseTab(tab: ITab) {
    console.log('Close tab:', tab);
  }

  handleContextMenu(tab: ITab) {
    console.log('Context menu for tab:', tab);
  }
}
