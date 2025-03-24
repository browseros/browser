# How Browser OS Works

This document describes the detailed architecture and initialization flow of the Browser OS application.

## Application Initialization Flow

### 1. Entry Points

The application has two main entry points:

#### Browser Entry Point
```typescript
// src/main.browser.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './app/environment';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    console.log('[Angular Bootstrap] Application bootstrapped successfully');
  })
  .catch(err => {
    console.error('[Angular Bootstrap] Failed to bootstrap application:', err);
  });
```

#### Electron Entry Point
```typescript
// src/main.electron.ts
import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as isDev from 'electron-is-dev';

// Main Electron process initialization
app.whenReady().then(() => {
  createWindow();
});
```

### 2. HTML Initialization

```html
<!-- src/index.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Browser OS</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Early load logging -->
  <script>
    console.log('[index.html] Document loading started');
    document.addEventListener('DOMContentLoaded', () => {
      console.log('[index.html] DOMContentLoaded fired');
      console.log('[index.html] app-root element present:', !!document.querySelector('app-root'));
    });
  </script>
</head>
<body>
  <app-root>
    <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);">
      Loading Browser OS...
    </div>
  </app-root>
  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### 3. Angular Application Structure

#### Root Module (AppModule)
```typescript
// src/app/app.module.ts
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppNavComponent,
    AppSearchComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

#### Root Component (AppComponent)
```typescript
// src/app/app.component.ts
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
  `
})
export class AppComponent implements OnInit {
  constructor(private appRef: ApplicationRef) {
    console.log('[AppComponent] Constructor called');
  }

  ngOnInit(): void {
    console.log('[AppComponent] Initialized');
    // Environment checks and initialization
  }
}
```

### 4. Electron Integration

#### Main Process (index.ts)
```typescript
// src/electron/index.ts
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
      devTools: true
    }
  });

  // Development mode setup
  if (isDev) {
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL('http://localhost:4200');
  } else {
    mainWindow.loadFile(path.join(__dirname, '../index.html'));
  }
}
```

### 5. State Management (Redux)

#### Store Configuration
```typescript
// src/app/reducers/index.ts
export const reducers = {
  app: appReducer,
  tabs: tabsReducer,
  history: historyReducer
};
```

#### Actions
```typescript
// src/app/actions/app.actions.ts
export const createTab = createAction('[App] Create Tab', props<{ url: string }>());
export const closeTab = createAction('[App] Close Tab', props<{ tabId: number }>());
```

### 6. Component Communication

1. **Parent-Child Communication**
   - Input/Output decorators
   - Event emitters
   - ViewChild/ContentChild

2. **Global State**
   - NgRx Store
   - Services
   - Event Bus

### 7. Development Tools Integration

```typescript
// src/electron/dev-extensions.ts
if (ENV === 'development') {
  const installExtension = require('electron-devtools-installer').default;
  const extensions = [
    { name: 'Redux DevTools', id: 'lmhkpmbekcpmknklioeibfkpmmfibljd' }
  ];
  // Install development tools
}
```

## Application Flow

1. **Initial Load**
   - Electron main process starts
   - BrowserWindow created
   - Angular application bootstrapped

2. **Angular Initialization**
   - AppModule loaded
   - AppComponent created
   - Router initialized
   - Store configured

3. **Component Initialization**
   - AppComponent mounted
   - Child components created
   - Services initialized

4. **State Management**
   - Initial state loaded
   - Effects registered
   - Actions dispatched

5. **User Interaction**
   - Event handlers
   - State updates
   - UI updates

## Development vs Production

### Development Mode
- Hot Module Replacement enabled
- DevTools available
- Source maps enabled
- Development extensions loaded

### Production Mode
- Optimized builds
- Minified code
- No DevTools
- Production optimizations

## Error Handling

1. **Global Error Handling**
   - Window error events
   - Unhandled promise rejections
   - Angular error handlers

2. **Component Error Boundaries**
   - Try-catch blocks
   - Error components
   - Fallback UI

## Performance Considerations

1. **Lazy Loading**
   - Route-based code splitting
   - Component lazy loading
   - Module lazy loading

2. **State Management**
   - Selective updates
   - Memoization
   - Change detection optimization

## Security Considerations

1. **Electron Security**
   - Node integration
   - Context isolation
   - CSP headers

2. **Angular Security**
   - XSS protection
   - CSRF protection
   - Input sanitization

## Application Operations

### 1. Tab Management

#### Opening a New Tab
```typescript
// src/app/actions/tabs.actions.ts
export const createTab = createAction(
  '[Tabs] Create Tab',
  props<{ url: string; appId: number }>()
);

