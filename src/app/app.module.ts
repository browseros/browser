import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ApplicationRef, NgModuleRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';
import { firstValueFrom } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoContentComponent } from './no-content/no-content.component';
import { environment } from '../environments/environment';
import { ENV_PROVIDERS } from './environment';
import { HomeModule } from './home/home.module';
import { reducers } from './reducers';
import { AppEffects } from './effects/app.effects';
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
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AppEffects]),
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
  constructor(
    public appRef: ApplicationRef,
    private appState: Store<any>,
    private store: Store<any>
  ) {}

  hmrOnInit(store: any) {
    if (!store || !store.state) return;
    console.log('HMR Store', store);
    this.appRef.tick();
    delete store.state;
  }

  hmrOnDestroy(store: any) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    this.store = store;
    firstValueFrom(this.appState).then((state: any) => {
      store.state = state;
    });
    store.disposeOldHosts = createNewHosts(cmpLocation);
    store.restoreInputValues = () => {
      for (const prop in store.oldInputValues) {
        const hostCmp = this.appRef.components.find(cmp => cmp.location.nativeElement === store.disposeOldHosts[prop]);
        if (hostCmp) {
          hostCmp.instance[prop] = store.oldInputValues[prop];
        }
      }
    };
    setTimeout(store.disposeOldHosts);
  }

  hmrAfterDestroy(store: any) {
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
