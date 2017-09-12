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
import * as eventActions from '../actions/event.actions';
import { Observable } from 'rxjs/Observable';
import { IApp } from '../models/app.model';
import { IWebEvent } from '../models/web-event.model';
const { remote } = require('electron');
const { Menu, MenuItem, clipboard } = remote;

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./home.component.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  // Set our default values
  public localState = { value: '' };

  private apps: Observable<IApp[]>;
  private eventApps: Observable<IApp[]>;
  private clonedApps: IApp[] = [];
  private eventCurrentApp: Observable<IApp>;
  private currentInputValue = '';
  private isShowingContextMenu = false;
  private contextTop: string;
  private contextLeft: string;

  @ViewChild('appSearch') private appSearch: AppSearchComponent;

  // TypeScript public modifiers
  constructor(
    public title: Title,
    public store: Store<fromRoot.State>
  ) { }

  public ngOnInit() {
    console.log('hello `Home` component');
    this.apps = this.store.select(fromRoot.getApps);
    this.eventApps = this.store.select(fromRoot.getEventApps);
    this.eventCurrentApp = this.store.select(fromRoot.getEventCurrentApp);
    this.apps.subscribe((newApps) => {
      this.clonedApps = JSON.parse(JSON.stringify(newApps));
    });
    this.store.dispatch(new appActions.AddTabAction(
      {
        hostName: 'vnexpress.net',
        title: 'vnexpress.net',
        url: 'https://vnexpress.net'
      }));
  }

  public showDialog() {
    ipcRenderer.send('show-dialog');
  }

  private gotoApp(app: IApp) {
    this.store.dispatch(new appActions.GotoTabAction(app));
  }

  private doSearch(app: string) {
    let hostName = this.extractHostname(app);
    this.store.dispatch(new appActions.AddTabAction(
      {
        hostName,
        title: hostName,
        url: app
      }));
    this.appSearch.hide();
  }

  private extractHostname(url: string): string {
    let hostname;

    if (url.indexOf('://') > -1) {
      hostname = url.split('/')[2];
    } else {
      hostname = url.split('/')[0];
    }

    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];

    return hostname;
  }

  private closeApp(app: IApp) {
    this.store.dispatch(new appActions.CloseAppAction(app));
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

  private onGotoTab($event: ITab) {
    this.store.dispatch(new eventActions.GotoTabAction($event));
  }

  private onCloseTab($event: ITab) {
    this.store.dispatch(new eventActions.CloseTabAction($event));
  }

  private onNewUrl($event: IWebEvent) {
    let hostName = this.extractHostname($event.eventValue);
    this.store.dispatch(new appActions.AddTabAction(
      {
        hostName,
        title: hostName,
        url: $event.eventValue
      }));
  }

  private onContextMenu(params) {
    let self = this;
    const menu = new Menu();
    if (params.linkURL) {
      menu.append(new MenuItem(
        {
          label: 'Open link in new tab', click() {
            let hostName = self.extractHostname(params.linkURL);
            self.store.dispatch(new appActions.AddTabAction(
              {
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
}
