import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SafeHtml } from '@angular/platform-browser';
import { GoogleAIService } from './google-ai.service';
import { ScreenshotService } from './screenshot.service';

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

  constructor(private googleAI: GoogleAIService, private screenshotService: ScreenshotService) {}

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

      // If there's an image, include it in the chat
      if (image && image.imageUrl) {
        return await this.googleAI.chat(systemMessage, text, image.imageUrl, conversationContext);
      }
      
      // Otherwise, just send text with conversation context
      return await this.googleAI.chat(systemMessage, text, undefined, conversationContext);
    } catch (error) {
      console.error('Error in sendMessage:', error);
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

      // First, let's inspect the DOM structure
      const domInfo = await webview.executeJavaScript(`
        (function() {
          // Get all input elements
          const inputs = document.querySelectorAll('input, textarea, [contenteditable="true"]');
          
          // Map their properties for inspection
          const inputsInfo = Array.from(inputs).map(input => ({
            tagName: input.tagName,
            id: input.id,
            className: input.className,
            type: input.type,
            placeholder: input.placeholder,
            'aria-label': input.getAttribute('aria-label'),
            role: input.getAttribute('role'),
            name: input.name
          }));

          console.log('Found inputs:', inputsInfo);
          return inputsInfo;
        })();
      `);

      console.log('DOM Structure:', domInfo);

      // Extract input identifier and value from message
      const [inputIdentifier, valueToFill] = await this.googleAI.extractInputInfo(message);
      
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
            // Try ChatGPT's main textarea first
            let input = document.querySelector('#prompt-textarea');
            
            if (!input) {
              // Try common chat textareas
              input = document.querySelector('textarea[placeholder*="message" i], textarea[placeholder*="chat" i], textarea[placeholder*="type" i]');
            }

            if (!input) {
              // Try contenteditable divs
              input = document.querySelector('[contenteditable="true"]');
            }

            if (!input) {
              // Try any textarea or text input
              input = document.querySelector('textarea, input[type="text"]');
            }

            if (input) {
              console.log('Found input:', input);
              
              // Set the value
              if (input.hasAttribute('contenteditable')) {
                input.textContent = "${value}";
              } else {
                input.value = "${value}";
              }

              // Trigger input event
              const inputEvent = new InputEvent('input', {
                bubbles: true,
                cancelable: true,
                composed: true
              });
              input.dispatchEvent(inputEvent);

              // Trigger change event
              const changeEvent = new Event('change', {
                bubbles: true,
                cancelable: true
              });
              input.dispatchEvent(changeEvent);

              return { success: true, message: 'Input filled successfully' };
            }

            return { success: false, message: 'Could not find input element' };
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
} 