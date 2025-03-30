import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ChatGPTService {
  private apiKey = environment.openaiApiKey;
  private apiUrl = environment.apiUrl;
  private messages = new BehaviorSubject<ChatMessage[]>([]);
  private model = 'gpt-3.5-turbo';

  constructor(private http: HttpClient) {
    console.log('ChatGPT Service initialized with API key:', this.apiKey ? 'Present' : 'Missing');
  }

  getMessages(): Observable<ChatMessage[]> {
    return this.messages.asObservable();
  }

  sendMessage(content: string, context?: string): Observable<any> {
    if (!this.apiKey) {
      console.error('OpenAI API key is missing');
      return throwError(() => new Error('OpenAI API key is missing'));
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const messages = [
      { role: 'system', content: 'You are a helpful assistant that helps users understand web content.' },
      ...this.messages.value.map(msg => ({ role: msg.role, content: msg.content })),
      { role: 'user', content: context ? `Context: ${context}\n\nQuestion: ${content}` : content }
    ];

    const body = {
      model: 'gpt-3.5-turbo',
      messages: messages,
      temperature: 0.7,
      max_tokens: 500
    };

    console.log('Sending request to OpenAI:', {
      url: this.apiUrl,
      headers: headers.keys(),
      body: body
    });

    return this.http.post(this.apiUrl, body, { headers }).pipe(
      catchError(error => {
        console.error('OpenAI API error:', error);
        return throwError(() => error);
      })
    );
  }

  summarizeWithAI(content: string): Observable<any> {
    const prompt = `Hãy tóm tắt nội dung sau bằng tiếng Việt một cách ngắn gọn và dễ hiểu:

${content}

Tóm tắt nên bao gồm:
1. Ý chính của nội dung
2. Các điểm quan trọng
3. Kết luận (nếu có)`;
    return this.sendMessage(prompt);
  }

  translateWithAI(url: string, targetLang: string = 'vietnamese'): Observable<any> {
    // Get the current page content
    const pageContent = document.body.innerText || document.body.textContent || '';
    
    let systemMessage = `You are a translator. Translate the following content to ${targetLang} for this URL: ${url}. Only return the translated text without any explanations:
    ${pageContent}`;

    return this.sendMessage(systemMessage);
  }

  explainCodeWithAI(code: string): Observable<any> {
    const prompt = `Hãy giải thích đoạn code sau bằng tiếng Việt một cách dễ hiểu:

\`\`\`
${code}
\`\`\`

Giải thích nên bao gồm:
1. Mục đích của đoạn code
2. Cách hoạt động
3. Các điểm quan trọng cần lưu ý
4. Gợi ý cải thiện (nếu có)`;
    return this.sendMessage(prompt);
  }

  searchWithAI(query: string): Observable<any> {
    const prompt = `Hãy giúp tôi tìm kiếm thông tin về: "${query}"

Yêu cầu:
1. Gợi ý các từ khóa liên quan
2. Đề xuất cách tìm kiếm hiệu quả
3. Liệt kê các chủ đề liên quan
4. Gợi ý nguồn tham khảo đáng tin cậy`;
    return this.sendMessage(prompt);
  }

  addMessage(message: ChatMessage) {
    const currentMessages = this.messages.value;
    this.messages.next([...currentMessages, message]);
  }

  clearMessages() {
    this.messages.next([]);
  }

  chat(systemMessage: string, userMessage: string): Observable<any> {
    if (!this.apiKey) {
      console.error('OpenAI API key is missing');
      return throwError(() => new Error('OpenAI API key is missing'));
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      model: this.model,
      messages: [
        {
          role: 'system',
          content: systemMessage
        },
        {
          role: 'user',
          content: userMessage
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    };

    return this.http.post(this.apiUrl, body, { headers }).pipe(
      catchError(error => {
        console.error('OpenAI API error:', error);
        return throwError(() => error);
      })
    );
  }

  detectIntent(message: string): Observable<any> {
    if (!this.apiKey) {
      console.error('OpenAI API key is missing');
      return throwError(() => new Error('OpenAI API key is missing'));
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      model: this.model,
      messages: [
        {
          role: 'system',
          content: `You are an intent detection system. Analyze the user's message and return an array with two elements:
1. The intent: one of these values
- translate: if user wants to translate content
- summarize: if user wants to summarize content
- explain_code: if user wants to explain code
- chat: for general chat or other requests

2. The target language (only for translate intent): 
- english: if user wants English translation
- vietnamese: if user wants Vietnamese translation
- japanese: if user wants Japanese translation

Return ONLY the array in this format without any explanation:
["intent", "language"]

For non-translate intents, return "none" as language.

Examples:
"dịch trang web này sang tiếng anh" -> ["translate", "english"]
"translate this to english" -> ["translate", "english"]
"dịch sang tiếng Nhật" -> ["translate", "japanese"]
"translate to japanese" -> ["translate", "japanese"]
"dịch giúp mình trang này" -> ["translate", "vietnamese"]
"tóm tắt nội dung trang này" -> ["summarize", "none"]
"giải thích code trong trang" -> ["explain_code", "none"]
"thời tiết hôm nay thế nào" -> ["chat", "none"]`
        },
        { role: 'user', content: message }
      ],
      temperature: 0,
      max_tokens: 10
    };

    return this.http.post(this.apiUrl, body, { headers }).pipe(
      catchError(error => {
        console.error('OpenAI API error:', error);
        return throwError(() => error);
      })
    );
  }

  extractTextFromImage(base64Image: string): Observable<any> {
    const prompt = `Please extract all text from this image, get only the main content, ignore ads, banners, and other non-content elements. Return only the extracted text without any additional formatting or explanation.`;
    return this.sendMessageWithImage(prompt, base64Image);
  }

  translateText(text: string, targetLang: string): Observable<any> {
    const prompt = `Translate the following text to ${targetLang}. Return only the translation without any additional formatting or explanation:\n\n${text}`;
    return this.sendMessage(prompt);
  }

  private sendMessageWithImage(prompt: string, base64Image: string): Observable<any> {
    const messages = [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: prompt
          },
          {
            type: 'image_url',
            image_url: {
              url: base64Image
            }
          }
        ]
      }
    ];

    return this.http.post<any>(this.apiUrl, {
      model: 'gpt-4-turbo',
      messages: messages,
      max_tokens: 4096
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      }
    });
  }
} 