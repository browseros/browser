import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SafeHtml } from '@angular/platform-browser';
import { GoogleAIService } from './google-ai.service';
import { ScreenshotService } from './screenshot.service';
import { Store } from '@ngrx/store';

export interface ImageToChat {
  imageUrl: string;
  srcUrl: string;
  processed?: boolean;
}

export interface ChatMessage {
  type: 'text' | 'image';
  content: string;
  imageUrl?: string;
  srcUrl?: string;
  isUser: boolean;
  timestamp: Date;
  htmlContent?: SafeHtml;
  processed?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AIAssistantService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable();

  private imageSubject = new Subject<ImageToChat>();
  image$ = this.imageSubject.asObservable();

  private chatHistory: ChatMessage[] = [];
  private currentTab: any = null;

  constructor(
    private googleAI: GoogleAIService, 
    private screenshotService: ScreenshotService,
    private store: Store<any>
  ) {
    // Subscribe to current tab changes
    this.store.select(state => state.app.currentTab).subscribe(tab => {
      if (tab) {
        this.currentTab = tab;
      }
    });
  }

  toggleAssistant() {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }

  close() {
    this.isOpenSubject.next(false);
    this.clearChatHistory();
  }

  addImageToChat(image: ImageToChat) {
    // Open the assistant panel when an image is added
    this.isOpenSubject.next(true);
    // Send the image to the chat
    this.imageSubject.next(image);
  }

  addToChatHistory(message: ChatMessage) {
    this.chatHistory.push(message);
  }

  getChatHistory(): ChatMessage[] {
    return this.chatHistory;
  }

  clearChatHistory() {
    this.chatHistory = [];
  }

