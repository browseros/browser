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
} 