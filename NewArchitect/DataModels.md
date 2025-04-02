# Data Models Architecture

## Overview
The Data Models system in Browser OS defines the core data structures used throughout the application, ensuring type safety and data consistency.

## Core Models

### 1. Tab Model
```typescript
interface ITab {
    id: number;
    appId: number;
    url: string;
    title: string;
    hostName: string;
    icon?: string;
}
```

### 2. Web Event Model
```typescript
interface IWebEvent {
    eventValue: any;
    eventName: string;
    tabId: number;
    app: IApp | null;
}
```

### 3. Web Action Model
```typescript
interface IWebAction {
    tab: ITab | null;
    app: IApp | null;
    isCalling: boolean;
    value: any;
}
```

### 4. App Model
```typescript
interface IApp {
    id: number;
    title: string;
    url: string;
    icon: string;
}
```

### 5. History Item Model
```typescript
interface IHistoryItem {
    link: string;
    title: string;
    icon?: string;
    date: Date;
    weight: number;
}
```

### 6. App History Model
```typescript
interface IAppHistory {
    id: number;
    title: string;
    url: string;
    icon: string;
}
```

### 7. Page Info Model
```typescript
interface PageInfo {
    width: number;
    height: number;
    originalScroll: {
        x: number;
        y: number;
    };
    devicePixelRatio: number;
    originalStyles: {
        html: {
            overflow: string;
            height: string;
            width: string;
        };
        body: {
            overflow: string;
            height: string;
            width: string;
        };
    };
}
```

## Model Relationships

### 1. Tab and App
- Each tab belongs to an app (appId)
- App contains multiple tabs
- Both share common properties (url, title, icon)

### 2. Web Events and Actions
- Events are associated with tabs (tabId)
- Actions can reference both tabs and apps
- Both handle dynamic values (eventValue, value)

### 3. History System
- History items track visited pages
- App history tracks application usage
- Both maintain metadata (title, icon, dates)

## Data Flow

### 1. Tab Management
- Tab creation/deletion
- Tab state updates
- Tab navigation
- Tab metadata updates

### 2. Event Handling
- Event capture
- Event processing
- Action triggering
- State updates

### 3. History Tracking
- Page visits
- App usage
- Data persistence
- History retrieval

## Best Practices

### 1. Model Design
- Clear interfaces
- Optional properties
- Type safety
- Null handling

### 2. Data Management
- State updates
- Data validation
- Error handling
- Performance optimization 