  async sendMessage(text: string, image?: ChatMessage | null): Promise<string> {
    try {
      const systemMessage = 'You are a helpful AI assistant that provides clear and accurate responses in Vietnamese.';
      
      // Build the conversation context
      let conversationContext = '';
      if (this.chatHistory.length > 0) {
        conversationContext = this.chatHistory
          .map(msg => `${msg.isUser ? 'User' : 'Assistant'}: ${msg.content}`)
          .join('\n');
      }

      // Add user message to chat history first
      const userMessage: ChatMessage = {
        type: 'text',
        content: text,
        isUser: true,
        timestamp: new Date()
      };
      this.chatHistory.push(userMessage);

      // Add a thinking message
      const thinkingMessage: ChatMessage = {
        type: 'text',
        content: '🤔 Đang suy nghĩ...',
        isUser: false,
        timestamp: new Date()
      };
      this.chatHistory.push(thinkingMessage);

      // If there's a pending image, use it directly
      if (image && image.imageUrl) {
        const response = await this.googleAI.chat(systemMessage, text, image.imageUrl, conversationContext);
        // Remove thinking message
        this.chatHistory = this.chatHistory.filter(msg => msg !== thinkingMessage);
        // Add response
        const responseMessage: ChatMessage = {
          type: 'text',
          content: response,
          isUser: false,
          timestamp: new Date()
        };
        this.chatHistory.push(responseMessage);
        return response;
      }

      // For text-only messages, first check context understanding
      const response = await this.googleAI.chat(systemMessage, text, undefined, conversationContext);
      
      try {
        // Try to parse the response as JSON
        const contextCheck = JSON.parse(response);
        
        // Remove thinking message
        this.chatHistory = this.chatHistory.filter(msg => msg !== thinkingMessage);
        
        // If AI indicates it needs a screenshot
        if (contextCheck.needsScreenshot === true) {
          // First send a loading message
          const loadingMessage: ChatMessage = {
            type: 'text',
            content: '📸 ' + (contextCheck.message || 'Tôi cần chụp màn hình để hiểu rõ hơn về ngữ cảnh...'),
            isUser: false,
            timestamp: new Date()
          };
          this.chatHistory.push(loadingMessage);

          try {
            // Take the screenshot
            const base64Image = await this.screenshotService.captureVisibleArea(
              document.querySelector(`webview#webview-${this.currentTab.id}`) as Electron.WebviewTag
            );

            // Remove the loading message
            this.chatHistory = this.chatHistory.filter(msg => msg !== loadingMessage);

            // Create a new message with the screenshot
            const screenshotMessage: ChatMessage = {
              type: 'image',
              content: text,
              imageUrl: base64Image,
              srcUrl: 'Context screenshot',
              isUser: true,
              timestamp: new Date()
            };
            this.chatHistory.push(screenshotMessage);

            // Add processing message
            const processingMessage: ChatMessage = {
              type: 'text',
              content: '🔍 Đang phân tích nội dung màn hình...',
              isUser: false,
              timestamp: new Date()
            };
            this.chatHistory.push(processingMessage);

            // Now send the message again with the screenshot
            const finalResponse = await this.googleAI.chat(
              systemMessage,
              text,
              base64Image,
              conversationContext
            );

            // Remove the processing message
            this.chatHistory = this.chatHistory.filter(msg => msg !== processingMessage);

            // Add the final response
            const finalMessage: ChatMessage = {
              type: 'text',
              content: finalResponse,
              isUser: false,
              timestamp: new Date()
            };
            this.chatHistory.push(finalMessage);

            return finalResponse;
          } catch (error) {
            // If screenshot fails, remove loading message and show error
            this.chatHistory = this.chatHistory.filter(msg => msg !== loadingMessage);
            const errorMessage: ChatMessage = {
              type: 'text',
              content: '❌ Không thể chụp màn hình: ' + ((error as Error)?.message || 'Vui lòng thử lại.'),
              isUser: false,
              timestamp: new Date()
            };
            this.chatHistory.push(errorMessage);
            throw error;
          }
        } else {
          // For regular responses, add to chat history
          const responseMessage: ChatMessage = {
            type: 'text',
            content: response,
            isUser: false,
            timestamp: new Date()
          };
          this.chatHistory.push(responseMessage);
        }
      } catch (e) {
        // Remove thinking message
        this.chatHistory = this.chatHistory.filter(msg => msg !== thinkingMessage);
        
        // If response is not JSON or parsing fails, it's a regular chat response
        console.log('Response is not JSON, treating as regular chat response');
        const responseMessage: ChatMessage = {
          type: 'text',
          content: response,
          isUser: false,
          timestamp: new Date()
        };
        this.chatHistory.push(responseMessage);
      }

      return response;
    } catch (error) {
      console.error('Error in sendMessage:', error);
      // Add error message to chat history
      const errorMessage: ChatMessage = {
        type: 'text',
        content: '❌ Đã xảy ra lỗi: ' + ((error as Error)?.message || 'Vui lòng thử lại.'),
        isUser: false,
        timestamp: new Date()
      };
      this.chatHistory.push(errorMessage);
      throw error;
    }
  }

  async handleAutomaticScreenshot(message: string, currentTab: any): Promise<string | null> {
    try {
      // Detect intent from the message
      const [intent, targetLang] = await this.googleAI.detectIntent(message);
      console.log('Detected intent:', intent, 'targetLang:', targetLang);

      // Check if the intent requires a screenshot
      if (['translate', 'summarize', 'explain_code', 'capture', 'capture_full_page'].includes(intent)) {
        if (!currentTab?.id) {
          throw new Error('Không thể lấy được tab hiện tại');
        }

        const webview = document.querySelector(`webview#webview-${currentTab.id}`) as Electron.WebviewTag;
        if (!webview) {
          throw new Error('Không tìm thấy webview cho tab hiện tại');
        }

        // Capture the screenshot based on intent
        let base64Image: string;
        if (intent === 'capture_full_page') {
          base64Image = await this.screenshotService.captureFullPage(webview);
        } else {
          base64Image = await this.screenshotService.captureVisibleArea(webview);
        }
        console.log('Captured screenshot for intent:', intent);

        return base64Image;
      }

      return null;
    } catch (error) {
      console.error('Error in handleAutomaticScreenshot:', error);
      return null;
    }
  }

