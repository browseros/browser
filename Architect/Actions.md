# Browser OS Actions

## Overview
Actions in Browser OS are Redux actions that define all possible state changes in the application. They are divided into core application actions and history management actions.

## Action Structure

### 1. App Actions
```typescript
// app.actions.ts
export const APP_ACTIONS = {
  INIT: '[App] Initialize',
  READY: '[App] Ready',
  ERROR: '[App] Error',
  UPDATE_STATE: '[App] Update State'
};

export class InitializeApp implements Action {
  readonly type = APP_ACTIONS.INIT;
}

export class AppReady implements Action {
  readonly type = APP_ACTIONS.READY;
}

export class AppError implements Action {
  readonly type = APP_ACTIONS.ERROR;
  constructor(public payload: any) {}
}

export class UpdateAppState implements Action {
  readonly type = APP_ACTIONS.UPDATE_STATE;
  constructor(public payload: any) {}
}
```

### 2. History Actions
```typescript
// history.actions.ts
export const HISTORY_ACTIONS = {
  ADD_ENTRY: '[History] Add Entry',
  REMOVE_ENTRY: '[History] Remove Entry',
  CLEAR_HISTORY: '[History] Clear',
  UPDATE_ENTRY: '[History] Update Entry'
};

export class AddHistoryEntry implements Action {
  readonly type = HISTORY_ACTIONS.ADD_ENTRY;
  constructor(public payload: HistoryEntry) {}
}

export class RemoveHistoryEntry implements Action {
  readonly type = HISTORY_ACTIONS.REMOVE_ENTRY;
  constructor(public payload: string) {}
}

export class ClearHistory implements Action {
  readonly type = HISTORY_ACTIONS.CLEAR_HISTORY;
}

export class UpdateHistoryEntry implements Action {
  readonly type = HISTORY_ACTIONS.UPDATE_ENTRY;
  constructor(public payload: { id: string; changes: Partial<HistoryEntry> }) {}
}
```

## Action Categories

### 1. App Actions
- **Initialize**: Bootstrap the application
- **Ready**: Signal application readiness
- **Error**: Handle application errors
- **Update State**: Update application state

### 2. History Actions
- **Add Entry**: Add new history entry
- **Remove Entry**: Remove history entry
- **Clear History**: Clear all history
- **Update Entry**: Update existing history entry

## Implementation Details

### 1. Action Creation
```typescript
// Creating actions
const initApp = new InitializeApp();
const appError = new AppError('Connection failed');
const addHistory = new AddHistoryEntry({
  id: '1',
  url: 'https://example.com',
  title: 'Example',
  timestamp: new Date()
});
```

### 2. Action Dispatching
```typescript
// Dispatching actions
@Component({...})
export class AppComponent {
  constructor(private store: Store<AppState>) {}

  initializeApp() {
    this.store.dispatch(new InitializeApp());
  }

  handleError(error: any) {
    this.store.dispatch(new AppError(error));
  }

  addToHistory(entry: HistoryEntry) {
    this.store.dispatch(new AddHistoryEntry(entry));
  }
}
```

## State Management

### 1. Action Effects
```typescript
@Injectable()
export class AppEffects {
  @Effect()
  init$ = this.actions$.pipe(
    ofType(APP_ACTIONS.INIT),
    map(() => new AppReady())
  );

  @Effect()
  error$ = this.actions$.pipe(
    ofType(APP_ACTIONS.ERROR),
    tap(action => console.error(action.payload))
  );

  constructor(private actions$: Actions) {}
}
```

### 2. Action Reducers
```typescript
export function appReducer(state = initialState, action: AppActions): AppState {
  switch (action.type) {
    case APP_ACTIONS.READY:
      return { ...state, isReady: true };
    case APP_ACTIONS.ERROR:
      return { ...state, error: action.payload };
    case APP_ACTIONS.UPDATE_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
```

## Testing

### 1. Action Tests
```typescript
describe('App Actions', () => {
  it('should create InitializeApp action', () => {
    const action = new InitializeApp();
    expect(action.type).toBe(APP_ACTIONS.INIT);
  });

  it('should create AppError action with payload', () => {
    const error = 'Test error';
    const action = new AppError(error);
    expect(action.type).toBe(APP_ACTIONS.ERROR);
    expect(action.payload).toBe(error);
  });
});
```

### 2. Effect Tests
```typescript
describe('App Effects', () => {
  let effects: AppEffects;
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AppEffects);
  });

  it('should handle init effect', () => {
    actions$ = hot('-a', { a: new InitializeApp() });
    const expected = cold('-b', { b: new AppReady() });
    expect(effects.init$).toBeObservable(expected);
  });
});
```

## Usage Examples

### 1. Basic Usage
```typescript
@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="(appState$ | async).isReady">
      App is ready!
    </div>
  `
})
export class AppComponent implements OnInit {
  appState$ = this.store.select(state => state.app);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new InitializeApp());
  }
}
```

### 2. Advanced Usage
```typescript
@Component({
  selector: 'app-history',
  template: `
    <div *ngFor="let entry of history$ | async">
      <a [href]="entry.url">{{ entry.title }}</a>
      <button (click)="removeEntry(entry.id)">Remove</button>
    </div>
    <button (click)="clearHistory()">Clear All</button>
  `
})
export class HistoryComponent {
  history$ = this.store.select(state => state.history.entries);

  constructor(private store: Store<AppState>) {}

  removeEntry(id: string) {
    this.store.dispatch(new RemoveHistoryEntry(id));
  }

  clearHistory() {
    this.store.dispatch(new ClearHistory());
  }
}
```

## Best Practices

### 1. Action Naming
- Use descriptive, event-like names
- Follow the pattern: `[Source] Event`
- Be consistent with naming conventions

### 2. Action Structure
- Keep actions focused and single-purpose
- Include necessary payload data
- Use TypeScript interfaces for type safety

### 3. Action Handling
- Handle actions in appropriate effects/reducers
- Implement proper error handling
- Follow Redux patterns and best practices

## Future Enhancements

### 1. Planned Features
- Action logging and debugging
- Action replay functionality
- Action batching support
- Undo/redo capabilities

### 2. Performance Improvements
- Action debouncing
- Action caching
- Optimized action processing

### 3. Developer Experience
- Better action type inference
- Enhanced debugging tools
- Action documentation generation 