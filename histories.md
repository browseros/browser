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

- Added new intents `capture` and `capture_full_page` to support automatic screenshot capture
- Added Vietnamese and English patterns for screenshot capture requests
- Added automatic screenshot capture functionality for chat context

- Updated intent detection to handle screenshot capture requests
- Improved error handling and user feedback for screenshot operations
- Enhanced chat context with automatic screenshot capture

### Reason
- To provide better context for AI responses by automatically capturing screenshots when needed
- To improve user experience with automatic screenshot capture based on intent
- To maintain consistency with existing translation and summarization features

## 2025-04-04
### Added
- New automatic input filling functionality:
  - Added `handleInputFilling` method in `AIAssistantService` to handle input detection and filling
  - Added `analyzeInputRequest` method in `GoogleAIService` to analyze DOM structure and user intent
  - Added comprehensive DOM inspection to gather input context
  - Added support for various input types:
    - Regular text inputs
    - Textareas
    - Contenteditable divs
    - Search fields
    - Chat inputs
  - Added intelligent input detection using:
    - Text context around inputs
    - Labels and placeholders
    - ARIA labels and roles
    - Parent and sibling text content
  - Added support for random value generation:
    - Random questions
    - Random emails
    - Random phone numbers
    - Random names

### Updated
- Enhanced event handling for input filling:
  - Added support for multiple event types:
    - Input events
    - BeforeInput events
    - Keydown events
    - Change events
    - Composition events
  - Improved value setting for different input types
  - Added visibility and enabled state validation
  - Enhanced error handling and logging

### Files Modified
- `src/app/services/ai-assistant.service.ts`
- `src/app/services/google-ai.service.ts`

### Reason
- To provide users with automatic input filling capability
- To improve user experience by intelligently detecting correct input fields
- To support various input types and contexts
- To ensure reliable input filling with proper event simulation
- To maintain consistency with existing AI assistant features