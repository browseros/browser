// Angular 2
import {
  enableDebugTools,
  disableDebugTools
} from '@angular/platform-browser';
import {
  ApplicationRef,
  enableProdMode,
  NgModuleRef
} from '@angular/core';
import { environment } from '../environments/environment';

// Environment Providers
let PROVIDERS: any[] = [
  // common env directives
];

// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
let _decorateModuleRef = (modRef: NgModuleRef<any>): NgModuleRef<any> => modRef;

if (environment.production) {
  enableProdMode();
  console.log('[Environment] Production mode enabled');

  // Production
  _decorateModuleRef = (modRef: NgModuleRef<any>) => {
    console.log('[Environment] Production module decoration');
    return modRef;
  };

  PROVIDERS = [
    ...PROVIDERS,
    // custom providers in production
  ];

} else {
  console.log('[Environment] Development mode enabled');

  // Development
  _decorateModuleRef = (modRef: NgModuleRef<any>) => {
    console.log('[Environment] Development module decoration');
    try {
      const appRef = modRef.injector.get(ApplicationRef);
      const cmpRef = appRef.components[0];
      if (cmpRef) {
        enableDebugTools(cmpRef);
        console.log('[Environment] Debug tools enabled for root component');
      } else {
        console.warn('[Environment] Could not find root component to enable debug tools');
      }
    } catch (err) {
      console.error('[Environment] Error enabling debug tools:', err);
    }
    return modRef;
  };

  PROVIDERS = [
    ...PROVIDERS,
    // custom providers in development
  ];
}

export const decorateModuleRef = _decorateModuleRef;

export const ENV_PROVIDERS = [
  ...PROVIDERS
];
