import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChatGPTService, ChatMessage } from '../../services/chatgpt.service';
import { State } from '../../reducers';
import { switchMap } from 'rxjs/operators';

interface Action {
  id: string;
  icon: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-ai-assistant',
  templateUrl: './ai-assistant.component.html',
  styleUrls: ['./ai-assistant.component.scss']
})
export class AIAssistantComponent implements OnInit, AfterViewChecked {
  @ViewChild('messageContainer') private messageContainer!: ElementRef;
  @ViewChild('webview') private webview!: ElementRef;
  
  messages: ChatMessage[] = [];
  newMessage: string = '';
  isLoading: boolean = false;
  isOpen: boolean = false;
  isDropdownOpen: boolean = false;
  error: string | null = null;
  currentUrl: string = '';
  currentAction: string = 'chat';

  actions: Action[] = [
    { 
      id: 'chat', 
      icon: 'bi-chat', 
      label: 'Chat với AI',
      description: 'Trò chuyện tự nhiên với AI về mọi chủ đề'
    },
    { 
      id: 'summarize', 
      icon: 'bi-file-text', 
      label: 'Tóm tắt với AI',
      description: 'Tóm tắt nội dung trang web hiện tại'
    },
    { 
      id: 'translate', 
      icon: 'bi-translate', 
      label: 'Dịch với AI',
      description: 'Dịch nội dung trang web hiện tại'
    },
    { 
      id: 'explain', 
      icon: 'bi-code-slash', 
      label: 'Giải thích code với AI',
      description: 'Phân tích và giải thích code trên trang'
    },
    { 
      id: 'search', 
      icon: 'bi-search', 
      label: 'Tìm kiếm với AI',
      description: 'Tìm kiếm thông minh với gợi ý từ AI'
    }
  ];