  async handleInputFilling(message: string, currentTab: any): Promise<string | null> {
    try {
      if (!currentTab?.id) {
        throw new Error('Cannot get current tab');
      }

      const webview = document.querySelector(`webview#webview-${currentTab.id}`) as Electron.WebviewTag;
      if (!webview) {
        throw new Error('Cannot find webview for current tab');
      }

      // First, let's inspect the DOM structure with more context
      const domInfo = await webview.executeJavaScript(`
        (function() {
          function getElementContext(element) {
            // Get text content from the element itself
            const ownText = element.textContent || '';
            
            // Get text from previous siblings
            let previousText = '';
            let prevSibling = element.previousSibling;
            while (prevSibling && previousText.length < 100) {
              if (prevSibling.nodeType === 3) { // Text node
                previousText = (prevSibling.textContent || '') + ' ' + previousText;
              }
              prevSibling = prevSibling.previousSibling;
            }
            
            // Get text from next siblings
            let nextText = '';
            let nextSibling = element.nextSibling;
            while (nextSibling && nextText.length < 100) {
              if (nextSibling.nodeType === 3) { // Text node
                nextText += ' ' + (nextSibling.textContent || '');
              }
              nextSibling = nextSibling.nextSibling;
            }
            
            // Get text from parent
            const parentText = element.parentElement ? 
              (element.parentElement.textContent || '').replace(ownText, '') : '';
            
            // Get associated label
            let labelText = '';
            if (element.id) {
              const label = document.querySelector(\`label[for="\${element.id}"]\`);
              if (label) labelText = label.textContent || '';
            }
            
            // Get aria label and placeholder
            const ariaLabel = element.getAttribute('aria-label') || '';
            const placeholder = element.getAttribute('placeholder') || '';
            
            return {
              previousText: previousText.trim(),
              nextText: nextText.trim(),
              parentText: parentText.trim(),
              labelText: labelText.trim(),
              ariaLabel: ariaLabel.trim(),
              placeholder: placeholder.trim()
            };
          }

          // Get all input elements
          const inputs = document.querySelectorAll('input, textarea, [contenteditable="true"]');
          
          // Map their properties for inspection
          const inputsInfo = Array.from(inputs).map((input, index) => {
            const context = getElementContext(input);
            
            return {
              index,
              tagName: input.tagName.toLowerCase(),
              type: input.getAttribute('type') || '',
              id: input.id || '',
              name: input.name || '',
              className: input.className || '',
              value: input.value || '',
              isContentEditable: input.hasAttribute('contenteditable'),
              isVisible: input.offsetParent !== null,
              isEnabled: !input.disabled,
              role: input.getAttribute('role') || '',
              ...context
            };
          });

          console.log('Found inputs:', inputsInfo);
          return inputsInfo;
        })();
      `);

      console.log('DOM Structure:', domInfo);

      // Extract input identifier, value, and target input index from message using Google AI
      const [inputIdentifier, valueToFill, targetInputIndex] = await this.googleAI.analyzeInputRequest(message, domInfo);
      
      // Generate value if needed
      let value = valueToFill;
      if (valueToFill === 'random_question') {
        value = await this.generateRandomQuestion();
      } else if (valueToFill.startsWith('random_')) {
        value = await this.generateRandomValue(valueToFill.replace('random_', ''));
      }

      // Now try to fill the input
      const result = await webview.executeJavaScript(`
        (function() {
          try {
            const inputs = Array.from(document.querySelectorAll('input, textarea, [contenteditable="true"]'));
            const input = inputs[${targetInputIndex}];

            if (input) {
              console.log('Found target input:', input);

              // Set the value
              if (input.hasAttribute('contenteditable')) {
                input.textContent = "${value}";
                input.innerHTML = "${value}";
              } else {
                input.value = "${value}";
              }

              // Focus the input first
              input.focus();

              // Trigger input event
              const inputEvent = document.createEvent('Event');
              inputEvent.initEvent('input', true, true);
              input.dispatchEvent(inputEvent);

              // Trigger change event
              const changeEvent = document.createEvent('Event');
              changeEvent.initEvent('change', true, true);
              input.dispatchEvent(changeEvent);

              // For contenteditable divs
              if (input.hasAttribute('contenteditable')) {
                const compStartEvent = document.createEvent('Event');
                compStartEvent.initEvent('compositionstart', true, true);
                input.dispatchEvent(compStartEvent);

                const compEndEvent = document.createEvent('Event');
                compEndEvent.initEvent('compositionend', true, true);
                input.dispatchEvent(compEndEvent);
              }

              // Simulate Enter key press
              const enterEvent = document.createEvent('KeyboardEvent');
              enterEvent.initEvent('keydown', true, true);
              Object.defineProperties(enterEvent, {
                key: { value: 'Enter' },
                code: { value: 'Enter' },
                keyCode: { value: 13 },
                which: { value: 13 }
              });
              input.dispatchEvent(enterEvent);

              // Try to submit form if exists
              const form = input.closest('form');
              if (form) {
                // Prevent form from submitting normally
                form.addEventListener('submit', (e) => {
                  e.preventDefault();
                  return false;
                });

                // Try to find and click submit button first
                const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
                if (submitButton) {
                  // Create and dispatch a custom submit event
                  const customSubmitEvent = new CustomEvent('customSubmit', {
                    bubbles: true,
                    cancelable: true,
                    detail: { value: "${value}" }
                  });
                  form.dispatchEvent(customSubmitEvent);
                  
                  // Click the button if the custom event wasn't prevented
                  if (customSubmitEvent.defaultPrevented === false) {
                    submitButton.click();
                  }
                } else {
                  // If no submit button found, dispatch a custom submit event
                  const customSubmitEvent = new CustomEvent('customSubmit', {
                    bubbles: true,
                    cancelable: true,
                    detail: { value: "${value}" }
                  });
                  form.dispatchEvent(customSubmitEvent);
                }
              }

              // If no form, try to find and click a send button
              if (!form) {
                const possibleSendButtons = Array.from(document.querySelectorAll('button, [role="button"]')).filter(el => {
                  const text = (el.textContent || '').toLowerCase();
                  return text.includes('send') || text.includes('submit') || text.includes('gửi') || 
                         el.className.toLowerCase().includes('send') || el.id.toLowerCase().includes('send');
                });
                
                if (possibleSendButtons.length > 0) {
                  // Create and dispatch a custom click event
                  const customClickEvent = new CustomEvent('customClick', {
                    bubbles: true,
                    cancelable: true,
                    detail: { value: "${value}" }
                  });
                  possibleSendButtons[0].dispatchEvent(customClickEvent);
                  
                  // Click the button if the custom event wasn't prevented
                  if (customClickEvent.defaultPrevented === false) {
                    possibleSendButtons[0].click();
                  }
                }
              }

              return { success: true, message: 'Input filled successfully' };
            }

            return { success: false, message: 'Could not find appropriate input element' };
          } catch (error) {
            console.error('Error:', error);
            return { success: false, message: error.toString() };
          }
        })();
      `);

      console.log('Fill result:', result);
      
      if (result.success) {
        return `Successfully filled input with "${value}"`;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Error in handleInputFilling:', error);
      return null;
    }
  }

  private async generateRandomQuestion(): Promise<string> {
    const questions = [
      "What are your thoughts on artificial intelligence and its impact on society?",
      "How would you explain quantum computing to a beginner?",
      "What are the most effective ways to learn a new programming language?",
      "Can you explain the concept of blockchain in simple terms?",
      "What are the biggest challenges in cybersecurity today?",
      "How do you see the future of remote work evolving?",
      "What are the ethical considerations in AI development?",
      "How can we make technology more accessible to everyone?",
      "What role will virtual reality play in the future of education?",
      "How can we balance privacy and convenience in digital services?"
    ];
    return questions[Math.floor(Math.random() * questions.length)];
  }

  private async generateRandomValue(type: string): Promise<string> {
    switch (type.toLowerCase()) {
      case 'email':
        return `test${Math.random().toString(36).substring(2, 8)}@example.com`;
      case 'phone':
        return `+84${Math.floor(Math.random() * 900000000 + 100000000)}`;
      case 'name':
        const names = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Emily'];
        return names[Math.floor(Math.random() * names.length)];
      case 'password':
        return Math.random().toString(36).substring(2, 10);
      case 'question':
        return await this.generateRandomQuestion();
      default:
        return Math.random().toString(36).substring(2, 8);
    }
  }

  async addAssistantMessage(content: string) {
    const message: ChatMessage = {
      type: 'text',
      content: content,
      isUser: false,
      timestamp: new Date()
    };
    this.chatHistory.push(message);
  }
} 