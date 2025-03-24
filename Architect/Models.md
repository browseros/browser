# Browser OS Models Documentation

## Overview
This document describes all the data models and interfaces used throughout the Browser OS application. These models define the structure and behavior of various entities in the system.

## Core Models

### 1. Tab Model
```typescript
interface ITab {
  id: string;                    // Unique identifier for the tab
  title: string;                 // Tab title
  url: string;                   // Current URL
  favicon: string;               // Tab favicon URL
  isActive: boolean;             // Whether the tab is currently active
  isModified: boolean;           // Whether the tab content is modified
  isLoading: boolean;            // Whether the tab is loading
  progress: number;              // Loading progress (0-100)
  canGoBack: boolean;            // Whether back navigation is available
  canGoForward: boolean;         // Whether forward navigation is available
  history: string[];             // Navigation history
  createdAt: Date;               // Tab creation timestamp
  lastAccessed: Date;            // Last access timestamp
  groupId?: string;              // Optional tab group identifier
  pinned: boolean;               // Whether the tab is pinned
  muted: boolean;                // Whether the tab is muted
  zoom: number;                  // Current zoom level
  themeColor?: string;           // Page theme color
}
```

### 2. Window Model
```typescript
interface IWindow {
  id: string;                    // Unique identifier for the window
  title: string;                 // Window title
  isMaximized: boolean;          // Whether the window is maximized
  isMinimized: boolean;          // Whether the window is minimized
  isFocused: boolean;            // Whether the window has focus
  bounds: IRectangle;            // Window position and size
  tabs: ITab[];                  // List of tabs in the window
  activeTabId: string | null;    // ID of the active tab
  theme: ITheme;                 // Window theme settings
  createdAt: Date;               // Window creation timestamp
  lastFocused: Date;             // Last focus timestamp
}
```

### 3. Navigation Model
```typescript
interface INavigation {
  url: string;                   // Current URL
  title: string;                 // Page title
  favicon: string;               // Page favicon
  isSecure: boolean;             // Whether the connection is secure
  protocol: string;              // URL protocol
  hostname: string;              // URL hostname
  pathname: string;              // URL pathname
  search: string;                // URL search parameters
  hash: string;                  // URL hash
  referrer: string;              // Referrer URL
  timestamp: Date;               // Navigation timestamp
  type: NavigationType;          // Navigation type (direct, redirect, etc.)
  status: number;                // HTTP status code
  error?: string;                // Navigation error if any
}
```

### 4. History Model
```typescript
interface IHistoryItem {
  id: string;                    // Unique identifier
  url: string;                   // Page URL
  title: string;                 // Page title
  favicon: string;               // Page favicon
  visitCount: number;            // Number of visits
  lastVisit: Date;               // Last visit timestamp
  firstVisit: Date;              // First visit timestamp
  typedCount: number;            // Number of typed visits
  transition: TransitionType;    // Page transition type
  referrer?: string;             // Referrer URL
  thumbnail?: string;            // Page thumbnail URL
  tags: string[];                // User-defined tags
  notes?: string;                // User notes
}
```

### 5. Bookmark Model
```typescript
interface IBookmark {
  id: string;                    // Unique identifier
  url: string;                   // Bookmark URL
  title: string;                 // Bookmark title
  description?: string;          // Bookmark description
  favicon: string;               // Page favicon
  folderId?: string;             // Parent folder ID
  createdAt: Date;               // Creation timestamp
  modifiedAt: Date;              // Last modification timestamp
  tags: string[];                // User-defined tags
  pinned: boolean;               // Whether the bookmark is pinned
  customIcon?: string;           // Custom icon URL
  syncStatus: SyncStatus;        // Sync status
}
```

### 6. Settings Model
```typescript
interface ISettings {
  appearance: IAppearanceSettings;    // Appearance settings
  privacy: IPrivacySettings;          // Privacy settings
  security: ISecuritySettings;        // Security settings
  performance: IPerformanceSettings;  // Performance settings
  downloads: IDownloadSettings;       // Download settings
  search: ISearchSettings;            // Search settings
  shortcuts: IShortcutSettings;       // Keyboard shortcuts
  extensions: IExtensionSettings;     // Extension settings
  sync: ISyncSettings;                // Sync settings
  language: string;                   // UI language
  timezone: string;                   // System timezone
  lastBackup: Date;                   // Last settings backup
}
```

### 7. Theme Model
```typescript
interface ITheme {
  id: string;                    // Theme identifier
  name: string;                  // Theme name
  type: ThemeType;               // Theme type (light/dark/system)
  colors: IThemeColors;          // Theme colors
  fonts: IThemeFonts;            // Theme fonts
  spacing: IThemeSpacing;        // Theme spacing
  borderRadius: IThemeRadius;    // Border radius values
  shadows: IThemeShadows;        // Shadow values
  animations: IThemeAnimations;  // Animation settings
  customCSS?: string;            // Custom CSS
  isCustom: boolean;             // Whether it's a custom theme
}
```

