# Development Guidelines for Cursor Browser

## Event Handling
- When creating functions with events, always use `any` type for event parameters
- Example:
```typescript
function handleEvent(event: any) {
  // event handling logic
}
```

## Code Modification Guidelines
1. **Adding Code**
   - Always add new code without modifying existing functionality
   - Ensure new additions are properly integrated with existing code

2. **Updating Code**
   - Before updating any code, thoroughly understand the existing implementation
   - Document the reason for updates
   - Maintain backward compatibility when possible

3. **Deleting Code**
   - Only delete code after complete understanding of its purpose and dependencies
   - Document the reason for deletion
   - Ensure no breaking changes are introduced

## File History Management
- All code changes (additions, updates, deletions) must be logged in `histories.md`
- Include:
  - Type of change (add/update/delete)
  - Brief description of the change
  - Reason for the change
  - Date of modification
- Important: For `histories.md` file:
  - Only append new changes, never modify or delete existing entries
  - Each entry represents a historical record and must be preserved
  - If corrections are needed, add new entries instead of modifying old ones
  - This ensures a complete and accurate history of all changes

## Main Electron File
- The main Electron file is `main.electron.ts`
- Do not create new main files
- All Electron-related functionality should be implemented in this file 