import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { WebviewDirective } from '../../electron/webview.directive';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Barrel` component loaded asynchronously');

@Component({
  selector: 'barrel',
  templateUrl: './barrel.component.html',
})
export class BarrelComponent implements OnInit, AfterViewInit {

  public ngOnInit() {
    console.log('hello `Barrel` component');
  }

  // tslint:disable-next-line:no-empty
  public ngAfterViewInit() {}

  private navigate(url: string) {
    const webview = document.querySelector('webview');
    webview['loadURL'](url);
  }

}
