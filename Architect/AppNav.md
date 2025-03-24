# AppNav Component Architecture

## Overview
The AppNav component provides the main navigation sidebar of the Browser OS application, offering quick access to various browser features and tools.

## Component Structure

### 1. Component Files
```
src/app/components/app-nav/
├── app-nav.component.ts
├── app-nav.component.html
├── app-nav.component.scss
└── app-nav.component.spec.ts
```

### 2. Component Class
```typescript
@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {
  // Navigation items
  navItems: INavItem[] = [];
  
  // UI state
  isCollapsed: boolean = false;
  activeItem: string | null = null;
  
  // User preferences
  favorites: IFavorite[] = [];
  recentHistory: IHistoryItem[] = [];
  
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private navService: NavService
  ) {}

  ngOnInit(): void {
    this.initializeNavItems();
    this.loadUserPreferences();
    this.setupNavigation();
  }
}
```

## Features

### 1. Main Navigation
- Home
- Bookmarks
- History
- Downloads
- Extensions
- Settings
- Help

### 2. Quick Access
- Recent history
- Favorite sites
- Pinned tabs
- Recent downloads

### 3. User Customization
- Custom shortcuts
- Folder organization
- Drag and drop reordering
- Collapsible sections

### 4. Context Menu
- Open in new tab
- Open in new window
- Edit properties
- Remove item
- Add to favorites

## State Management

### 1. Store Integration
```typescript
// Selectors
const selectNavState = createSelector(
  selectAppState,
  (state: AppState) => state.navigation
);

const selectFavorites = createSelector(
  selectAppState,
  (state: AppState) => state.favorites
);

// Actions
export const toggleNavItem = createAction('[Nav] Toggle Item');
export const reorderNavItems = createAction('[Nav] Reorder Items');
export const addFavorite = createAction('[Nav] Add Favorite');
```

### 2. Effects
```typescript
@Effect()
toggleNavItem$ = this.actions$.pipe(
  ofType(NavActionTypes.ToggleItem),
  withLatestFrom(this.store.select(selectNavState)),
  map(([action, navState]) => {
    const updatedState = this.navService.toggleItem(navState, action.itemId);
    return new ToggleItemSuccess(updatedState);
  })
);
```

## User Interface

### 1. Layout Structure
```html
<nav class="app-nav" [class.collapsed]="isCollapsed">
  <!-- Main Navigation -->
  <div class="nav-section main-nav">
    <div class="nav-header">
      <button class="collapse-btn" (click)="toggleCollapse()">
        <i class="icon-collapse"></i>
      </button>
      <h2>Navigation</h2>
    </div>
    
    <div class="nav-items">
      <div *ngFor="let item of navItems"
           class="nav-item"
           [class.active]="item.id === activeItem"
           (click)="navigate(item)"
           (contextmenu)="showContextMenu($event, item)">
        <i [class]="item.icon"></i>
        <span class="item-label">{{ item.label }}</span>
      </div>
    </div>
  </div>

  <!-- Quick Access -->
  <div class="nav-section quick-access">
    <h3>Quick Access</h3>
    <div class="favorites-list">
      <div *ngFor="let favorite of favorites"
           class="favorite-item"
           (click)="openFavorite(favorite)">
        <img [src]="favorite.icon" [alt]="favorite.title">
        <span>{{ favorite.title }}</span>
      </div>
    </div>
  </div>

  <!-- Recent History -->
  <div class="nav-section recent-history">
    <h3>Recent History</h3>
    <div class="history-list">
      <div *ngFor="let item of recentHistory"
           class="history-item"
           (click)="openHistoryItem(item)">
        <i class="icon-history"></i>
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</nav>
```

### 2. Styling
```scss
.app-nav {
  width: 240px;
  height: 100%;
  background: var(--nav-bg);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;

  &.collapsed {
    width: 64px;

    .item-label,
    .section-title {
      display: none;
    }
  }

  .nav-section {
    padding: 16px 0;
    border-bottom: 1px solid var(--border-color);

    .nav-header {
      display: flex;
      align-items: center;
      padding: 0 16px;
      margin-bottom: 8px;

      .collapse-btn {
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

      h2 {
        margin: 0;
        font-size: 14px;
        color: var(--text-secondary);
      }
    }

    .nav-items {
      .nav-item {
        display: flex;
        align-items: center;
        padding: 8px 16px;
        color: var(--text-primary);
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
          margin-right: 12px;
          font-size: 18px;
        }

        .item-label {
          font-size: 14px;
        }
      }
    }
  }

  .quick-access,
  .recent-history {
    padding: 16px;

    h3 {
      margin: 0 0 8px;
      font-size: 12px;
      color: var(--text-secondary);
      text-transform: uppercase;
    }

    .favorites-list,
    .history-list {
      .favorite-item,
      .history-item {
        display: flex;
        align-items: center;
        padding: 8px;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background: var(--hover-bg);
        }

        img {
          width: 16px;
          height: 16px;
          margin-right: 8px;
        }

        i {
          margin-right: 8px;
          color: var(--text-secondary);
        }

        span {
          font-size: 13px;
          color: var(--text-primary);
        }
      }
    }
  }
}
```

## Event Handling

### 1. Navigation Events
```typescript
export class AppNavComponent {
  navigate(item: INavItem): void {
    this.activeItem = item.id;
    this.router.navigate([item.route]);
  }

  openFavorite(favorite: IFavorite): void {
    this.store.dispatch(createTab({ url: favorite.url }));
  }

  openHistoryItem(item: IHistoryItem): void {
    this.store.dispatch(createTab({ url: item.url }));
  }
}
```

### 2. UI Events
```typescript
export class AppNavComponent {
  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.store.dispatch(updateNavState({ isCollapsed: this.isCollapsed }));
  }

  showContextMenu(event: MouseEvent, item: INavItem): void {
    event.preventDefault();
    this.contextMenuService.show(event, {
      items: this.getContextMenuItems(item)
    });
  }
}
```

## Performance Optimizations

### 1. Rendering
- Virtual scrolling for long lists
- Lazy loading of images
- Component lazy loading
- Change detection optimization

### 2. Data Management
- Caching of navigation state
- Efficient data structures
- Memory management
- State persistence

### 3. UI Performance
- CSS containment
- Hardware acceleration
- Efficient DOM updates
- Debounced search

## Security Considerations

### 1. Data Protection
- Secure storage of favorites
- History encryption
- Permission management
- Data validation

### 2. Navigation Security
- URL validation
- Protocol checking
- Content security
- XSS prevention

### 3. Context Menu Security
- Input sanitization
- Action validation
- Permission checking
- Event security

## Testing

### 1. Unit Tests
```typescript
describe('AppNavComponent', () => {
  let component: AppNavComponent;
  let fixture: ComponentFixture<AppNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNavComponent ],
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
    const mockItem = { id: 'home', route: '/home' };
    component.navigate(mockItem);
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });
});
```

### 2. E2E Tests
```typescript
describe('AppNav', () => {
  it('should toggle collapse', () => {
    cy.get('.collapse-btn').click();
    cy.get('.app-nav').should('have.class', 'collapsed');
  });

  it('should navigate to favorites', () => {
    cy.get('.nav-item[data-id="favorites"]').click();
    cy.url().should('include', '/favorites');
  });
});
```

## Future Enhancements

### 1. Planned Features
- Custom navigation groups
- Smart suggestions
- Integration with extensions
- Advanced search

### 2. Performance Improvements
- Faster navigation
- Reduced memory usage
- Better state management
- Improved caching

### 3. User Experience
- Custom themes
- Gesture support
- Keyboard navigation
- Accessibility improvements 