// src/app/effects/tabs.effects.ts
@Effect()
createTab$ = this.actions$.pipe(
  ofType(TabsActionTypes.CreateTab),
  map((action: CreateTab) => {
    const newTab: ITab = {
      id: Date.now(), // Unique ID
      appId: action.appId,
      url: action.url,
      title: 'Loading...',
      hostName: new URL(action.url).hostname,
      icon: ''
    };
    return new CreateTabSuccess(newTab);
  })
);
```

#### Closing a Tab
```typescript
// src/app/actions/tabs.actions.ts
export const closeTab = createAction(
  '[Tabs] Close Tab',
  props<{ tabId: number }>()
);

// src/app/effects/tabs.effects.ts
@Effect()
closeTab$ = this.actions$.pipe(
  ofType(TabsActionTypes.CloseTab),
  map((action: CloseTab) => {
    // Remove tab from state
    // If it was the current tab, switch to another tab
    return new CloseTabSuccess(action.tabId);
  })
);
```

#### Tab Grouping
```typescript
// src/app/actions/tabs.actions.ts
export const groupTabs = createAction(
  '[Tabs] Group Tabs',
  props<{ tabIds: number[]; groupName: string }>()
);

// src/app/effects/tabs.effects.ts
@Effect()
groupTabs$ = this.actions$.pipe(
  ofType(TabsActionTypes.GroupTabs),
  map((action: GroupTabs) => {
    // Create a new tab group
    // Move selected tabs into the group
    return new GroupTabsSuccess(action.tabIds, action.groupName);
  })
);
```

### 2. App Management

#### Opening a New App
```typescript
// src/app/actions/app.actions.ts
export const openApp = createAction(
  '[App] Open App',
  props<{ appId: number; url: string }>()
);

// src/app/effects/app.effects.ts
@Effect()
openApp$ = this.actions$.pipe(
  ofType(AppActionTypes.OpenApp),
  map((action: OpenApp) => {
    // Create new app instance
    // Initialize app state
    // Create initial tab
    return new OpenAppSuccess(action.appId, action.url);
  })
);
```

#### App State Management
```typescript
// src/app/reducers/app.reducer.ts
export interface AppState {
  currentApp: IApp | null;
  apps: IApp[];
  tabs: ITab[];
  history: IHistoryItem[];
}

export const appReducer = createReducer(
  initialState,
  on(AppActions.openApp, (state, { appId, url }) => ({
    ...state,
    currentApp: state.apps.find(app => app.id === appId) || null,
    tabs: [...state.tabs, createInitialTab(appId, url)]
  }))
);
```

### 3. URL Handling

#### Loading URLs
```typescript
// src/app/services/url.service.ts
@Injectable()
export class UrlService {
  loadUrl(url: string, tabId: number): Observable<LoadUrlResult> {
    // Validate URL
    // Handle different protocols (http, https, file, etc.)
    // Load content
    return this.http.get(url).pipe(
      map(response => ({
        success: true,
        content: response.body,
        headers: response.headers
      })),
      catchError(error => ({
        success: false,
        error: error.message
      }))
    );
  }
}
```

#### URL Validation and Normalization
```typescript
// src/app/utils/url.utils.ts
export function normalizeUrl(url: string): string {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }
  try {
    return new URL(url).toString();
  } catch {
    return 'https://www.google.com/search?q=' + encodeURIComponent(url);
  }
}
```

### 4. Navigation Controls

#### Back/Forward Navigation
```typescript
// src/app/actions/navigation.actions.ts
export const navigateBack = createAction('[Navigation] Back');
export const navigateForward = createAction('[Navigation] Forward');

