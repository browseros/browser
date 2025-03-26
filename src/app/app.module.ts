import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ApplicationRef, NgModuleRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './no-content/no-content.component';
import { AppBarComponent } from './home/app-bar/app-bar.component';
import { AppSearchComponent } from './home/app-search/app-search.component';
import { AppNavComponent } from './home/app-nav/app-nav.component';
import { AppWebviewComponent } from './home/app-webview/app-webview.component';
import { environment } from '../environments/environment';
import { ENV_PROVIDERS } from './environment';

import { reducer } from './reducers';
import { Actions } from './actions/app.actions';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoContentComponent,
    AppBarComponent,
    AppSearchComponent,
    AppNavComponent,
    AppWebviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    StoreModule.forRoot({ state: reducer as any }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      autoPause: true
    })
  ],
  providers: [
    ENV_PROVIDERS
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {
    console.log('[AppModule] Initialized');
  }

  hmrOnInit(store: any) {
    console.log('[HMR] OnInit');
  }

  hmrOnDestroy(store: any) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    store.disposeOldHosts = createNewHosts(cmpLocation);
    console.log('[HMR] OnDestroy');
  }

  hmrAfterDestroy(store: any) {
    store.disposeOldHosts();
    console.log('[HMR] AfterDestroy');
  }
}