### 8. Extension Model
```typescript
interface IExtension {
  id: string;                    // Extension identifier
  name: string;                  // Extension name
  version: string;               // Extension version
  description: string;           // Extension description
  author: string;                // Extension author
  homepage: string;              // Extension homepage
  permissions: string[];         // Required permissions
  manifest: any;                 // Extension manifest
  enabled: boolean;              // Whether the extension is enabled
  installedAt: Date;             // Installation timestamp
  lastUpdated: Date;             // Last update timestamp
  settings: any;                 // Extension settings
  errors?: string[];             // Extension errors
}
```

### 9. Download Model
```typescript
interface IDownload {
  id: string;                    // Download identifier
  url: string;                   // Download URL
  filename: string;              // Target filename
  path: string;                  // Download path
  size: number;                  // File size
  received: number;              // Bytes received
  speed: number;                 // Download speed
  status: DownloadStatus;        // Download status
  mimeType: string;              // File MIME type
  startTime: Date;               // Start timestamp
  endTime?: Date;                // End timestamp
  error?: string;                // Error message
  paused: boolean;               // Whether download is paused
  canResume: boolean;            // Whether download can be resumed
}
```

### 10. Search Model
```typescript
interface ISearch {
  query: string;                 // Search query
  engine: ISearchEngine;         // Search engine
  suggestions: string[];         // Search suggestions
  history: string[];            // Search history
  filters: ISearchFilters;      // Search filters
  results: ISearchResult[];     // Search results
  isLoading: boolean;           // Loading state
  error?: string;               // Error message
  timestamp: Date;              // Search timestamp
}
```

## Supporting Models

### 1. Rectangle Model
```typescript
interface IRectangle {
  x: number;                     // X coordinate
  y: number;                     // Y coordinate
  width: number;                 // Width
  height: number;                // Height
}
```

### 2. Search Engine Model
```typescript
interface ISearchEngine {
  id: string;                    // Engine identifier
  name: string;                  // Engine name
  url: string;                   // Search URL
  icon: string;                  // Engine icon
  isDefault: boolean;            // Whether it's the default engine
  suggestionsUrl?: string;       // Suggestions API URL
  shortcut: string;              // Keyboard shortcut
}
```

### 3. Search Result Model
```typescript
interface ISearchResult {
  title: string;                 // Result title
  url: string;                   // Result URL
  description: string;           // Result description
  favicon: string;               // Site favicon
  type: ResultType;              // Result type
  relevance: number;             // Result relevance
  timestamp?: Date;              // Result timestamp
  metadata?: any;                // Additional metadata
}
```

### 4. Theme Colors Model
```typescript
interface IThemeColors {
  primary: string;               // Primary color
  secondary: string;             // Secondary color
  accent: string;                // Accent color
  background: string;            // Background color
  surface: string;               // Surface color
  text: {
    primary: string;             // Primary text color
    secondary: string;           // Secondary text color
    disabled: string;            // Disabled text color
  };
  border: string;                // Border color
  error: string;                 // Error color
  success: string;               // Success color
  warning: string;               // Warning color
  info: string;                  // Info color
}
```

## Enums

### 1. Navigation Type
```typescript
enum NavigationType {
  DIRECT = 'direct',             // Direct navigation
  REDIRECT = 'redirect',         // Redirect navigation
  RELOAD = 'reload',             // Page reload
  BACK_FORWARD = 'back_forward', // Back/forward navigation
  LINK = 'link',                 // Link click
  FORM_SUBMIT = 'form_submit',   // Form submission
  OTHER = 'other'                // Other navigation
}
```

### 2. Transition Type
```typescript
enum TransitionType {
  LINK = 'link',                 // Link click
  TYPED = 'typed',               // Typed URL
  AUTO_BOOKMARK = 'auto_bookmark', // Auto bookmark
  AUTO_SUBFRAME = 'auto_subframe', // Auto subframe
  MANUAL_SUBFRAME = 'manual_subframe', // Manual subframe
  GENERATED = 'generated',       // Generated navigation
  START_PAGE = 'start_page',     // Start page
  FORM_SUBMIT = 'form_submit',   // Form submission
  RELOAD = 'reload',             // Page reload
  KEYWORD = 'keyword',           // Keyword search
  KEYWORD_GENERATED = 'keyword_generated' // Generated keyword
}
```

### 3. Download Status
```typescript
enum DownloadStatus {
  PENDING = 'pending',           // Download pending
  IN_PROGRESS = 'in_progress',   // Download in progress
  PAUSED = 'paused',            // Download paused
  COMPLETED = 'completed',      // Download completed
  CANCELLED = 'cancelled',      // Download cancelled
  FAILED = 'failed'             // Download failed
}
```

