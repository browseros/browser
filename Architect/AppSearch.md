# AppSearch Component Architecture

## Overview
The AppSearch component provides an omnibox-style search bar that combines URL input, search functionality, and smart suggestions in a unified interface.

## Component Structure

### 1. Component Files
```
src/app/components/app-search/
├── app-search.component.ts
├── app-search.component.html
├── app-search.component.scss
└── app-search.component.spec.ts
```

### 2. Component Class
```typescript
@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent implements OnInit {
  // Search state
  searchQuery: string = '';
  suggestions: ISuggestion[] = [];
  isLoading: boolean = false;
  
  // UI state
  isFocused: boolean = false;
  showSuggestions: boolean = false;
  
  // Search history
  recentSearches: string[] = [];
  popularSearches: string[] = [];
  
  constructor(
    private store: Store<AppState>,
    private searchService: SearchService,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit(): void {
    this.initializeSearch();
    this.setupEventListeners();
    this.loadSearchHistory();
  }
}
```

## Features

### 1. Search Functionality
- URL input and validation
- Search engine integration
- Smart suggestions
- Search history

### 2. Suggestions
- Real-time suggestions
- History-based suggestions
- Bookmark suggestions
- Popular searches

### 3. Navigation
- Direct URL navigation
- Search engine selection
- Tab management
- Keyboard shortcuts

### 4. UI Features
- Loading indicators
- Error handling
- Focus management
- Responsive design

## State Management

### 1. Store Integration
```typescript
// Selectors
const selectSearchState = createSelector(
  selectAppState,
  (state: AppState) => state.search
);

const selectSuggestions = createSelector(
  selectSearchState,
  (state: SearchState) => state.suggestions
);

// Actions
export const updateSearchQuery = createAction('[Search] Update Query');
export const loadSuggestions = createAction('[Search] Load Suggestions');
export const performSearch = createAction('[Search] Perform Search');
```

### 2. Effects
```typescript
@Effect()
loadSuggestions$ = this.actions$.pipe(
  ofType(SearchActionTypes.LoadSuggestions),
  debounceTime(300),
  switchMap(action => 
    this.suggestionService.getSuggestions(action.query).pipe(
      map(suggestions => new LoadSuggestionsSuccess(suggestions)),
      catchError(error => of(new LoadSuggestionsFailure(error)))
    )
  )
);
```

## User Interface

### 1. Layout Structure
```html
<div class="search-container" [class.focused]="isFocused">
  <!-- Search Input -->
  <div class="search-input-wrapper">
    <div class="search-icon">
      <i class="icon-search"></i>
    </div>
    
    <input type="text"
           class="search-input"
           [(ngModel)]="searchQuery"
           (input)="onInput($event)"
           (focus)="onFocus()"
           (blur)="onBlur()"
           (keydown)="onKeyDown($event)"
           placeholder="Search or enter URL">
           
    <div class="search-actions">
      <button class="action-btn clear" 
              *ngIf="searchQuery"
              (click)="clearSearch()">
        <i class="icon-clear"></i>
      </button>
      <button class="action-btn search-engine"
              (click)="toggleSearchEngine()">
        <img [src]="currentSearchEngine.icon" 
             [alt]="currentSearchEngine.name">
      </button>
    </div>
  </div>

  <!-- Suggestions Dropdown -->
  <div class="suggestions-dropdown" 
       *ngIf="showSuggestions && suggestions.length > 0">
    <!-- Recent Searches -->
    <div class="suggestion-section" *ngIf="recentSearches.length > 0">
      <div class="section-header">
        <i class="icon-history"></i>
        <span>Recent Searches</span>
      </div>
      <div class="suggestion-list">
        <div *ngFor="let search of recentSearches"
             class="suggestion-item"
             (click)="selectSuggestion(search)">
          <i class="icon-history"></i>
          <span>{{ search }}</span>
        </div>
      </div>
    </div>

    <!-- Suggestions -->
    <div class="suggestion-section">
      <div class="section-header">
        <i class="icon-suggestions"></i>
        <span>Suggestions</span>
      </div>
      <div class="suggestion-list">
        <div *ngFor="let suggestion of suggestions"
             class="suggestion-item"
             [class.selected]="suggestion === selectedSuggestion"
             (click)="selectSuggestion(suggestion)"
             (mouseenter)="selectSuggestion(suggestion)">
          <i [class]="suggestion.icon"></i>
          <span>{{ suggestion.text }}</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

### 2. Styling
```scss
.search-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  .search-input-wrapper {
    display: flex;
    align-items: center;
    height: 40px;
    background: var(--search-bg);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 0 16px;
    transition: all 0.2s;

    &.focused {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px var(--primary-color-light);
    }

    .search-icon {
      color: var(--text-secondary);
      margin-right: 12px;
    }

    .search-input {
      flex: 1;
      height: 100%;
      border: none;
      background: transparent;
      font-size: 14px;
      color: var(--text-primary);
      outline: none;

      &::placeholder {
        color: var(--text-secondary);
      }
    }

    .search-actions {
      display: flex;
      align-items: center;
      gap: 8px;

      .action-btn {
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

        &.search-engine {
          img {
            width: 16px;
            height: 16px;
            border-radius: 2px;
          }
        }
      }
    }
  }

  .suggestions-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 8px;
    background: var(--dropdown-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    .suggestion-section {
      padding: 8px 0;

      .section-header {
        display: flex;
        align-items: center;
        padding: 4px 16px;
        color: var(--text-secondary);
        font-size: 12px;
        text-transform: uppercase;

        i {
          margin-right: 8px;
        }
      }

      .suggestion-list {
        .suggestion-item {
          display: flex;
          align-items: center;
          padding: 8px 16px;
          cursor: pointer;
          transition: all 0.2s;

          &:hover,
          &.selected {
            background: var(--hover-bg);
          }

          i {
            margin-right: 12px;
            color: var(--text-secondary);
          }

          span {
            color: var(--text-primary);
            font-size: 14px;
          }
        }
      }
    }
  }
}
```

## Event Handling

### 1. Input Events
```typescript
export class AppSearchComponent {
  onInput(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.searchQuery = query;
    
    if (query) {
      this.store.dispatch(loadSuggestions({ query }));
    } else {
      this.suggestions = [];
    }
  }

