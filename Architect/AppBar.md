# AppBar Component Architecture

## Overview
The AppBar component serves as the main navigation and control bar of the Browser OS application, providing essential browser controls and navigation features.

## Component Structure

### 1. Component Files
```
src/app/components/app-bar/
├── app-bar.component.ts
├── app-bar.component.html
├── app-bar.component.scss
└── app-bar.component.spec.ts
```

### 2. Component Class
```typescript
@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  // Navigation controls
  canGoBack: boolean = false;
  canGoForward: boolean = false;
  
  // Tab management
  currentTab: ITab | null = null;
  tabs: ITab[] = [];
  
  // UI state
  isMenuOpen: boolean = false;
  isMaximized: boolean = false;
  
  constructor(
    private store: Store<AppState>,
    private electronService: ElectronService,
    private tabService: TabService
  ) {}

  ngOnInit(): void {
    this.initializeNavigation();
    this.setupTabManagement();
    this.setupWindowControls();
  }
}
```

## Features

### 1. Navigation Controls
- Back/Forward buttons
- Refresh button
- Home button
- URL display and editing
- Navigation progress indicator

### 2. Tab Management
- Tab creation
- Tab switching
- Tab closing
- Tab reordering (drag & drop)
- Tab overflow handling

### 3. Window Controls
- Minimize
- Maximize/Restore
- Close
- Window state management

### 4. Menu Integration
- File menu
- Edit menu
- View menu
- History menu
- Bookmarks menu
- Tools menu
- Help menu

## State Management

### 1. Store Integration
```typescript
// Selectors
const selectCurrentTab = createSelector(
  selectAppState,
  (state: AppState) => state.currentTab
);

const selectTabs = createSelector(
  selectAppState,
  (state: AppState) => state.tabs
);

// Actions
export const navigateBack = createAction('[AppBar] Navigate Back');
export const navigateForward = createAction('[AppBar] Navigate Forward');
export const refreshPage = createAction('[AppBar] Refresh Page');
```

### 2. Effects
```typescript
@Effect()
navigateBack$ = this.actions$.pipe(
  ofType(AppBarActionTypes.NavigateBack),
  withLatestFrom(this.store.select(selectCurrentTab)),
  map(([action, currentTab]) => {
    if (currentTab?.canGoBack) {
      return new NavigateBackSuccess();
    }
    return new NavigateBackFailure();
  })
);
```

## User Interface

### 1. Layout Structure
```html
<div class="app-bar">
  <!-- Navigation Controls -->
  <div class="nav-controls">
    <button class="nav-btn back" [disabled]="!canGoBack" (click)="goBack()">
      <i class="icon-back"></i>
    </button>
    <button class="nav-btn forward" [disabled]="!canGoForward" (click)="goForward()">
      <i class="icon-forward"></i>
    </button>
    <button class="nav-btn refresh" (click)="refresh()">
      <i class="icon-refresh"></i>
    </button>
  </div>

  <!-- URL Bar -->
  <div class="url-bar">
    <app-search></app-search>
  </div>

  <!-- Tab Bar -->
  <div class="tab-bar">
    <div class="tabs-container">
      <app-tab *ngFor="let tab of tabs"
               [tab]="tab"
               [active]="tab.id === currentTab?.id"
               (click)="switchTab(tab)"
               (close)="closeTab(tab)">
      </app-tab>
    </div>
    <button class="new-tab-btn" (click)="createNewTab()">
      <i class="icon-plus"></i>
    </button>
  </div>

  <!-- Window Controls -->
  <div class="window-controls">
    <button class="window-btn minimize" (click)="minimizeWindow()">
      <i class="icon-minimize"></i>
    </button>
    <button class="window-btn maximize" (click)="toggleMaximize()">
      <i class="icon-maximize"></i>
    </button>
    <button class="window-btn close" (click)="closeWindow()">
      <i class="icon-close"></i>
    </button>
  </div>
</div>
```

