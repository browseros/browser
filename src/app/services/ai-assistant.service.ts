import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SafeHtml } from '@angular/platform-browser';
import { GoogleAIService } from './google-ai.service';

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

  constructor(private googleAI: GoogleAIService) {}

  toggleAssistant() {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }

  close() {
    this.isOpenSubject.next(false);
  }

  addImageToChat(image: ImageToChat) {
    // Open the assistant panel when an image is added
    this.isOpenSubject.next(true);
    // Send the image to the chat
    this.imageSubject.next(image);
  }

  async sendMessage(text: string, image?: ChatMessage | null): Promise<string> {
    try {
      const systemMessage = 'You are a helpful AI assistant that provides clear and accurate responses in Vietnamese.';
      
      // If there's an image, include it in the chat
      if (image && image.imageUrl) {
        return await this.googleAI.chat(systemMessage, text, image.imageUrl);
      }
      
      // Otherwise, just send text
      return await this.googleAI.chat(systemMessage, text);
    } catch (error) {
      console.error('Error in sendMessage:', error);
      throw error;
    }
  }
} 