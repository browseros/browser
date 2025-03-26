import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppWebviewComponent } from './app-webview/app-webview.component';
import { AppSearchComponent } from './app-search/app-search.component';
import { WebViewComponent } from './web-view/web-view.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppBarComponent,
    AppNavComponent,
    AppWebviewComponent,
    AppSearchComponent,
    WebViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { } 