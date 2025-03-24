/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ApplicationRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { shell } from 'electron';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Browser OS</a>
      </div>
    </nav>
    <div class="container mt-4">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'Browser OS';

  constructor(private appRef: ApplicationRef) {
    console.log('[AppComponent] Constructor called at:', new Date().toISOString());
    console.log('[AppComponent] Running in:', process.env['NODE_ENV'] || 'development');
    
    // Log application reference state
    console.log('[AppComponent] ApplicationRef state:', {
      isStable: this.appRef.isStable
    });
  }

  ngOnInit(): void {
    console.log('[AppComponent] ngOnInit called at:', new Date().toISOString());
    
    // Log environment details
    console.log('[AppComponent] Environment check:');
    console.log('- Window object:', {
      available: typeof window !== 'undefined',
      location: window?.location?.href,
      innerWidth: window?.innerWidth,
      innerHeight: window?.innerHeight
    });
    console.log('- Document object:', {
      available: typeof document !== 'undefined',
      readyState: document?.readyState,
      body: !!document?.body,
      head: !!document?.head
    });
    console.log('- Process object:', {
      type: process?.type,
      versions: process?.versions,
      platform: process?.platform,
      arch: process?.arch
    });
    
    // Check Electron integration
    const electronAvailable = !!(window as any).electron;
    console.log('[AppComponent] Electron integration:', electronAvailable);
    
    // Monitor DOM ready state
    document.addEventListener('DOMContentLoaded', () => {
      console.log('[AppComponent] DOMContentLoaded fired at:', new Date().toISOString());
      console.log('[AppComponent] Document structure:', {
        body: !!document.body,
        head: !!document.head,
        appRoot: !!document.querySelector('app-root')
      });
    });

    // Monitor full page load
    window.addEventListener('load', () => {
      console.log('[AppComponent] Window load complete at:', new Date().toISOString());
      console.log('[AppComponent] Window dimensions:', {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight
      });
    });

    // Error handlers
    window.onerror = (msg, url, line, col, error) => {
      console.error('[AppComponent] Global error:', { msg, url, line, col, error });
      return false;
    };

    window.onunhandledrejection = (event) => {
      console.error('[AppComponent] Unhandled rejection:', event.reason);
    };
  }

  ngAfterViewInit(): void {
    console.log('[AppComponent] ngAfterViewInit called at:', new Date().toISOString());
    console.log('[AppComponent] View state:', {
      appRoot: !!document.querySelector('app-root'),
      routerOutlet: !!document.querySelector('router-outlet'),
      navbar: !!document.querySelector('nav')
    });
  }

  ngOnDestroy(): void {
    console.log('[AppComponent] ngOnDestroy called at:', new Date().toISOString());
  }

  public openURL(url: string): void {
    console.log('[AppComponent] Opening external URL:', url);
    shell.openExternal(url);
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
