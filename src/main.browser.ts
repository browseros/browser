/*
 * Angular bootstraping
 */
/// <reference path="./custom-typings.d.ts" />
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { decorateModuleRef } from './app/environment';
/*
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
  console.log('[Angular Bootstrap] Starting bootstrap process');
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then((moduleRef) => {
      console.log('[Angular Bootstrap] Module bootstrapped successfully');
      return decorateModuleRef(moduleRef);
    })
    .catch((err) => {
      console.error('[Angular Bootstrap] Failed to bootstrap application:', err);
      throw err;
    });
}

// Bootstrap when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('[Angular Bootstrap] DOM is ready, starting bootstrap');
  main().catch(err => console.error(err));
});
