import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, OnDestroy, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChatGPTService, ChatMessage } from '../../services/chatgpt.service';
import { ScreenshotService } from '../../services/screenshot.service';
import { GoogleAIService } from '../../services/google-ai.service';
import { Subscription } from 'rxjs';
import { ClipboardService } from '../../services/clipboard.service';
import { Menu, MenuItem } from '@electron/remote';

interface Action {
  id: string;
  icon: string;
  label: string;
  description: string;
}

interface AppState {
  app: {
    currentTab?: {
      url?: string;
      id?: string;
    };
  };
}

@Component({
  selector: 'app-ai-assistant',
  templateUrl: './ai-assistant.component.html',
  styleUrls: ['./ai-assistant.component.scss']
})
export class AIAssistantComponent implements OnInit, AfterViewChecked, OnDestroy, AfterViewInit {
  @ViewChild('messageContainer') private messageContainer!: ElementRef;
  @ViewChild('webview') private webview!: ElementRef;
  @ViewChild('messageInput') private messageInput!: ElementRef;
  
  private subscription: Subscription | null = null;
  messages: ChatMessage[] = [];
  newMessage = '';
  isLoading = false;
  isOpen = false;
  isDropdownOpen = false;
  error: string | null = null;
  currentUrl = '';
  currentAction = 'chat';
  currentTab: any = null;
  selectedModel = 'gpt-4';

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
    private store: Store<AppState>,
    private screenshotService: ScreenshotService,
    private googleAIService: GoogleAIService,
    private clipboardService: ClipboardService
  ) {
    // Listen for storage changes to update API keys
    window.addEventListener('storage', (e) => {
      if (e.key === 'apiKeys') {
        this.chatGPTService.updateApiKey();
        this.googleAIService.updateApiKey();
      }
    });
  }

  ngOnInit() {
    // Subscribe to URL changes from store
    this.store.select(state => state.app.currentTab?.url).subscribe(url => {
      console.log('Current URL:', url);
      if (url) {
        this.currentUrl = url;
      }
    });

    // Subscribe to current tab changes
    this.store.select(state => state.app.currentTab).subscribe(tab => {
      if (tab) {
        this.currentTab = tab;
      }
    });

    // Add context menu event listener
    setTimeout(() => {
      const textarea = document.querySelector('.input-container textarea');
      if (textarea) {
        textarea.addEventListener('contextmenu', (e: any) => {
          e.preventDefault();
          const menu = new Menu();
          menu.append(new MenuItem({
            label: 'Copy',
            click: () => {
              const selectedText = (textarea as HTMLTextAreaElement).value.substring(
                (textarea as HTMLTextAreaElement).selectionStart,
                (textarea as HTMLTextAreaElement).selectionEnd
              );
              if (selectedText) {
                navigator.clipboard.writeText(selectedText);
              }
            }
          }));
          menu.append(new MenuItem({
            label: 'Paste',
            click: () => {
              navigator.clipboard.readText().then(text => {
                const textareaEl = textarea as HTMLTextAreaElement;
                const start = textareaEl.selectionStart;
                const end = textareaEl.selectionEnd;
                this.newMessage = this.newMessage.substring(0, start) + text + this.newMessage.substring(end);
                setTimeout(() => {
                  textareaEl.selectionStart = textareaEl.selectionEnd = start + text.length;
                });
              });
            }
          }));
          menu.popup({ x: e.clientX, y: e.clientY });
        });
      }
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngAfterViewInit() {
    // Set up clipboard functionality for the textarea
    setTimeout(() => {
      const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
      if (textarea) {
        // Set up keyboard shortcuts
        this.clipboardService.setupKeyboardShortcuts(textarea, (newValue: string) => {
          this.newMessage = newValue;
        });

        // Set up context menu
        this.clipboardService.setupContextMenu(textarea, (newValue: string) => {
          this.newMessage = newValue;
        });
      }
    });
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
    console.log('handleInputEnter called');
    await this.processUserInput();
  }

  async handleButtonClick() {
    console.log('handleButtonClick called');
    await this.processUserInput();
  }

  private async processUserInput() {
    console.log('processUserInput called');
    if (!this.newMessage.trim()) return;

    const message = this.newMessage.trim();
    console.log('Processing message:', message);
    this.addUserMessage(message);
    this.newMessage = '';
    this.isLoading = true;

    console.log('Processing with URL:', this.currentUrl);

    try {
      // First detect the intent
      const [intent, targetLang] = await this.googleAIService.detectIntent(message);
      console.log('Detected intent:', intent, 'targetLang:', targetLang);

      // Handle translation intent
      if (intent === 'translate') {
        if (!this.currentUrl) {
          throw new Error('Không thể lấy được URL của trang hiện tại');
        }

        // Get the current webview
        const webview = document.querySelector(`webview#webview-${this.currentTab.id}`) as Electron.WebviewTag;
        if (!webview) {
          throw new Error('Không tìm thấy webview cho tab hiện tại');
        }

        // Capture the page using the screenshot service
        const base64Image = await this.screenshotService.captureFullPage(webview);

        // Extract text using Google AI
        const extractedText = await this.googleAIService.extractTextFromImage(base64Image);

        // Then, translate the extracted text using Google AI
        const translatedText = await this.googleAIService.translateText(extractedText, targetLang || 'vietnamese');

        // Add the translation result
        this.addAssistantMessage(translatedText);
        return;
      }

      // Handle summarize intent
      if (intent === 'summarize') {
        if (!this.currentUrl) {
          throw new Error('Không thể lấy được URL của trang hiện tại');
        }

        // Get the current webview
        const webview = document.querySelector(`webview#webview-${this.currentTab.id}`) as Electron.WebviewTag;
        if (!webview) {
          throw new Error('Không tìm thấy webview cho tab hiện tại');
        }

        // Capture the page using the screenshot service
        const base64Image = await this.screenshotService.captureFullPage(webview);

        // Extract text using Google AI
        const extractedText = await this.googleAIService.extractTextFromImage(base64Image);

        // Then, summarize the extracted text using Google AI
        const summarizedText = await this.googleAIService.summarizeText(extractedText, targetLang || 'vietnamese');

        // Add the summary result
        this.addAssistantMessage(summarizedText);
        return;
      }

      // Handle explain_code intent
      if (intent === 'explain_code') {
        if (!this.currentUrl) {
          throw new Error('Không thể lấy được URL của trang hiện tại');
        }

        const response = await this.chatGPTService.explainCodeWithAI(this.currentUrl).toPromise();
        if (response && response.choices && response.choices[0]) {
          this.addAssistantMessage(response.choices[0].message.content);
        }
        return;
      }

      // For regular chat, just use the original message with ChatGPT
      console.log('Processing as regular chat');
      const response = await this.chatGPTService.chat('You are a helpful assistant. Please respond in Vietnamese.', message).toPromise();
      if (response && response.choices && response.choices[0]) {
        this.addAssistantMessage(response.choices[0].message.content);
      }
    } catch (error) {
      console.error('Error:', error);
      this.error = 'Có lỗi xảy ra khi xử lý yêu cầu của bạn';
    } finally {
      this.isLoading = false;
    }
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

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
} 