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

## 2025-04-05
### Added
- Auto-submit functionality after input filling:
  - Added automatic Enter key simulation
  - Added form submission handling
  - Added support for:
    - Enter key events sequence (keydown, keypress, keyup)
    - Form submit events
    - Full keyboard event properties
  - Added intelligent form detection and submission

### Files Modified
- `src/app/services/ai-assistant.service.ts`

### Reason
- To provide a more complete input filling experience
- To automate form submission after input filling
- To simulate natural user interaction
- To improve efficiency by reducing required user actions

## 2025-04-05
### Updated
- Improved form submission handling in input filling:
  - Added prevention of default form submission to avoid page reloads
  - Added custom event system for form submissions:
    - CustomSubmit event for form submissions
    - CustomClick event for send buttons
  - Added event prevention checks before actions
  - Enhanced button detection and click handling
  - Improved compatibility with various web frameworks

### Files Modified
- `src/app/services/ai-assistant.service.ts`

### Reason
- To prevent unwanted page reloads after form submission
- To maintain single-page application behavior
- To improve compatibility with modern web applications
- To provide better control over form submission process
- To enhance user experience by keeping application state

## 2025-04-06
### Added
- Intelligent context understanding and automatic screenshot capture:
  - Added context analysis in GoogleAIService chat method
  - Added automatic screenshot decision making
  - Added context-aware screenshot capture in AIAssistantService
  - Added seamless integration with existing chat flow

### Updated
- Enhanced chat functionality in GoogleAIService:
  - Added context understanding evaluation
  - Added intelligent screenshot request system
  - Improved conversation flow with context checks
  - Enhanced error handling for context analysis

- Modified AIAssistantService:
  - Added support for automatic context-based screenshots
  - Added new message types for context requests
  - Improved chat history integration with context awareness
  - Added current tab tracking for screenshot capture

### Files Modified
- `src/app/services/google-ai.service.ts`
- `src/app/services/ai-assistant.service.ts`

### Reason
- To improve AI's understanding of user context
- To automatically capture relevant visual context when needed
- To enhance conversation quality with contextual awareness
- To provide more accurate and relevant responses
- To maintain seamless user experience with automatic context gathering