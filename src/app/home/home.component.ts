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
import * as eventActions from '../actions/event.actions';
import { Observable } from 'rxjs/Observable';
import { IApp } from '../models/app.model';
import { IWebEvent } from '../models/web-event.model';
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
  private currentInputValue = '';
  private isShowingContextMenu = false;
  private contextTop: string;
  private contextLeft: string;
  private screenWidth: number;
  private screenHeight: number;

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

  private gotoApp(app: IApp) {
    this.store.dispatch(new eventActions.GotoAppAction(app));
  }

  private doSearch(app: string) {
    let link = StateHelper.prepareAppLink(app);
    let hostName = StateHelper.extractHostname(link);
    this.store.dispatch(new eventActions.AddTabAction(
      {
        id: 0,
        appId: 0,
        hostName,
        title: hostName,
        url: link
      }));
    this.appSearch.hide();
  }

  private doSearchReplacing(webEvent: IWebEvent) {
    let appSearchValue = webEvent.eventValue;
    let link = StateHelper.prepareAppLink(appSearchValue);
    webEvent.eventValue = link;
    this.store.dispatch(new eventActions.DoChangeUrlAction(webEvent));
    this.appSearch.hide();
  }

  private closeApp(app: IApp) {
    this.store.dispatch(new eventActions.CloseAppAction(app));
  }

  private onTitleChanged($event: IWebEvent) {
    this.store.dispatch(new eventActions.ChangeTabTitleAction($event));
  }

  private onIconChanged($event: IWebEvent) {
    this.store.dispatch(new eventActions.ChangeTabIconAction($event));
  }

  private onNextClick($event: IApp) {
    this.store.dispatch(new eventActions.DoNextAction($event));
  }

  private onBackClick($event: IApp) {
    this.store.dispatch(new eventActions.DoBackAction($event));
  }

  private onReloadClick($event: IApp) {
    this.store.dispatch(new eventActions.DoReloadAction($event));
  }

  private onGotoTab($event: ITab) {
    this.store.dispatch(new eventActions.GotoTabAction($event));
  }

  private onCloseTab($event: ITab) {
    this.store.dispatch(new eventActions.CloseTabAction($event));
  }

  private onNewUrl($event: IWebEvent) {
    let hostName = StateHelper.extractHostname($event.eventValue);
    this.store.dispatch(new eventActions.AddTabAction(
      {
        id: 0,
        appId: 0,
        hostName,
        title: hostName,
        url: $event.eventValue
      }));
  }

  private onUrlChanged($event: IWebEvent) {
    this.store.dispatch(new eventActions.ChangeTabUrlAction($event));
  }

  private onContextMenu(params) {
    let self = this;
    const menu = new Menu();
    if (params.linkURL) {
      menu.append(new MenuItem(
        {
          label: 'Open link in new tab', click() {
            let hostName = StateHelper.extractHostname(params.linkURL);
            self.store.dispatch(new eventActions.AddTabAction(
              {
                id: 0,
                appId: 0,
                hostName,
                title: hostName,
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
    menu.popup(remote.getCurrentWindow());
  }

  private onTabContextMenu(tab: ITab) {
    let self = this;
    const menu = new Menu();
    menu.append(new MenuItem(
      {
        label: 'Close tab', click() {
          self.store.dispatch(new eventActions.CloseTabAction(tab));
        }
      }
    ));
    menu.append(new MenuItem(
      {
        label: 'Close other tabs of this app', click() {
          self.store.dispatch(new eventActions.CloseOtherTabsAction(tab));
        }
      }
    ));
    menu.append(new MenuItem(
      {
        label: 'Close other tabs of all apps', click() {
          self.store.dispatch(new eventActions.CloseOtherTabsAllAppsAction(tab));
        }
      }
    ));
    menu.popup(remote.getCurrentWindow());
  }

  private onAppContextMenu(app: IApp) {
    let self = this;
    const menu = new Menu();
    menu.append(new MenuItem(
      {
        label: 'Close app', click() {
          self.store.dispatch(new eventActions.CloseAppAction(app));
        }
      }
    ));
    menu.append(new MenuItem(
      {
        label: 'Close other apps', click() {
          self.store.dispatch(new eventActions.CloseOtherAppsAction(app));
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
}
