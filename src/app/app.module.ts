import { NgModule } from '@angular/core';
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
import { environment } from '../environments/environment';
import { ENV_PROVIDERS } from './environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [
    ENV_PROVIDERS
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
