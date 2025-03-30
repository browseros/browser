import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ChatGPTService, ChatMessage } from '../../services/chatgpt.service';

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
  
  messages: ChatMessage[] = [];
  newMessage: string = '';
  isLoading: boolean = false;
  isOpen: boolean = false;
  error: string | null = null;
  selectedText: string = '';

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
      description: 'Tóm tắt nội dung được chọn một cách ngắn gọn'
    },
    { 
      id: 'translate', 
      icon: 'bi-translate', 
      label: 'Dịch với AI',
      description: 'Dịch nội dung sang ngôn ngữ khác'
    },
    { 
      id: 'explain', 
      icon: 'bi-code-slash', 
      label: 'Giải thích code với AI',
      description: 'Phân tích và giải thích đoạn code'
    },
    { 
      id: 'search', 
      icon: 'bi-search', 
      label: 'Tìm kiếm với AI',
      description: 'Tìm kiếm thông minh với gợi ý từ AI'
    }
  ];

  currentAction: string = 'chat';

  getCurrentActionLabel(): string {
    const action = this.actions.find(a => a.id === this.currentAction);
    return action ? action.label : '';
  }

  getCurrentActionDescription(): string {
    const action = this.actions.find(a => a.id === this.currentAction);
    return action ? action.description : '';
  }

  constructor(private chatGPTService: ChatGPTService) {}

  ngOnInit() {
    this.chatGPTService.getMessages().subscribe(messages => {
      this.messages = messages;
    });

    // Lắng nghe sự kiện chọn text
    document.addEventListener('mouseup', () => {
      const selection = window.getSelection();
      if (selection && selection.toString().trim()) {
        this.selectedText = selection.toString().trim();
        // Đảm bảo Angular detect được thay đổi
        this.error = null;
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

  async handleAction(actionId: string) {
    this.currentAction = actionId;
    this.error = null;

    // Kiểm tra lại điều kiện selectedText
    if (['summarize', 'translate', 'explain'].includes(actionId)) {
      if (!this.selectedText || this.selectedText.length === 0) {
        this.addAssistantMessage('Vui lòng chọn nội dung trên trang web trước khi sử dụng tính năng này.');
        return;
      }
    }

    this.isLoading = true;
    try {
      let response;
      switch(actionId) {
        case 'summarize':
          response = await this.chatGPTService.summarizeWithAI(this.selectedText).toPromise();
          break;
        case 'translate':
          response = await this.chatGPTService.translateWithAI(this.selectedText).toPromise();
          break;
        case 'explain':
          response = await this.chatGPTService.explainCodeWithAI(this.selectedText).toPromise();
          break;
        case 'search':
          if (!this.newMessage) {
            this.addAssistantMessage('Vui lòng nhập từ khóa tìm kiếm.');
            return;
          }
          response = await this.chatGPTService.searchWithAI(this.newMessage).toPromise();
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

  private addAssistantMessage(content: string) {
    const message: ChatMessage = {
      role: 'assistant',
      content: content,
      timestamp: new Date()
    };
    this.chatGPTService.addMessage(message);
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

  handleInputEnter(): void {
    if (this.currentAction === 'chat') {
      this.sendMessage();
    } else {
      this.handleAction(this.currentAction);
    }
  }

  handleButtonClick(): void {
    if (this.currentAction === 'chat') {
      this.sendMessage();
    } else {
      this.handleAction(this.currentAction);
    }
  }

  getButtonIcon(): string {
    return this.currentAction === 'chat' ? 'bi-send' : 'bi-search';
  }
} 