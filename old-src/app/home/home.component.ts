import { StateHelper } from './../reducers/helper';
import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { ipcRenderer } from 'electron';

import { Store } from '@ngrx/store';
import { Title } from './title';
import { XLargeDirective } from './x-large';
import { ITab } from '../models/tab.model';
import { AppSearchComponent } from './app-search/app-search.component';

import * as fromRoot from '../reducers';
import * as appActions from '../actions/app.actions';
import { Observable } from 'rxjs/Observable';
import { IApp } from '../models/app.model';
import { IWebEvent } from '../models/web-event.model';
import { IHistoryItem } from '../models/history-item.model';
const { remote } = require('electron');
const { Menu, MenuItem, clipboard } = remote;

@Component({
  selector: 'home',
  providers: [
    Title
  ],
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  private eventApps: Observable<IApp[]>;
  private app2Hosts: Observable<{ [id: number]: string }>;
  private eventAppIds: Observable<number[]>;
  private eventTabs: Observable<ITab[]>;
  private tabIds: Observable<number[]>;
  private clonedApps: IApp[] = [];
  private eventCurrentApp: Observable<IApp>;
  private eventCurrentTab: Observable<ITab>;
  private histories: Observable<IHistoryItem[]>;
  private topApps: Observable<IHistoryItem[]>;
  private suggestions: Observable<any[]>;
  private currentInputValue = '';
  private isShowingContextMenu = false;
  private contextTop: string;
  private contextLeft: string;
  private screenWidth: number;
  private screenHeight: number;
  private superApp: Electron.App;

  @ViewChild('appSearch') private appSearch: AppSearchComponent;

  constructor(
    public title: Title,
    public store: Store<fromRoot.State>
  ) { }

  public ngOnInit() {
    console.log('hello `Home` component');
    this.eventApps = this.store.select(fromRoot.getEventApps);
    this.app2Hosts = this.store.select(fromRoot.getApp2Hosts);
    this.eventTabs = this.store.select(fromRoot.getEventTabs);
    this.tabIds = this.store.select(fromRoot.getTabIds);
    this.eventCurrentApp = this.store.select(fromRoot.getEventCurrentApp);
    this.eventCurrentTab = this.store.select(fromRoot.getEventCurrentTab);
    this.histories = this.store.select(fromRoot.getHistoryWithWeights);
    this.topApps = this.store.select(fromRoot.getTopApps);
    this.suggestions = this.store.select(fromRoot.getSuggestions);
    this.screenWidth = $(window).width();
    this.screenHeight = $(window).height();
    let self = this;
    window.addEventListener('resize', (e) => {
      setTimeout(() => {
        self.screenWidth = $(window).width();
        self.screenHeight = $(window).height();
      }, 200);
    });
  }

  public showDialog() {
    ipcRenderer.send('show-dialog');
  }

  private gotoApp(myApp: IApp) {
    this.store.dispatch(new appActions.GotoAppAction(myApp));
  }

  private doSearch(myApp: string) {
    let link = StateHelper.prepareAppLink(myApp);
    let hostName = StateHelper.extractHostname(link);
    this.store.dispatch(new appActions.AddTabAction(
      {
        id: 0,
        appId: 0,
        hostName,
        title: '',
        url: link
      }));
    this.appSearch.hide();
  }

  private doSearchReplacing(webEvent: IWebEvent) {
    let appSearchValue = webEvent.eventValue;
    let link = StateHelper.prepareAppLink(appSearchValue);
    webEvent.eventValue = link;
    this.store.dispatch(new appActions.DoChangeUrlAction(webEvent));
    this.appSearch.hide();
  }

  private closeApp(myApp: IApp) {
    this.store.dispatch(new appActions.CloseAppAction(myApp));
  }

  private onTitleChanged($event: IWebEvent) {
    this.store.dispatch(new appActions.ChangeTabTitleAction($event));
  }

  private onIconChanged($event: IWebEvent) {
    this.store.dispatch(new appActions.ChangeTabIconAction($event));
  }

  private onNextClick($event: IApp) {
    this.store.dispatch(new appActions.DoNextAction($event));
  }

  private onBackClick($event: IApp) {
    this.store.dispatch(new appActions.DoBackAction($event));
  }

  private onReloadClick($event: IApp) {
    this.store.dispatch(new appActions.DoReloadAction($event));
  }

  private onGotoTab($event: ITab) {
    this.store.dispatch(new appActions.GotoTabAction($event));
  }

  private onCloseTab($event: ITab) {
    this.store.dispatch(new appActions.CloseTabAction($event));
  }

  private onNewUrl($event: IWebEvent) {
    let hostName = StateHelper.extractHostname($event.eventValue);
    this.store.dispatch(new appActions.AddTabAction(
      {
        id: 0,
        appId: 0,
        hostName,
        title: '',
        url: $event.eventValue
      }));
  }

  private onUrlChanged($event: IWebEvent) {
    this.store.dispatch(new appActions.ChangeTabUrlAction($event));
  }

  private onDomReady($event: IWebEvent) {
    this.store.dispatch(new appActions.DomReadyAction($event));
  }

  private onContextMenu(params) {
    console.log(params);
    let self = this;
    const menu = new Menu();
    if (params.linkURL) {
      menu.append(new MenuItem(
        {
          label: 'Open link in new tab', click() {
            let hostName = StateHelper.extractHostname(params.linkURL);
            self.store.dispatch(new appActions.AddTabAction(
              {
                id: 0,
                appId: 0,
                hostName,
                title: '',
                url: params.linkURL
              }));
          }
        }
      ));
      menu.append(new MenuItem(
        {
          label: 'Copy link address', click() {
            clipboard.writeText(params.linkURL);
          }
        }
      ));
    }
    if (params.selectionText) {
      menu.append(new MenuItem(
        {
          label: 'Copy', click() {
            clipboard.writeText(params.selectionText);
          }
        }
      ));
    }
    if (params.mediaType === 'image' && params.srcURL) {
      menu.append(new MenuItem(
        {
          label: 'Download image to "Downloads"', click() {
            let downloadsFolder = remote.app.getPath('downloads');
            if (!downloadsFolder) {
              return;
            }
            self.saveUrlToFolder(params.srcURL, downloadsFolder);
          }
        }
      ));
      menu.append(new MenuItem(
        {
          label: 'Save image to...', click() {
            let downloadsFolder = remote.app.getPath('downloads');
            let win = remote.getCurrentWindow();
            let options = {
              // See place holder 1 in above image
              properties: ['openDirectory']
             };
            let paths = remote.dialog.showOpenDialog(win, options);
            if (paths && paths.length) {
              let path = paths[0];
              console.log(path);
              self.saveUrlToFolder(params.srcURL, path);
            }
            console.log(downloadsFolder);
          }
        }
      ));
    }
    if (params.mediaType === 'video' && params.srcURL) {
      menu.append(new MenuItem(
        {
          label: 'Download video to "Downloads"', click() {
            let downloadsFolder = remote.app.getPath('downloads');
            if (!downloadsFolder) {
              return;
            }
            self.saveUrlToFolder(params.srcURL, downloadsFolder);
          }
        }
      ));
      menu.append(new MenuItem(
        {
          label: 'Save video to...', click() {
            let downloadsFolder = remote.app.getPath('downloads');
            let win = remote.getCurrentWindow();
            let options = {
              // See place holder 1 in above image
              properties: ['openDirectory']
             };
            let paths = remote.dialog.showOpenDialog(win, options);
            if (paths && paths.length) {
              let path = paths[0];
              self.saveUrlToFolder(params.srcURL, path);
            }
          }
        }
      ));
    }
    menu.popup(remote.getCurrentWindow());
  }

  private saveUrlToFolder(link, folder) {
    let http = require('http');
    let https = require('https');
    let url = new URL(link);
    let requestMethod = url.protocol === 'https:' ? https : http;
    console.log(url);
    let fs   = require('fs');
    let filename = link.substring(link.lastIndexOf('/') + 1);
    let file = fs.createWriteStream(folder + '/' + filename);
    let request = requestMethod.get(link, function(response) {
      response.pipe(file);
    });
  }

  private onTabContextMenu(tab: ITab) {
    let self = this;
    const menu = new Menu();
    menu.append(new MenuItem(
      {
        label: 'Close tab', click() {
          self.store.dispatch(new appActions.CloseTabAction(tab));
        }
      }
    ));
    menu.append(new MenuItem(
      {
        label: 'Close other tabs of this app', click() {
          self.store.dispatch(new appActions.CloseOtherTabsAction(tab));
        }
      }
    ));
    menu.append(new MenuItem(
      {
        label: 'Close other tabs of all apps', click() {
          self.store.dispatch(new appActions.CloseOtherTabsAllAppsAction(tab));
        }
      }
    ));
    menu.popup(remote.getCurrentWindow());
  }

  private onAppContextMenu(myApp: IApp) {
    let self = this;
    const menu = new Menu();
    menu.append(new MenuItem(
      {
        label: 'Close app', click() {
          self.store.dispatch(new appActions.CloseAppAction(myApp));
        }
      }
    ));
    menu.append(new MenuItem(
      {
        label: 'Close other apps', click() {
          self.store.dispatch(new appActions.CloseOtherAppsAction(myApp));
        }
      }
    ));
    menu.popup(remote.getCurrentWindow());
  }

  private onBtnAppAction(event: any): void {
    let self = this;
    const menu = new Menu();
    menu.append(new MenuItem(
      {
        label: 'Close window', click() {
          remote.BrowserWindow.getFocusedWindow().close();
        }
      }
    ));
    menu.append(new MenuItem(
      {
        label: 'Minimize', click() {
          remote.BrowserWindow.getFocusedWindow().minimize();
        }
      }
    ));
    menu.append(new MenuItem(
      {
        label: 'Maximize', click() {
          remote.BrowserWindow.getFocusedWindow().maximize();
        }
      }
    ));
    menu.popup(remote.getCurrentWindow());
  }

  private onAppBarDoubleClick($event: any) {
    remote.BrowserWindow.getFocusedWindow().maximize();
  }

  private onClicked($event: any) {
    $('#recentDropdown').removeClass('in open');
  }
}
