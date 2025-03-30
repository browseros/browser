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
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.5-pro-exp-03-25' });
  }

  async extractTextFromImage(base64Image: string): Promise<string> {
    try {
      // Remove the data URL prefix if present
      const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '');
      
      // Create the prompt
      const prompt = `Please extract all text from this image, get only the main content, ignore ads, banners, and other non-content elements. Return only the extracted text without any additional formatting or explanation.`;

      // Generate content with proper error handling
      const result = await this.model.generateContent([
        prompt,
        {
          inlineData: {
            mimeType: "image/png",
            data: base64Data
          }
        }
      ]);

      if (!result || !result.response) {
        throw new Error('No response from Gemini API');
      }

      const response = await result.response;
      const text = response.text();
      
      if (!text) {
        throw new Error('No text extracted from image');
      }

      return text;
    } catch (error: any) {
      console.error('Error extracting text from image:', error);
      if (error.message?.includes('404')) {
        throw new Error('API endpoint not found. Please check your API key and endpoint configuration.');
      }
      throw new Error(`Failed to extract text: ${error.message || 'Unknown error'}`);
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