# XLarge Component Architecture

## Overview
The XLarge component provides a responsive layout system for the Browser OS application, handling large screen displays and complex UI layouts with advanced features.

## Component Structure

### 1. Component Files
```
src/app/components/x-large/
├── x-large.component.ts
├── x-large.component.html
├── x-large.component.scss
└── x-large.component.spec.ts
```

### 2. Component Class
```typescript
@Component({
  selector: 'app-x-large',
  templateUrl: './x-large.component.html',
  styleUrls: ['./x-large.component.scss']
})
export class XLargeComponent implements OnInit {
  // Layout state
  isExpanded: boolean = false;
  isMaximized: boolean = false;
  currentLayout: LayoutType = 'default';
  
  // Screen management
  screenWidth: number = 0;
  screenHeight: number = 0;
  aspectRatio: number = 16/9;
  
  // Content state
  contentLoaded: boolean = false;
  isLoading: boolean = false;
  
  constructor(
    private store: Store<AppState>,
    private screenService: ScreenService,
    private layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    this.initializeLayout();
    this.setupScreenManagement();
    this.setupEventListeners();
  }
}
```

## Features

### 1. Layout Management
- Responsive grid system
- Dynamic resizing
- Layout presets
- Custom layouts

### 2. Screen Features
- Multi-monitor support
- Screen detection
- Resolution management
- DPI scaling

### 3. Content Handling
- Dynamic content loading
- Content scaling
- Aspect ratio management
- Content optimization

### 4. UI Features
- Split views
- Floating windows
- Custom overlays
- Gesture support

## State Management

### 1. Store Integration
```typescript
// Selectors
const selectLayoutState = createSelector(
  selectAppState,
  (state: AppState) => state.layout
);

const selectScreenState = createSelector(
  selectAppState,
  (state: AppState) => state.screen
);

// Actions
export const updateLayout = createAction('[XLarge] Update Layout');
export const updateScreen = createAction('[XLarge] Update Screen');
export const toggleExpand = createAction('[XLarge] Toggle Expand');
```

### 2. Effects
```typescript
@Effect()
updateLayout$ = this.actions$.pipe(
  ofType(XLargeActionTypes.UpdateLayout),
  withLatestFrom(this.store.select(selectScreenState)),
  map(([action, screenState]) => {
    const layout = this.layoutService.calculateLayout(
      action.layout,
      screenState
    );
    return new UpdateLayoutSuccess(layout);
  })
);
```

## User Interface

### 1. Layout Structure
```html
<div class="x-large-container" 
     [class.expanded]="isExpanded"
     [class.maximized]="isMaximized"
     [class.loading]="isLoading">
  
  <!-- Layout Controls -->
  <div class="layout-controls">
    <button class="control-btn expand" 
            (click)="toggleExpand()">
      <i class="icon-expand"></i>
    </button>
    <button class="control-btn maximize" 
            (click)="toggleMaximize()">
      <i class="icon-maximize"></i>
    </button>
    <div class="layout-presets">
      <button *ngFor="let preset of layoutPresets"
              class="preset-btn"
              [class.active]="currentLayout === preset.id"
              (click)="applyLayout(preset)">
        <i [class]="preset.icon"></i>
        <span>{{ preset.name }}</span>
      </button>
    </div>
  </div>

  <!-- Main Content -->
  <div class="main-content" [class.content-loaded]="contentLoaded">
    <ng-content></ng-content>
  </div>

  <!-- Loading Overlay -->
  <div class="loading-overlay" *ngIf="isLoading">
    <div class="loading-spinner"></div>
    <span>Loading...</span>
  </div>

  <!-- Split Views -->
  <div class="split-views" *ngIf="hasSplitViews">
    <div *ngFor="let view of splitViews"
         class="split-view"
         [class.active]="view.isActive"
         (click)="activateView(view)">
      <div class="view-content">
        <ng-container *ngTemplateOutlet="view.template"></ng-container>
      </div>
      <div class="view-controls">
        <button class="view-btn close" 
                (click)="closeView(view)">
          <i class="icon-close"></i>
        </button>
        <button class="view-btn maximize" 
                (click)="maximizeView(view)">
          <i class="icon-maximize"></i>
        </button>
      </div>
    </div>
  </div>
</div>
```

