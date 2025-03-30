import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleAIService {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor() {
    // Initialize the Google AI client with API key from environment
    this.genAI = new GoogleGenerativeAI(environment.geminiApiKey);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-pro-vision' });
  }

  async extractTextFromImage(base64Image: string): Promise<string> {
    try {
      // Remove the data URL prefix if present
      const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '');
      
      // Convert base64 to Uint8Array
      const imageData = this.base64ToUint8Array(base64Data);

      // Create the prompt
      const prompt = "Please extract all text from this image. Return only the extracted text without any additional explanation or formatting.";

      // Generate content
      const result = await this.model.generateContent([
        prompt,
        {
          inlineData: {
            mimeType: "image/png",
            data: base64Data
          }
        }
      ]);

      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error extracting text from image:', error);
      throw error;
    }
  }

  private base64ToUint8Array(base64: string): Uint8Array {
    const binaryString = window.atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }
} 