  constructor(
    private chatGPTService: ChatGPTService,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.chatGPTService.getMessages().subscribe(messages => {
      this.messages = messages;
    });

    // Subscribe to URL changes from store
    this.store.select(state => state.app.currentTab?.url).subscribe(url => {
      console.log('Current URL:', url); // Debug log
      if (url) {
        this.currentUrl = url;
      }
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  toggleAssistant() {
    this.isOpen = !this.isOpen;
    this.error = null;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  async handleAction(actionId: string) {
    this.currentAction = actionId;
    this.isDropdownOpen = false; // Close dropdown after selection
    this.error = null;

    if (['summarize', 'translate', 'explain'].includes(actionId)) {
      if (!this.currentUrl) {
        this.error = 'Không thể lấy được URL của trang hiện tại';
        return;
      }

      this.isLoading = true;
      try {
        let response;
        switch(actionId) {
          case 'summarize':
            response = await this.chatGPTService.summarizeWithAI(this.currentUrl).toPromise();
            break;
          case 'translate':
            response = await this.chatGPTService.translateWithAI(this.currentUrl).toPromise();
            break;
          case 'explain':
            response = await this.chatGPTService.explainCodeWithAI(this.currentUrl).toPromise();
            break;
        }

        if (response && response.choices && response.choices[0]) {
          this.addAssistantMessage(response.choices[0].message.content);
        }
      } catch (error: any) {
        this.handleError(error);
      } finally {
        this.isLoading = false;
      }
      return;
    }

    // Handle other actions (search, chat)
    if (actionId === 'search') {
      if (!this.newMessage) {
        this.addAssistantMessage('Vui lòng nhập từ khóa tìm kiếm.');
        return;
      }
      this.isLoading = true;
      try {
        const response = await this.chatGPTService.searchWithAI(this.newMessage).toPromise();
        if (response && response.choices && response.choices[0]) {
          this.addAssistantMessage(response.choices[0].message.content);
        }
      } catch (error: any) {
        this.handleError(error);
      } finally {
        this.isLoading = false;
      }
    }
  }

  async sendMessage() {
    if (!this.newMessage.trim() || this.isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: this.newMessage,
      timestamp: new Date()
    };

    this.chatGPTService.addMessage(userMessage);
    this.isLoading = true;
    this.error = null;
    const messageText = this.newMessage;
    this.newMessage = '';

    try {
      const response = await this.chatGPTService.sendMessage(messageText).toPromise();
      if (response && response.choices && response.choices[0]) {
        const assistantMessage: ChatMessage = {
          role: 'assistant',
          content: response.choices[0].message.content,
          timestamp: new Date()
        };
        this.chatGPTService.addMessage(assistantMessage);
      }
    } catch (error: any) {
      this.handleError(error);
    } finally {
      this.isLoading = false;
    }
  }

  addAssistantMessage(content: string) {
    this.messages.push({
      role: 'assistant',
      content,
      timestamp: new Date()
    });
    this.scrollToBottom();
  }

  addUserMessage(content: string) {
    this.messages.push({
      role: 'user',
      content,
      timestamp: new Date()
    });
    this.scrollToBottom();
  }

  private handleError(error: any) {
    console.error('Error:', error);
    this.error = error.message || 'Đã xảy ra lỗi. Vui lòng thử lại.';
    const errorMessage: ChatMessage = {
      role: 'assistant',
      content: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại.',
      timestamp: new Date()
    };
    this.chatGPTService.addMessage(errorMessage);
  }

  private scrollToBottom(): void {
    try {
      this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  clearChat() {
    this.chatGPTService.clearMessages();
    this.error = null;
  }

  getPlaceholder(): string {
    return this.currentAction === 'search' ? 'Nhập từ khóa tìm kiếm...' : 'Nhập tin nhắn...';
  }

  async handleInputEnter() {
    if (!this.newMessage.trim()) return;

    const message = this.newMessage.trim();
    this.addUserMessage(message);
    this.newMessage = '';
    this.isLoading = true;

    console.log('Processing with URL:', this.currentUrl); // Debug log

    // First detect the intent
    this.chatGPTService.detectIntent(message).pipe(
      switchMap(response => {
        console.log('Raw response:', response); // Log entire response
        console.log('Intent response:', response.choices[0].message.content); // Debug log
        let intent, targetLang;
        try {
          const intentResponse = response.choices[0].message.content.trim();
          console.log('Intent string:', intentResponse);
          [intent, targetLang] = JSON.parse(intentResponse);
        } catch (e) {
          console.error('Error parsing intent:', e);
          intent = 'chat';
          targetLang = 'none';
        }
        console.log('Parsed intent:', intent, 'targetLang:', targetLang); // Debug log
        
        // Get current page content if needed
        if (['translate', 'summarize', 'explain_code'].includes(intent)) {
          if (!this.currentUrl) {
            throw new Error('Không thể lấy được URL của trang hiện tại');
          }
          console.log('Processing URL:', this.currentUrl); // Debug log
          
          switch(intent) {
            case 'translate':
              return this.chatGPTService.translateWithAI(this.currentUrl, targetLang);
            case 'summarize':
              return this.chatGPTService.summarizeWithAI(this.currentUrl);
            case 'explain_code':
              return this.chatGPTService.explainCodeWithAI(this.currentUrl);
            default:
              throw new Error('Invalid intent');
          }
        }

        // For regular chat, just use the original message
        console.log('Processing as regular chat'); // Debug log
        return this.chatGPTService.chat('You are a helpful assistant. Please respond in Vietnamese.', message);
      })
    ).subscribe({
      next: (response) => {
        console.log('Final response:', response); // Log the final response
        const assistantMessage = response.choices[0].message.content;
        this.addAssistantMessage(assistantMessage);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error:', error);
        this.error = 'Có lỗi xảy ra khi xử lý yêu cầu của bạn';
        this.isLoading = false;
      }
    });
  }

  getButtonIcon(): string {
    return this.currentAction === 'chat' ? 'bi-send' : 'bi-search';
  }

  getCurrentActionLabel(): string {
    const action = this.actions.find(a => a.id === this.currentAction);
    return action ? action.label : '';
  }

  getCurrentActionDescription(): string {
    const action = this.actions.find(a => a.id === this.currentAction);
    return action ? action.description : '';
  }

  getCurrentActionIcon(): string {
    const action = this.actions.find(a => a.id === this.currentAction);
    return action ? action.icon : 'bi-chat';
  }
} 