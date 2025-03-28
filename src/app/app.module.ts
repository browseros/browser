import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
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
import { NoContentComponent } from './no-content/no-content.component';
import { environment } from '../environments/environment';
import { ENV_PROVIDERS } from './environment';
import { HomeModule } from './home/home.module';
import { reducers } from './reducers';
import { AppEffects } from './effects/app.effects';
import { HistoryEffects } from './effects/history.effects';
import { GoogleSuggestionService } from './services/google-suggestion.service';

@NgModule({
  declarations: [
    AppComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AppEffects, HistoryEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: process.env['NODE_ENV'] === 'production',
      autoPause: true,
      trace: false,
      traceLimit: 75,
    })
  ],
  providers: [
    ENV_PROVIDERS,
    GoogleSuggestionService
  ],
  bootstrap: [AppComponent]
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
