import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { ipcRenderer } from 'electron';

import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { HomeState } from './home.reducer';
import { HomeActions } from './home.actions';
import { Title } from './title';
import { XLargeDirective } from './x-large';
import { ITab } from '../models/tab.model';
import { AppSearchComponent } from './app-search/app-search.component';

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

  private tabs: ITab[] = [];
  private currentTabId = 0;
  private currentInputValue = '';

  @ViewChild('appSearch') private appSearch: AppSearchComponent;

  // TypeScript public modifiers
  constructor(
    private store: Store<AppState>,
    private homeActions: HomeActions,
    public title: Title
  ) { }

  public ngOnInit() {
    console.log('hello `Home` component');
    this.doSearch('http://vnexpress.net');
    this.doSearch('http://linkhay.com');
    this.doSearch('http://dantri.com');
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.store.dispatch(this.homeActions.setValue(value));
    this.localState.value = '';
  }

  public showDialog() {
    ipcRenderer.send('show-dialog');
  }

  private onEntered(url: string) {
    let tab = this.tabs.find(t => t.id === this.currentTabId);
    const webview = document.getElementById('webview-' + this.currentTabId);
    webview['loadURL'](url);
    this.currentInputValue = '';
  }

  private showTab(tab: ITab) {
    this.currentTabId = tab.id;
  }

  private addUrl() {
    this.appSearch.show();
  }

  private doSearch(app: string) {
    let currentTabId = this.tabs.length + 1;
    this.appSearch.hide();

    let tab = { title: this.extractHostname(app), url: app, id: currentTabId };
    this.tabs.push(tab);
    this.currentTabId = currentTabId;
    setTimeout(() => {
      let webview = document.getElementById('webview-' + currentTabId);
      webview.addEventListener('page-title-updated', (result) => {
        // console.log(result);
        // tab.title = result['title'];
      });
    }, 200);
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
    let id = this.tabs.findIndex(i => i.id === tab.id);
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
    }
  }
}
