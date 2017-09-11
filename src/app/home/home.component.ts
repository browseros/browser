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
  private currentApp: Observable<IApp>;
  private eventCurrentApp: Observable<IApp>;
  private currentInputValue = '';

  @ViewChild('appSearch') private appSearch: AppSearchComponent;

  // TypeScript public modifiers
  constructor(
    public title: Title,
    public store: Store<fromRoot.State>
  ) { }

  public ngOnInit() {
    console.log('hello `Home` component');
    this.apps = this.store.select(fromRoot.getApps);
    this.currentApp = this.store.select(fromRoot.getCurrentApp);
    this.eventApps = this.store.select(fromRoot.getEventApps);
    this.eventCurrentApp = this.store.select(fromRoot.getEventCurrentApp);
    this.apps.subscribe((newApps) => {
      this.clonedApps = JSON.parse(JSON.stringify(newApps));
    });
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

  private onNextClick($event: IApp) {
    this.store.dispatch(new eventActions.DoNextAction($event));
  }

  private onBackClick($event: IApp) {
    this.store.dispatch(new eventActions.DoBackAction($event));
  }
}
