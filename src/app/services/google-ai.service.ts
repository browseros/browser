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
    this.initializeAI();
  }

  private getApiKey(): string {
    const keys = localStorage.getItem('apiKeys');
    if (keys) {
      const parsedKeys = JSON.parse(keys);
      return parsedKeys.geminiApiKey || '';
    }
    return '';
  }

  private initializeAI() {
    const apiKey = this.getApiKey();
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
  }

  // Method to reinitialize the AI with new API key
  updateApiKey() {
    this.initializeAI();
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

  async translateText(text: string, targetLang: string = 'vietnamese'): Promise<string> {
    try {
      const prompt = `Translate the following text to ${targetLang}. Return only the translation without any additional formatting or explanation:

${text}`;

      const result = await this.model.generateContent(prompt);
      if (!result || !result.response) {
        throw new Error('No response from Gemini API');
      }

      const response = await result.response;
      const translatedText = response.text();
      
      if (!translatedText) {
        throw new Error('No translation generated');
      }

      return translatedText;
    } catch (error: any) {
      console.error('Error translating text:', error);
      throw new Error(`Failed to translate text: ${error.message || 'Unknown error'}`);
    }
  }

  async translateImage(base64Image: string, targetLang: string = 'vietnamese'): Promise<string> {
    try {
      // Remove the data URL prefix if present
      const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '');
      
      // Create the prompt for both extraction and translation
      const prompt = `Please extract all text from this image and translate it to ${targetLang}. 
      Get only the main content, ignore ads, banners, and other non-content elements. 
      Return only the translated text without any additional formatting or explanation.`;

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
      const translatedText = response.text();
      
      if (!translatedText) {
        throw new Error('No text extracted and translated from image');
      }

      return translatedText;
    } catch (error: any) {
      console.error('Error translating image:', error);
      if (error.message?.includes('404')) {
        throw new Error('API endpoint not found. Please check your API key and endpoint configuration.');
      }
      throw new Error(`Failed to translate image: ${error.message || 'Unknown error'}`);
    }
  }

  async summarizeText(text: string, targetLang: string = 'vietnamese'): Promise<string> {
    try {
      const languagePrompts: { [key: string]: string } = {
        vietnamese: 'Hãy tóm tắt nội dung sau bằng tiếng Việt một cách ngắn gọn và dễ hiểu:',
        english: 'Please summarize the following content in English in a concise and clear way:',
        japanese: '以下の内容を日本語で簡潔に要約してください：',
        korean: '다음 내용을 한국어로 간단히 요약해 주세요:',
        chinese: '请用中文简明扼要地总结以下内容：',
        french: 'Veuillez résumer le contenu suivant en français de manière concise et claire :',
        german: 'Bitte fassen Sie den folgenden Inhalt auf Deutsch kurz und prägnant zusammen:',
        spanish: 'Por favor, resuma el siguiente contenido en español de manera concisa y clara:',
        russian: 'Пожалуйста, кратко и четко обобщите следующее содержание на русском языке:',
        portuguese: 'Por favor, resuma o seguinte conteúdo em português de forma concisa e clara:',
        italian: 'Si prega di riassumere il seguente contenuto in italiano in modo conciso e chiaro:',
        dutch: 'Vat de volgende inhoud samen in het Nederlands op een beknopte en duidelijke manier:',
        polish: 'Proszę streścić następującą treść po polsku w zwięzły i jasny sposób:',
        arabic: 'يرجى تلخيص المحتوى التالي باللغة العربية بشكل موجز وواضح:',
        hindi: 'कृपया निम्नलिखित सामग्री को हिंदी में संक्षिप्त और स्पष्ट रूप से सारांशित करें:'
      };

      const prompt = `${languagePrompts[targetLang] || languagePrompts['vietnamese']}

${text}

Tóm tắt nên bao gồm:
1. Ý chính của nội dung
2. Các điểm quan trọng
3. Kết luận (nếu có)`;

      const result = await this.model.generateContent(prompt);
      if (!result || !result.response) {
        throw new Error('No response from Gemini API');
      }

      const response = await result.response;
      const summary = response.text();
      
      if (!summary) {
        throw new Error('No summary generated');
      }

      return summary;
    } catch (error: any) {
      console.error('Error summarizing text:', error);
      throw new Error(`Failed to summarize text: ${error.message || 'Unknown error'}`);
    }
  }

  async detectIntent(message: string): Promise<[string, string]> {
    try {
      const prompt = `You are an intent detection system. Analyze the user's message and return an array with two elements:
1. The intent: one of these values
- translate: if user wants to translate content
- summarize: if user wants to summarize content
- explain_code: if user wants to explain code
- chat: for general chat or other requests

2. The target language: 
- english: if user wants English
- vietnamese: if user wants Vietnamese
- japanese: if user wants Japanese
- korean: if user wants Korean
- chinese: if user wants Chinese
- french: if user wants French
- german: if user wants German
- spanish: if user wants Spanish
- russian: if user wants Russian
- portuguese: if user wants Portuguese
- italian: if user wants Italian
- dutch: if user wants Dutch
- polish: if user wants Polish
- arabic: if user wants Arabic
- hindi: if user wants Hindi
- none: for non-translation/summarization intents

Return ONLY the array in this format without any explanation:
["intent", "language"]

Examples:
"dịch trang web này sang tiếng anh" -> ["translate", "english"]
"translate this to english" -> ["translate", "english"]
"dịch sang tiếng Nhật" -> ["translate", "japanese"]
"translate to japanese" -> ["translate", "japanese"]
"dịch giúp mình trang này" -> ["translate", "vietnamese"]
"tóm tắt nội dung trang này" -> ["summarize", "vietnamese"]
"summarize this page in English" -> ["summarize", "english"]
"tóm tắt trang này bằng tiếng Nhật" -> ["summarize", "japanese"]
"giải thích code trong trang" -> ["explain_code", "none"]
"thời tiết hôm nay thế nào" -> ["chat", "none"]

User message: ${message}`;

      const result = await this.model.generateContent(prompt);
      if (!result || !result.response) {
        throw new Error('No response from Gemini API');
      }

      const response = await result.response;
      const text = response.text();
      
      if (!text) {
        throw new Error('No intent detected');
      }

      try {
        // text result can be: ```json["intent", "language"]```
        // so we need to remove the ```json and ```
        const jsonText = text.trim().replace(/^```json/, '').replace(/```$/, '');
        const [intent, language] = JSON.parse(jsonText.trim());
        console.log('Intent:', intent, 'Language:', language);
        return [intent, language];
      } catch (e) {
        console.error('Error parsing intent response:', e);
        return ['chat', 'none'];
      }
    } catch (error: any) {
      console.error('Error detecting intent:', error);
      throw new Error(`Failed to detect intent: ${error.message || 'Unknown error'}`);
    }
  }

  async summarizeImage(base64Image: string, targetLang: string = 'vietnamese'): Promise<string> {
    try {
      // Remove the data URL prefix if present
      const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '');
      
      const languagePrompts: { [key: string]: string } = {
        vietnamese: 'Hãy tóm tắt nội dung sau bằng tiếng Việt một cách ngắn gọn và dễ hiểu:',
        english: 'Please summarize the following content in English in a concise and clear way:',
        japanese: '以下の内容を日本語で簡潔に要約してください：',
        korean: '다음 내용을 한국어로 간단히 요약해 주세요:',
        chinese: '请用中文简明扼要地总结以下内容：',
        french: 'Veuillez résumer le contenu suivant en français de manière concise et claire :',
        german: 'Bitte fassen Sie den folgenden Inhalt auf Deutsch kurz und prägnant zusammen:',
        spanish: 'Por favor, resuma el siguiente contenido en español de manera concisa y clara:',
        russian: 'Пожалуйста, кратко и четко обобщите следующее содержание на русском языке:',
        portuguese: 'Por favor, resuma o seguinte conteúdo em português de forma concisa e clara:',
        italian: 'Si prega di riassumere il seguente contenuto in italiano in modo conciso e chiaro:',
        dutch: 'Vat de volgende inhoud samen in het Nederlands op een beknopte en duidelijke manier:',
        polish: 'Proszę streścić następującą treść po polsku w zwięzły i jasny sposób:',
        arabic: 'يرجى تلخيص المحتوى التالي باللغة العربية بشكل موجز وواضح:',
        hindi: 'कृपया निम्नलिखित सामग्री को हिंदी में संक्षिप्त और स्पष्ट रूप से सारांशित करें:'
      };

      // Create the prompt for both extraction and summarization
      const prompt = `${languagePrompts[targetLang] || languagePrompts['vietnamese']}

Please extract and summarize the main content from this image, ignoring ads, banners, and other non-content elements.

Tóm tắt nên bao gồm:
1. Ý chính của nội dung
2. Các điểm quan trọng
3. Kết luận (nếu có)`;

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
      const summary = response.text();
      
      if (!summary) {
        throw new Error('No text extracted and summarized from image');
      }

      return summary;
    } catch (error: any) {
      console.error('Error summarizing image:', error);
      if (error.message?.includes('404')) {
        throw new Error('API endpoint not found. Please check your API key and endpoint configuration.');
      }
      throw new Error(`Failed to summarize image: ${error.message || 'Unknown error'}`);
    }
  }

  async chat(systemMessage: string, userMessage: string): Promise<string> {
    try {
      const prompt = `${systemMessage}

User: ${userMessage}

Please provide a helpful response in Vietnamese.`;

      const result = await this.model.generateContent(prompt);
      if (!result || !result.response) {
        throw new Error('No response from Gemini API');
      }

      const response = await result.response;
      const text = response.text();
      
      if (!text) {
        throw new Error('No response generated');
      }

      return text;
    } catch (error: any) {
      console.error('Error in chat:', error);
      throw new Error(`Failed to generate chat response: ${error.message || 'Unknown error'}`);
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