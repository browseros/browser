# Code Change History

## 2024-03-21
### Added
- Created `note-for-cursor.md` with development guidelines
  - Added guidelines for event handling with `any` type
  - Added code modification guidelines (add/update/delete)
  - Added file history management requirements
  - Added main Electron file guidelines
  - Reason: To establish clear development standards and practices for the project
## 2025-04-02
- New screenshot functionality in `ScreenshotService`:
  - Added `captureVisibleArea` method to capture only the visible area of a webpage
  - Added `getViewportInfo` helper method to get viewport dimensions and scroll position
  - Added new context menu option "Capture visible area" in `HomeComponent`
- Reason: To provide users with a faster way to capture specific sections of a webpage without capturing the entire page
- Files modified:
  - `src/app/services/screenshot.service.ts`
  - `src/app/home/home.component.ts`


### Updated
- Improved screenshot functionality in `ScreenshotService`:
  - Changed `captureVisibleArea` method to use webview's native `capturePage` instead of html2canvas
  - Fixed issues with scrolled page capture
  - Added better error handling and logging
  - Maintained original full page capture functionality
- Reason: To improve reliability and performance of visible area screenshot capture
- Files modified:
  - `src/app/services/screenshot.service.ts` 
  
- Added chat history functionality to maintain conversation context
- Added new methods in AIAssistantService:
  - `addToChatHistory`: Store chat messages in history
  - `getChatHistory`: Retrieve chat history
  - `clearChatHistory`: Clear chat history
- Added conversation context support in GoogleAIService chat method
- Modified AIAssistantService.sendMessage to include conversation context
- Updated AIAssistantComponent to use chat history functionality
- Enhanced chat prompt to include previous conversation context
- To improve chat experience by maintaining conversation context
- To enable AI to provide more relevant and contextual responses
- To make chat interactions more natural and continuous