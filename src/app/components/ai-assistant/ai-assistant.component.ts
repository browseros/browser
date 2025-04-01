import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChatGPTService } from '../../services/chatgpt.service';
import { ScreenshotService } from '../../services/screenshot.service';
import { GoogleAIService } from '../../services/google-ai.service';
import { Subscription } from 'rxjs';
import { ClipboardService } from '../../services/clipboard.service';
import { Menu, MenuItem } from '@electron/remote';
import { marked } from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AIAssistantService, ImageToChat, ChatMessage } from '../../services/ai-assistant.service';

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
  pendingImage: ImageToChat | null = null;

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
    private clipboardService: ClipboardService,
    private sanitizer: DomSanitizer,
    private aiAssistantService: AIAssistantService,
    private changeDetectorRef: ChangeDetectorRef
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

    // Subscribe to panel visibility
    this.subscription = new Subscription();
    this.subscription.add(
      this.aiAssistantService.isOpen$.subscribe(isOpen => {
        this.isOpen = isOpen;
        if (isOpen) {
          // When panel opens, focus the textarea
          setTimeout(() => {
            const textarea = document.querySelector('.input-container textarea');
            if (textarea) {
              (textarea as HTMLTextAreaElement).focus();
            }
          });
        }
      })
    );

    // Subscribe to image events
    this.subscription.add(
      this.aiAssistantService.image$.subscribe((image: ImageToChat) => {
        console.log('Received image:', image);
        this.pendingImage = image;
        // Force change detection
        this.changeDetectorRef.detectChanges();
      })
    );

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
      const textarea = document.querySelector('.input-container textarea') as HTMLTextAreaElement;
      if (textarea) {
        // Set up keyboard shortcuts with image paste support
        this.clipboardService.setupKeyboardShortcuts(
          textarea, 
          (newValue: string) => {
            this.newMessage = newValue;
          },
          (imageUrl: string) => {
            this.aiAssistantService.addImageToChat({
              imageUrl: imageUrl,
              srcUrl: 'Pasted image'
            });
          }
        );

        // Set up context menu with image paste support
        this.clipboardService.setupContextMenu(
          textarea, 
          (newValue: string) => {
            this.newMessage = newValue;
          },
          (imageUrl: string) => {
            this.aiAssistantService.addImageToChat({
              imageUrl: imageUrl,
              srcUrl: 'Pasted image'
            });
          }
        );
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
      // Add processing message
      this.addAssistantMessage('Đang xử lý yêu cầu của bạn...');

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

        // Remove processing message
        this.messages.pop();

        if (response && response.choices && response.choices[0]) {
          this.addAssistantMessage(response.choices[0].message.content);
        }
      } catch (error: any) {
        // Remove processing message on error
        this.messages.pop();
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
      // Add processing message
      this.addAssistantMessage('Đang xử lý yêu cầu của bạn...');

      try {
        const response = await this.chatGPTService.searchWithAI(this.newMessage).toPromise();
        // Remove processing message
        this.messages.pop();
        if (response && response.choices && response.choices[0]) {
          this.addAssistantMessage(response.choices[0].message.content);
        }
      } catch (error: any) {
        // Remove processing message on error
        this.messages.pop();
        this.handleError(error);
      } finally {
        this.isLoading = false;
      }
    }
  }

  async sendMessage() {
    if (!this.newMessage.trim() && !this.pendingImage) {
      return;
    }

    // Add user message with image if exists
    const userMessage: ChatMessage = {
      type: this.pendingImage ? 'image' : 'text',
      content: this.newMessage,
      imageUrl: this.pendingImage?.imageUrl,
      srcUrl: this.pendingImage?.srcUrl,
      isUser: true,
      timestamp: new Date()
    };
    this.messages.push(userMessage);

    const messageToSend = this.newMessage;
    this.newMessage = '';
    this.isLoading = true;

    try {
      // Call AI service with text and pending image
      const response = await this.aiAssistantService.sendMessage(messageToSend, this.pendingImage ? userMessage : null);
      
      // Add AI response
      const aiMessage: ChatMessage = {
        type: 'text',
        content: response,
        isUser: false,
        timestamp: new Date(),
        htmlContent: this.sanitizer.bypassSecurityTrustHtml(response)
      };
      this.messages.push(aiMessage);

      // Clear pending image after sending
      this.pendingImage = null;
    } catch (error) {
      this.error = 'Failed to get response from AI';
      console.error('Error sending message:', error);
    } finally {
      this.isLoading = false;
    }
  }

  async addAssistantMessage(content: string) {
    // Convert markdown to HTML and sanitize
    const htmlContent = await marked(content);
    const safeHtml = this.sanitizer.bypassSecurityTrustHtml(htmlContent);
    
    const message: ChatMessage = {
      type: 'text',
      content: content,
      htmlContent: safeHtml,
      isUser: false,
      timestamp: new Date()
    };
    this.messages.push(message);
    this.scrollToBottom();
  }

  addUserMessage(content: string) {
    const message: ChatMessage = {
      type: 'text',
      content,
      isUser: true,
      timestamp: new Date()
    };
    this.messages.push(message);
    this.scrollToBottom();
  }

  private handleError(error: any) {
    console.error('Error:', error);
    this.error = error.message || 'Đã xảy ra lỗi. Vui lòng thử lại.';
    const errorMessage: ChatMessage = {
      type: 'text',
      content: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại.',
      isUser: false,
      timestamp: new Date()
    };
    this.messages.push(errorMessage);
  }

  private scrollToBottom(): void {
    try {
      this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  clearChat() {
    this.messages = [];
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

    // Add processing message
    this.addAssistantMessage('Đang xử lý yêu cầu của bạn...');

    console.log('Processing with URL:', this.currentUrl);

    try {
      // First detect the intent
      const [intent, targetLang] = await this.googleAIService.detectIntent(message);
      console.log('Detected intent:', intent, 'targetLang:', targetLang);

      // Remove the processing message
      this.messages.pop();

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

        // Translate the image content directly using Google AI
        const translatedText = await this.googleAIService.translateImage(base64Image, targetLang || 'vietnamese');

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

        // Summarize the image content directly using Google AI
        const summarizedText = await this.googleAIService.summarizeImage(base64Image, targetLang || 'vietnamese');

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

      // For regular chat, just use the original message with Google AI
      console.log('Processing as regular chat');
      const response = await this.googleAIService.chat(
        'You are a helpful AI assistant that provides clear and accurate responses in Vietnamese.',
        message
      );
      this.addAssistantMessage(response);
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

  async copyMessage(content: string) {
    try {
      await navigator.clipboard.writeText(content);
      // Show a temporary success message
      const originalContent = this.newMessage;
      this.newMessage = 'Đã copy nội dung!';
      setTimeout(() => {
        this.newMessage = originalContent;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      this.error = 'Không thể copy nội dung. Vui lòng thử lại.';
    }
  }

  async shareMessage(content: string) {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Chia sẻ tin nhắn',
          text: content
        });
      } else {
        // Fallback to clipboard if Web Share API is not available
        await navigator.clipboard.writeText(content);
        const originalContent = this.newMessage;
        this.newMessage = 'Đã copy nội dung để chia sẻ!';
        setTimeout(() => {
          this.newMessage = originalContent;
        }, 2000);
      }
    } catch (err) {
      console.error('Failed to share text: ', err);
      this.error = 'Không thể chia sẻ nội dung. Vui lòng thử lại.';
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  showHelp() {
    // Create help dialog content
    const helpContent = [
      { 
        title: 'Chat with AI', 
        description: 'Have natural conversations with AI about any topic',
        examples: [
          'How does photosynthesis work?',
          'What are the best practices for React?',
          'Explain quantum computing'
        ]
      },
      { 
        title: 'Summarize Content', 
        description: 'Get AI-powered summaries of web pages',
        examples: [
          'Summarize this article',
          'Give me the key points',
          'What are the main ideas?'
        ]
      },
      { 
        title: 'Translate Content', 
        description: 'Translate web content using AI',
        examples: [
          'Translate this page to Vietnamese',
          'Translate the selected text to English',
          'What does this mean in French?'
        ]
      },
      { 
        title: 'Explain Code', 
        description: 'Get AI explanations of code on the page',
        examples: [
          'Explain this function',
          'How does this code work?',
          'What does this algorithm do?'
        ]
      },
      { 
        title: 'Smart Search', 
        description: 'Search with AI-powered suggestions',
        examples: [
          'Find articles about machine learning',
          'Search for React component examples',
          'Look up JavaScript best practices'
        ]
      }
    ];

    // Show help dialog
    const dialog = document.createElement('div');
    dialog.className = 'help-dialog';
    dialog.innerHTML = `
      <div class="help-content">
        <h2>AI Assistant Features</h2>
        <div class="help-items">
          ${helpContent.map(item => `
            <div class="help-item">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              <div class="examples">
                <h4>Example queries:</h4>
                <ul>
                  ${item.examples.map(example => `
                    <li>${example}</li>
                  `).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>
        <button class="close-help">Close</button>
      </div>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .help-dialog {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
      }
      .help-content {
        background: white;
        border-radius: 8px;
        padding: 24px;
        max-width: 500px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
      }
      .help-content h2 {
        margin: 0 0 16px;
        font-size: 20px;
        color: #212529;
      }
      .help-items {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .help-item {
        padding: 16px;
        background: #f8f9fa;
        border-radius: 6px;
      }
      .help-item h3 {
        margin: 0 0 8px;
        font-size: 16px;
        color: #212529;
      }
      .help-item p {
        margin: 0 0 12px;
        color: #6c757d;
      }
      .help-item .examples {
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid #dee2e6;
      }
      .help-item .examples h4 {
        font-size: 14px;
        color: #495057;
        margin: 0 0 8px;
      }
      .help-item .examples ul {
        margin: 0;
        padding-left: 20px;
      }
      .help-item .examples li {
        color: #6c757d;
        margin-bottom: 4px;
        font-size: 13px;
      }
      .close-help {
        display: block;
        width: 100%;
        padding: 8px;
        margin-top: 16px;
        border: none;
        background: #0d6efd;
        color: white;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.2s;
      }
      .close-help:hover {
        background: #0b5ed7;
      }
    `;

    dialog.appendChild(style);
    document.body.appendChild(dialog);

    // Handle close
    const closeBtn = dialog.querySelector('.close-help');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        document.body.removeChild(dialog);
      });
    }
  }

  close() {
    this.aiAssistantService.close();
  }

  async addImageMessage(imageUrl: string, content?: string) {
    // Convert content to HTML if it exists
    let htmlContent;
    if (content) {
      const markedContent = await marked(content);
      htmlContent = this.sanitizer.bypassSecurityTrustHtml(markedContent);
    }

    const message: ChatMessage = {
      type: 'image',
      imageUrl,
      content,
      htmlContent,
      isUser: true,
      timestamp: new Date()
    };
    this.messages.push(message);
    this.scrollToBottom();
  }

  hasImageToSend(): boolean {
    return this.pendingImage !== null;
  }

  clearPendingImage() {
    this.pendingImage = null;
  }

  openImage(imageUrl: string | undefined) {
    if (imageUrl) {
      window.open(imageUrl, '_blank');
    }
  }

  handleEnterKey(event: any) {
    if (!event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
} 