// src/app/effects/navigation.effects.ts
@Effect()
navigateBack$ = this.actions$.pipe(
  ofType(NavigationActionTypes.Back),
  map(() => {
    // Check if we can go back
    // Update history state
    // Load previous URL
    return new NavigateBackSuccess();
  })
);
```

#### Page Reload
```typescript
// src/app/actions/navigation.actions.ts
export const reloadPage = createAction('[Navigation] Reload');

// src/app/effects/navigation.effects.ts
@Effect()
reloadPage$ = this.actions$.pipe(
  ofType(NavigationActionTypes.Reload),
  map(() => {
    // Clear cache for current URL
    // Reload content
    return new ReloadPageSuccess();
  })
);
```

### 5. History Management

#### Recording History
```typescript
// src/app/actions/history.actions.ts
export const addToHistory = createAction(
  '[History] Add Item',
  props<{ url: string; title: string }>()
);

// src/app/effects/history.effects.ts
@Effect()
addToHistory$ = this.actions$.pipe(
  ofType(HistoryActionTypes.AddItem),
  map((action: AddToHistory) => {
    const historyItem: IHistoryItem = {
      id: Date.now(),
      url: action.url,
      title: action.title,
      timestamp: new Date(),
      host: new URL(action.url).hostname
    };
    return new AddToHistorySuccess(historyItem);
  })
);
```

### 6. Context Menu Operations

#### Context Menu Setup
```typescript
// src/app/components/app-nav/app-nav.component.ts
@Component({
  template: `
    <div *ngFor="let tab of tabs"
         (contextmenu)="showContextMenu($event, tab)">
      <!-- Tab content -->
    </div>
  `
})
export class AppNavComponent {
  showContextMenu(event: MouseEvent, tab: ITab): void {
    event.preventDefault();
    const menu = new Menu();
    menu.append(new MenuItem({
      label: 'Close Tab',
      click: () => this.onCloseTab.emit(tab)
    }));
    menu.popup({ window: remote.getCurrentWindow() });
  }
}
```

### 7. File Operations

#### File Downloads
```typescript
// src/app/services/download.service.ts
@Injectable()
export class DownloadService {
  downloadFile(url: string, filename: string): Observable<DownloadProgress> {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      map(blob => {
        // Save file using Electron's dialog
        return {
          success: true,
          path: savedPath
        };
      })
    );
  }
}
```

### 8. State Persistence

#### Saving State
```typescript
// src/app/services/storage.service.ts
@Injectable()
export class StorageService {
  saveState(state: AppState): void {
    localStorage.setItem('appState', JSON.stringify(state));
  }

  loadState(): AppState {
    const saved = localStorage.getItem('appState');
    return saved ? JSON.parse(saved) : initialState;
  }
}
```

### 9. IPC Communication

#### Main-Renderer Process Communication
```typescript
// src/electron/ipc.ts
export function setupIPC(mainWindow: BrowserWindow): void {
  ipcMain.on('open-url', (event, url) => {
    mainWindow.webContents.loadURL(url);
  });

  ipcMain.on('download-file', (event, { url, filename }) => {
    // Handle file download
  });
}
```

### 10. Error Recovery

#### Tab Crash Recovery
```typescript
// src/app/effects/tabs.effects.ts
@Effect()
handleTabCrash$ = this.actions$.pipe(
  ofType(TabsActionTypes.TabCrashed),
  map((action: TabCrashed) => {
    // Attempt to recover tab state
    // Show recovery UI
    // Reload tab content
    return new TabRecoverySuccess(action.tabId);
  })
);
```

## Performance Optimizations

### 1. Tab Management
- Lazy loading of tab content
- Tab suspension for inactive tabs
- Memory management for closed tabs

### 2. State Management
- Selective state updates
- State persistence optimization
- Memory leak prevention

### 3. Resource Management
- Image caching
- Resource preloading
- Memory usage monitoring

## Security Measures

### 1. URL Security
- URL validation
- Protocol restrictions
- Content security policy

### 2. File System Security
- Download path validation
- File type restrictions
- Permission management

### 3. IPC Security
- Message validation
- Origin checking
- Permission verification 