### 2. Styling
```scss
.x-large-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--x-large-bg);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &.expanded {
    .main-content {
      margin-left: 0;
    }
  }

  &.maximized {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
  }

  &.loading {
    .loading-overlay {
      opacity: 1;
      pointer-events: auto;
    }
  }

  .layout-controls {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 16px;
    background: var(--controls-bg);
    border-bottom: 1px solid var(--border-color);

    .control-btn {
      width: 32px;
      height: 32px;
      border: none;
      background: transparent;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: var(--text-primary);
      }

      &.expand,
      &.maximize {
        margin-right: 8px;
      }
    }

    .layout-presets {
      display: flex;
      gap: 8px;

      .preset-btn {
        display: flex;
        align-items: center;
        padding: 4px 8px;
        border: none;
        border-radius: 4px;
        background: transparent;
        color: var(--text-secondary);
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background: var(--hover-bg);
        }

        &.active {
          background: var(--active-bg);
          color: var(--primary-color);
        }

        i {
          margin-right: 4px;
        }
      }
    }
  }

  .main-content {
    flex: 1;
    position: relative;
    margin-left: 240px;
    transition: margin-left 0.3s ease;
    overflow: hidden;

    &.content-loaded {
      opacity: 1;
    }
  }

  .loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--overlay-bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;

    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 3px solid var(--spinner-color);
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 16px;
    }

    span {
      color: var(--text-primary);
      font-size: 14px;
    }
  }

  .split-views {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 320px;
    background: var(--split-views-bg);
    border-left: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;

    .split-view {
      flex: 1;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid var(--border-color);

      &:last-child {
        border-bottom: none;
      }

      &.active {
        .view-content {
          display: block;
        }
      }

      .view-content {
        flex: 1;
        display: none;
        overflow: auto;
      }

      .view-controls {
        display: flex;
        align-items: center;
        height: 32px;
        padding: 0 8px;
        background: var(--view-controls-bg);

        .view-btn {
          width: 24px;
          height: 24px;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            color: var(--text-primary);
          }

          &.close:hover {
            color: var(--danger-color);
          }
        }
      }
    }
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

## Event Handling

### 1. Layout Events
```typescript
export class XLargeComponent {
  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
    this.store.dispatch(toggleExpand({ isExpanded: this.isExpanded }));
  }

  toggleMaximize(): void {
    this.isMaximized = !this.isMaximized;
    this.store.dispatch(toggleMaximize({ isMaximized: this.isMaximized }));
  }

  applyLayout(preset: LayoutPreset): void {
    this.currentLayout = preset.id;
    this.store.dispatch(updateLayout({ layout: preset }));
  }
}
```

### 2. Screen Events
```typescript
export class XLargeComponent {
  onScreenResize(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.aspectRatio = this.screenWidth / this.screenHeight;
    this.store.dispatch(updateScreen({
      width: this.screenWidth,
      height: this.screenHeight,
      aspectRatio: this.aspectRatio
    }));
  }

  onScreenOrientationChange(): void {
    this.onScreenResize();
    this.layoutService.updateLayoutForOrientation();
  }
}
```

## Performance Optimizations

### 1. Layout Performance
- Efficient DOM updates
- Layout caching
- Change detection optimization
- Memory management

### 2. Rendering
- CSS containment
- Hardware acceleration
- Efficient repaints
- Resource prioritization

### 3. Content Loading
- Lazy loading
- Progressive loading
- Resource optimization
- Cache management

## Security Considerations

### 1. Content Security
- XSS prevention
- Content validation
- Resource validation
- Permission management

### 2. Screen Security
- Screen capture prevention
- Privacy protection
- Window state security
- IPC security

### 3. Layout Security
- Layout validation
- State isolation
- Event security
- Resource limits

## Testing

### 1. Unit Tests
```typescript
describe('XLargeComponent', () => {
  let component: XLargeComponent;
  let fixture: ComponentFixture<XLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XLargeComponent ],
      imports: [
        StoreModule.forRoot(reducers),
        ScreenModule
      ]
    }).compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle layout changes', () => {
    const preset = { id: 'split', name: 'Split View' };
    component.applyLayout(preset);
    expect(store.dispatch).toHaveBeenCalledWith(updateLayout({ layout: preset }));
  });
});
```

### 2. E2E Tests
```typescript
describe('XLarge', () => {
  it('should toggle expand', () => {
    cy.get('.control-btn.expand').click();
    cy.get('.x-large-container').should('have.class', 'expanded');
  });

  it('should handle screen resize', () => {
    cy.viewport(1920, 1080);
    cy.get('.x-large-container').should('have.class', 'maximized');
  });
});
```

## Future Enhancements

### 1. Planned Features
- Advanced layouts
- Custom themes
- Gesture support
- Multi-monitor layouts

### 2. Performance Improvements
- Faster layout updates
- Better memory usage
- Improved rendering
- Resource optimization

### 3. User Experience
- Layout presets
- Custom layouts
- Keyboard shortcuts
- Accessibility improvements 