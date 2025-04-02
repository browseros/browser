# State Management Architecture

## Overview
The State Management system in Browser OS uses NgRx (Angular's Redux implementation) to manage application state, providing a predictable and centralized way to handle state changes.

## Core Components

### 1. State Structure
```typescript
interface State {
    apps: IApp[];                    // List of all applications
    tabs: ITab[];                    // List of all tabs
    currentApp: IApp | null;         // Currently active application
    currentTab: ITab | null;         // Currently active tab
    host2Apps: { [hostname: string]: number };  // Hostname to app ID mapping
    app2Hosts: { [id: number]: string };        // App ID to hostname mapping
    currentTabs: { [appId: number]: number };   // App ID to current tab ID mapping
    tabIds: number[];                // List of all tab IDs
    isAddingApp: boolean;            // App addition state
    isClosingApp: boolean;           // App closure state
    isGoingtoApp: boolean;           // App navigation state
    isAddingTab: boolean;            // Tab addition state
    topApps: IHistoryItem[];         // Recently used applications
    suggestions: any[];              // Search suggestions
}
```

### 2. State Helper Functions
```typescript
class StateHelper {
    // App Management
    static changeStateByCreateNewTabAndNewApp(tab: ITab, state: State): State;
    static changeStateByCreateNewTabForOldApp(appId: number, tab: ITab, state: State): State;
    static changeStateByCloseApp(app: IApp, state: State): State;
    static changeStateByGotoApp(appId: number, state: State): State;
    
    // Tab Management
    static changeStateByCloseTab(tabId: number, appId: number, state: State): State;
    static changeStateByCloseOtherTabs(tabId: number, appId: number, state: State): State;
    static changeStateByCloseOtherTabsAllApps(tabId: number, state: State): State;
    
    // Tab Updates
    static changeStateByChangeTabTitle(tabId: number, newTitle: string, state: State): State;
    static changeStateByChangeTabIcon(tabId: number, newIcon: string, state: State): State;
    static changeStateByChangeTabUrl(state: State, tabId: number, url: string): State;
    
    // Utility Functions
    static extractHostname(url: string): string;
    static prepareAppLink(app: string): string;
    private static getNewAppId(apps: IApp[]): number;
    private static getNewTabId(tabs: ITab[]): number;
}
```

### 3. Action Types

#### App Management
- `ADD_APP`: Add a new application
- `GOTO_APP`: Switch to a different application
- `CLOSE_APP`: Close an application
- `CLOSE_OTHER_APPS`: Close all applications except current

#### Tab Management
- `ADD_TAB`: Add a new tab
- `GOTO_TAB`: Switch to a different tab
- `CLOSE_TAB`: Close a tab
- `CLOSE_OTHER_TABS`: Close other tabs in current app
- `CLOSE_OTHER_TABS_ALL_APPS`: Close other tabs in all apps

#### Navigation
- `DO_NEXT`: Navigate forward
- `DO_BACK`: Navigate backward
- `DO_RELOAD`: Reload current page

#### Tab Updates
- `CHANGE_TAB_TITLE`: Update tab title
- `CHANGE_TAB_URL`: Update tab URL
- `CHANGE_TAB_ICON`: Update tab icon

#### Suggestions
- `CLEAR_SUGGESTIONS`: Clear search suggestions
- `GET_SUGGESTIONS`: Fetch new suggestions

## State Management Flow

### 1. Action Dispatching
```typescript
// Example: Adding a new app
dispatch(new AddAppAction(newApp));
```

### 2. State Updates
```typescript
// Example: App addition reducer
case app.ADD_APP: {
    const newApp = action.payload;
    const hostname = StateHelper.extractHostname(newApp.url);
    
    return {
        ...state,
        apps: StateHelper.addNewApp(state.apps, newApp),
        host2Apps: { ...state.host2Apps, [hostname]: newApp.id },
        app2Hosts: { ...state.app2Hosts, [newApp.id]: hostname },
        currentApp: newApp,
        isAddingApp: true
    };
}
```

### 3. State Selectors
```typescript
// Example: Selecting current app
selectCurrentApp = createSelector(
    selectAppState,
    (state: State) => state.currentApp
);
```

### 4. Side Effects
```typescript
@Injectable()
export class AppEffects {
    @Effect()
    public doBack$: Observable<Action> = this.actions$
        .ofType(appActions.DO_BACK)
        .map((action: appActions.DoBackAction) => action.payload)
        .map(app => new appActions.DoBackCompleteAction(app));

    @Effect()
    public getSuggestions$: Observable<Action> = this.actions$
        .ofType(appActions.GET_SUGGESTIONS)
        .map((action: appActions.GetSuggestionsAction) => action.payload)
        .mergeMap(key =>
            this.googleSuggestionService.getSuggestionWords(key)
                .map((res) => {
                    let arr = res[1];
                    let titles = res[2];
                    let ret = [];
                    for (let i = 0; i < arr.length; i++) {
                        ret.push({ key: arr[i], title: titles[i] });
                    }
                    return new appActions.GetSuggestionsCompleteAction(ret);
                })
        );
}
```

## State Management Features

### 1. App Management
- App creation and deletion
- App switching and navigation
- App state persistence
- App metadata management
- Hostname to app mapping
- App history tracking

### 2. Tab Management
- Tab creation and deletion
- Tab switching and navigation
- Tab state persistence
- Tab metadata updates
- Tab URL management
- Tab title and icon updates

### 3. Navigation
- Forward/backward navigation
- Page reloading
- URL management
- History tracking
- Tab state preservation

### 4. Search and Suggestions
- Search suggestion management
- Suggestion caching
- Suggestion updates
- Search history
- Google suggestion integration

## Best Practices

### 1. State Updates
- Immutable state updates using spread operator
- Pure reducer functions
- Action type constants
- Action creators
- State helper functions for complex updates

### 2. State Selection
- Memoized selectors
- State composition
- Performance optimization
- Error handling
- Type safety

### 3. State Persistence
- State serialization
- State rehydration
- State validation
- State migration
- Error recovery

### 4. Development
- Action logging
- State debugging
- Performance monitoring
- Testing coverage
- RxJS operators for effects 