  onFocus(): void {
    this.isFocused = true;
    this.showSuggestions = true;
  }

  onBlur(): void {
    this.isFocused = false;
    // Delay hiding suggestions to allow click events
    setTimeout(() => {
      this.showSuggestions = false;
    }, 200);
  }
}
```

### 2. Keyboard Navigation
```typescript
export class AppSearchComponent {
  onKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.selectNextSuggestion();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.selectPreviousSuggestion();
        break;
      case 'Enter':
        event.preventDefault();
        this.performSearch();
        break;
      case 'Escape':
        event.preventDefault();
        this.clearSearch();
        break;
    }
  }

  selectNextSuggestion(): void {
    const currentIndex = this.suggestions.indexOf(this.selectedSuggestion);
    if (currentIndex < this.suggestions.length - 1) {
      this.selectedSuggestion = this.suggestions[currentIndex + 1];
    }
  }

  selectPreviousSuggestion(): void {
    const currentIndex = this.suggestions.indexOf(this.selectedSuggestion);
    if (currentIndex > 0) {
      this.selectedSuggestion = this.suggestions[currentIndex - 1];
    }
  }
}
```

## Performance Optimizations

### 1. Search Optimization
- Debounced input handling
- Cached suggestions
- Lazy loading of results
- Efficient data structures

### 2. UI Performance
- Virtual scrolling for suggestions
- Efficient DOM updates
- CSS containment
- Hardware acceleration

### 3. Memory Management
- Cleanup of unused suggestions
- Resource cleanup
- Memory leak prevention
- Garbage collection optimization

## Security Considerations

### 1. Input Validation
- URL sanitization
- XSS prevention
- Input validation
- Output encoding

### 2. Search Security
- HTTPS enforcement
- Content security
- Safe search options
- Privacy protection

### 3. Data Protection
- Search history encryption
- Secure storage
- Privacy controls
- Data retention policies

## Testing

### 1. Unit Tests
```typescript
describe('AppSearchComponent', () => {
  let component: AppSearchComponent;
  let fixture: ComponentFixture<AppSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSearchComponent ],
      imports: [
        StoreModule.forRoot(reducers),
        FormsModule
      ]
    }).compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle input changes', () => {
    const query = 'test search';
    component.onInput({ target: { value: query } } as any);
    expect(store.dispatch).toHaveBeenCalledWith(loadSuggestions({ query }));
  });
});
```

### 2. E2E Tests
```typescript
describe('AppSearch', () => {
  it('should perform search', () => {
    cy.get('.search-input').type('test search{enter}');
    cy.url().should('include', 'search?q=test+search');
  });

  it('should show suggestions', () => {
    cy.get('.search-input').type('test');
    cy.get('.suggestions-dropdown').should('be.visible');
  });
});
```

## Future Enhancements

### 1. Planned Features
- Voice search
- Image search
- Advanced filters
- Search history sync

### 2. Performance Improvements
- Faster suggestions
- Better caching
- Reduced network calls
- Improved responsiveness

### 3. User Experience
- Custom search engines
- Search shortcuts
- Voice input
- Accessibility improvements 