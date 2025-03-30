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
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private messages = new BehaviorSubject<ChatMessage[]>([]);

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

  translateWithAI(content: string, targetLang: string = 'Vietnamese'): Observable<any> {
    const prompt = `Hãy dịch nội dung sau sang ${targetLang} một cách tự nhiên và chính xác:

${content}

Yêu cầu:
1. Giữ nguyên ý nghĩa gốc
2. Sử dụng ngôn ngữ tự nhiên
3. Giải thích các thuật ngữ khó (nếu có)`;
    return this.sendMessage(prompt);
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
} 