### 2. Styling
```scss
.app-bar {
  display: flex;
  align-items: center;
  height: 40px;
  background: var(--app-bar-bg);
  border-bottom: 1px solid var(--border-color);
  padding: 0 8px;
  user-select: none;

  .nav-controls {
    display: flex;
    gap: 4px;
    margin-right: 8px;

    .nav-btn {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: none;
      background: transparent;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background: var(--hover-bg);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  .url-bar {
    flex: 1;
    margin: 0 8px;
  }

  .tab-bar {
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 8px;

    .tabs-container {
      display: flex;
      gap: 2px;
      height: 100%;
      overflow-x: auto;
    }

    .new-tab-btn {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: none;
      background: transparent;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background: var(--hover-bg);
      }
    }
  }

  .window-controls {
    display: flex;
    gap: 4px;

    .window-btn {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: none;
      background: transparent;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background: var(--hover-bg);
      }

      &.close:hover {
        background: var(--danger-bg);
        color: var(--danger-text);
      }
    }
  }
}
```

## Event Handling

### 1. Navigation Events
```typescript
export class AppBarComponent {
  goBack(): void {
    if (this.canGoBack) {
      this.store.dispatch(navigateBack());
    }
  }

  goForward(): void {
    if (this.canGoForward) {
      this.store.dispatch(navigateForward());
    }
  }

  refresh(): void {
    this.store.dispatch(refreshPage());
  }
}
```

### 2. Tab Management Events
```typescript
export class AppBarComponent {
  switchTab(tab: ITab): void {
    this.store.dispatch(switchTab({ tabId: tab.id }));
  }

  closeTab(tab: ITab): void {
    this.store.dispatch(closeTab({ tabId: tab.id }));
  }

  createNewTab(): void {
    this.store.dispatch(createTab({ url: 'about:blank' }));
  }
}
```

### 3. Window Control Events
```typescript
export class AppBarComponent {
  minimizeWindow(): void {
    this.electronService.minimizeWindow();
  }

  toggleMaximize(): void {
    this.electronService.toggleMaximize();
  }

  closeWindow(): void {
    this.electronService.closeWindow();
  }
}
```

## Performance Optimizations

### 1. Tab Management
- Virtual scrolling for many tabs
- Tab state caching
- Lazy loading of tab content
- Tab suspension for inactive tabs

### 2. UI Rendering
- Change detection optimization
- Component lazy loading
- Efficient DOM updates
- CSS containment

### 3. Memory Management
- Tab cleanup on close
- Resource cleanup
- Memory leak prevention
- Garbage collection optimization

## Security Considerations

### 1. URL Validation
- URL sanitization
- Protocol validation
- Security policy enforcement
- Content security headers

### 2. Input Protection
- XSS prevention
- CSRF protection
- Input validation
- Output encoding

### 3. Window Security
- Window state validation
- IPC security
- Permission management
- Sandbox enforcement

## Testing

### 1. Unit Tests
```typescript
describe('AppBarComponent', () => {
  let component: AppBarComponent;
  let fixture: ComponentFixture<AppBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBarComponent ],
      imports: [
        StoreModule.forRoot(reducers),
        RouterTestingModule
      ]
    }).compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle navigation', () => {
    component.goBack();
    expect(store.dispatch).toHaveBeenCalledWith(navigateBack());
  });
});
```

### 2. E2E Tests
```typescript
describe('AppBar', () => {
  it('should navigate back', () => {
    cy.visit('/');
    cy.get('.nav-btn.back').click();
    cy.window().then((win) => {
      expect(win.history.length).to.be.greaterThan(1);
    });
  });

  it('should create new tab', () => {
    cy.get('.new-tab-btn').click();
    cy.window().then((win) => {
      expect(win.store.getState().tabs.length).to.equal(2);
    });
  });
});
```

## Future Enhancements

### 1. Planned Features
- Tab groups
- Tab previews
- Custom themes
- Gesture navigation
- Keyboard shortcuts

### 2. Performance Improvements
- Tab state persistence
- Faster tab switching
- Reduced memory usage
- Improved startup time

### 3. User Experience
- Customizable layout
- Touch gestures
- Accessibility improvements
- Internationalization 