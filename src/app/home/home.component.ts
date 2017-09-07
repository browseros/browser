import { getCurrentApp } from './../reducers/app';
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
  private currentApp: Observable<IApp>;
  private currentInputValue = '';

  @ViewChild('appSearch') private appSearch: AppSearchComponent;

  // TypeScript public modifiers
  constructor(
    public title: Title,
    public store: Store<fromRoot.State>
  ) { }

  public ngOnInit() {
    console.log('hello `Home` component');
    this.store.dispatch(new appActions.AddTabAction(
      {
        hostName: 'vnexpress.net',
        title: 'vnexpress.net',
        url: 'http://vnexpress.net'
      }));
    this.store.dispatch(new appActions.AddTabAction(
      {
        hostName: 'dantri.com',
        title: 'dantri.com',
        url: 'http://dantri.com'
      }));
    this.apps = this.store.select(fromRoot.getApps);
    this.currentApp = this.store.select(fromRoot.getCurrentApp);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.localState.value = '';
  }

  public showDialog() {
    ipcRenderer.send('show-dialog');
  }

  private onEntered(url: string) {
    /* let tab = this.tabs.find(t => t.id === this.currentTabId);
    const webview = document.getElementById('webview-' + this.currentTabId);
    webview['loadURL'](url);
    this.currentInputValue = ''; */
  }

  private showTab(tab: ITab) {
    // this.currentTabId = tab.id;
  }

  private addUrl() {
    this.appSearch.show();
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
    /* let currentTabId = this.tabs.length + 1;
    this.appSearch.hide();

    let tab = { title: this.extractHostname(app), url: app, id: currentTabId, hostName: '' };
    this.tabs.push(tab);
    this.currentTabId = currentTabId;
    setTimeout(() => {
      let webview = document.getElementById('webview-' + currentTabId);
      webview.addEventListener('page-title-updated', (result) => {
        // console.log(result);
        // tab.title = result['title'];
      });
    }, 200); */
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

  private closeTab(tab: ITab) {
    /* let id = this.tabs.findIndex(i => i.id === tab.id);
    if (id >= 0) {
      this.tabs.splice(id, 1);
      let newTab = this.tabs[id];
      if (newTab) {
        this.currentTabId = newTab.id;
      } else if (id === this.tabs.length) {
        newTab = this.tabs[this.tabs.length - 1];
        if (newTab) {
          this.currentTabId = newTab.id;
        } else {
          this.currentTabId = -1;
        }
      } else {
        this.currentTabId = -1;
      }
    } */
  }
}