### 4. Result Type
```typescript
enum ResultType {
  WEB = 'web',                   // Web result
  NEWS = 'news',                 // News result
  IMAGE = 'image',               // Image result
  VIDEO = 'video',               // Video result
  SHOPPING = 'shopping',         // Shopping result
  BOOK = 'book',                 // Book result
  MAP = 'map',                   // Map result
  OTHER = 'other'                // Other result type
}
```

### 5. Theme Type
```typescript
enum ThemeType {
  LIGHT = 'light',               // Light theme
  DARK = 'dark',                 // Dark theme
  SYSTEM = 'system',             // System theme
  CUSTOM = 'custom'              // Custom theme
}
```

### 6. Sync Status
```typescript
enum SyncStatus {
  SYNCED = 'synced',             // Fully synced
  SYNCING = 'syncing',           // Currently syncing
  ERROR = 'error',               // Sync error
  PENDING = 'pending',           // Pending sync
  DISABLED = 'disabled'          // Sync disabled
}
```

## Type Guards

### 1. Tab Type Guard
```typescript
function isTab(obj: any): obj is ITab {
  return (
    obj &&
    typeof obj.id === 'string' &&
    typeof obj.title === 'string' &&
    typeof obj.url === 'string' &&
    typeof obj.isActive === 'boolean'
  );
}
```

### 2. Window Type Guard
```typescript
function isWindow(obj: any): obj is IWindow {
  return (
    obj &&
    typeof obj.id === 'string' &&
    Array.isArray(obj.tabs) &&
    typeof obj.isMaximized === 'boolean'
  );
}
```

### 3. History Item Type Guard
```typescript
function isHistoryItem(obj: any): obj is IHistoryItem {
  return (
    obj &&
    typeof obj.id === 'string' &&
    typeof obj.url === 'string' &&
    obj.lastVisit instanceof Date
  );
}
```

## Model Relationships

### 1. Window-Tab Relationship
- A Window contains multiple Tabs
- Each Tab belongs to one Window
- One Tab is active at a time in a Window

### 2. Tab-Navigation Relationship
- A Tab has a current Navigation state
- Navigation history is maintained per Tab
- Navigation events update Tab state

### 3. History-Bookmark Relationship
- History items can be converted to Bookmarks
- Bookmarks can reference History items
- Both share common URL and metadata

### 4. Settings-Theme Relationship
- Settings contain Theme preferences
- Theme changes affect Settings
- Settings can override Theme defaults

## Model Validation

### 1. URL Validation
```typescript
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
```

### 2. Tab Validation
```typescript
function validateTab(tab: ITab): ValidationResult {
  const errors: string[] = [];
  
  if (!isValidUrl(tab.url)) {
    errors.push('Invalid URL');
  }
  
  if (!tab.title) {
    errors.push('Title is required');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}
```

### 3. Settings Validation
```typescript
function validateSettings(settings: ISettings): ValidationResult {
  const errors: string[] = [];
  
  if (!settings.language) {
    errors.push('Language is required');
  }
  
  if (!settings.timezone) {
    errors.push('Timezone is required');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}
```

## Model Serialization

### 1. Tab Serialization
```typescript
function serializeTab(tab: ITab): string {
  return JSON.stringify({
    id: tab.id,
    title: tab.title,
    url: tab.url,
    favicon: tab.favicon,
    isActive: tab.isActive,
    isModified: tab.isModified,
    isLoading: tab.isLoading,
    progress: tab.progress,
    canGoBack: tab.canGoBack,
    canGoForward: tab.canGoForward,
    history: tab.history,
    createdAt: tab.createdAt.toISOString(),
    lastAccessed: tab.lastAccessed.toISOString()
  });
}
```

### 2. Window Serialization
```typescript
function serializeWindow(window: IWindow): string {
  return JSON.stringify({
    id: window.id,
    title: window.title,
    isMaximized: window.isMaximized,
    isMinimized: window.isMinimized,
    isFocused: window.isFocused,
    bounds: window.bounds,
    tabs: window.tabs.map(serializeTab),
    activeTabId: window.activeTabId,
    theme: window.theme,
    createdAt: window.createdAt.toISOString(),
    lastFocused: window.lastFocused.toISOString()
  });
}
```

## Model Deserialization

### 1. Tab Deserialization
```typescript
function deserializeTab(json: string): ITab {
  const data = JSON.parse(json);
  return {
    ...data,
    createdAt: new Date(data.createdAt),
    lastAccessed: new Date(data.lastAccessed)
  };
}
```

### 2. Window Deserialization
```typescript
function deserializeWindow(json: string): IWindow {
  const data = JSON.parse(json);
  return {
    ...data,
    tabs: data.tabs.map(deserializeTab),
    createdAt: new Date(data.createdAt),
    lastFocused: new Date(data.lastFocused)
  };
}
``` 