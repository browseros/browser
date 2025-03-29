/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  template: `
    <div class="app-container" style="padding: 0; margin: 0;">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .app-container {
      padding: 20px;
    }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  currentRoute: string = '';
  routerState: string = '';

  constructor(private router: Router) {
    console.log('[AppComponent] Constructor called');
  }

  ngOnInit() {
    console.log('[AppComponent] ngOnInit called');
    this.router.events.subscribe(event => {
      console.log('[AppComponent] Router event:', event);
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.routerState = event.urlAfterRedirects;
        console.log('[AppComponent] Navigation completed:', {
          url: this.currentRoute,
          urlAfterRedirects: this.routerState
        });
      }
    });
  }

  ngOnDestroy() {
    console.log('[AppComponent] ngOnDestroy called');
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
