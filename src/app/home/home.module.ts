import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppWebviewComponent } from './app-webview/app-webview.component';
import { WebviewComponent } from './app-webview/web-view.component';
import { AppSearchComponent } from './app-search/app-search.component';
import { AIAssistantComponent } from '../components/ai-assistant/ai-assistant.component';
import { ApiKeysComponent } from '../components/api-keys/api-keys.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppBarComponent,
    AppNavComponent,
    AppWebviewComponent,
    WebviewComponent,
    AppSearchComponent,
    AIAssistantComponent,
    ApiKeysComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    HomeComponent,
    AppBarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class HomeModule { } 