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
import { I18nService } from '../../services/i18n.service';

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
  
  private subscription = new Subscription();
  messages: ChatMessage[] = [];
  newMessage = '';
  isLoading = false;
  isOpen = false;
  isDropdownOpen = false;
  error: string | null = null;
  currentUrl: string | null = null;
  currentAction: string | null = null;
  currentTab: any = null;
  selectedModel = 'gpt-4';
  pendingImage: ChatMessage | null = null;

  get actions(): Action[] {
    return [
    { 
      id: 'chat', 
      icon: 'bi-chat', 
      label: this.i18n.t('ai.action.chat'),
      description: this.i18n.t('ai.action.chatDesc')
    },
    { 
      id: 'summarize', 
      icon: 'bi-file-text', 
      label: this.i18n.t('ai.action.summarize'),
      description: this.i18n.t('ai.action.summarizeDesc')
    },
    { 
      id: 'translate', 
      icon: 'bi-translate', 
      label: this.i18n.t('ai.action.translate'),
      description: this.i18n.t('ai.action.translateDesc')
    },
    { 
      id: 'explain', 
      icon: 'bi-code-slash', 
      label: this.i18n.t('ai.action.explain'),
      description: this.i18n.t('ai.action.explainDesc')
    },
    { 
      id: 'search', 
      icon: 'bi-search', 
      label: this.i18n.t('ai.action.search'),
      description: this.i18n.t('ai.action.searchDesc')
    }
    ];
  }

  constructor(
    private chatGPTService: ChatGPTService,
    private store: Store<AppState>,
    private screenshotService: ScreenshotService,
    private googleAIService: GoogleAIService,
    private clipboardService: ClipboardService,
    private sanitizer: DomSanitizer,
    private aiAssistantService: AIAssistantService,
    private changeDetectorRef: ChangeDetectorRef,
    private i18n: I18nService
  ) {
    // Configure marked options
    marked.setOptions({
      breaks: true,
      gfm: true,
      pedantic: false
    });

    // Listen for storage changes to update API keys
    window.addEventListener('storage', (e) => {
      if (e.key === 'apiKeys') {
        this.chatGPTService.updateApiKey();
        this.googleAIService.updateApiKey();
      }
    });
  }

  ngOnInit() {
    // Subscribe to isOpen changes
    this.subscription.add(
      this.aiAssistantService.isOpen$.subscribe(isOpen => {
        this.isOpen = isOpen;
        if (isOpen) {
          setTimeout(() => {
            const textarea = document.querySelector('.input-container textarea');
            if (textarea) {
              (textarea as HTMLTextAreaElement).focus();
            }
          });
        }
      })
    );

    // Subscribe to image changes
    this.subscription.add(
      this.aiAssistantService.image$.subscribe(imageToChat => {
        if (imageToChat) {
          this.pendingImage = {
            type: 'image',
            content: '',
            imageUrl: imageToChat.imageUrl,
            srcUrl: imageToChat.srcUrl,
            isUser: true,
            timestamp: new Date()
          };
          this.changeDetectorRef.detectChanges();
        }
      })
    );

    // Subscribe to chat history changes
    this.subscription.add(
      this.aiAssistantService.chatHistory$.subscribe(history => {
        this.messages = history;
        this.scrollToBottom();
      })
    );

    // Subscribe to URL changes from store
    this.subscription.add(
      this.store.select(state => state.app.currentTab?.url).subscribe(url => {
        if (url) {
          this.currentUrl = url;
        }
      })
    );

    // Subscribe to current tab changes
    this.subscription.add(
      this.store.select(state => state.app.currentTab).subscribe(tab => {
        if (tab) {
          this.currentTab = tab;
        }
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
            label: this.i18n.t('ai.copy'),
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
            label: this.i18n.t('ai.paste'),
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
              srcUrl: this.i18n.t('ai.pastedImage')
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
              srcUrl: this.i18n.t('ai.pastedImage')
            });
          }
        );
      }

      // Set up context menu for chat messages
      const messagesContainer = document.querySelector('.messages');
      if (messagesContainer) {
        messagesContainer.addEventListener('contextmenu', (e: Event) => {
          const mouseEvent = e as MouseEvent;
          const target = mouseEvent.target as HTMLElement;
          
          // If right-clicking on an image, use the clipboard service's context menu
          if (target.tagName === 'IMG') {
            mouseEvent.preventDefault();
            this.clipboardService.setupContextMenu(
              textarea,
              (newValue: string) => {
                this.newMessage = newValue;
              },
              (imageUrl: string) => {
                this.aiAssistantService.addImageToChat({
                  imageUrl: imageUrl,
                  srcUrl: this.i18n.t('ai.pastedImage')
                });
              }
            );
          }
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

    // Create user message
    const userMessage: ChatMessage = {
      type: this.pendingImage ? 'image' : 'text',
      content: this.newMessage,
      imageUrl: this.pendingImage?.imageUrl,
      srcUrl: this.pendingImage?.srcUrl,
      isUser: true,
      timestamp: new Date()
    };

    // Add to service's chat history
    this.aiAssistantService.addToChatHistory(userMessage);

    const messageToSend = this.newMessage;
    this.newMessage = '';
    this.isLoading = true;

    // Add thinking message
    const thinkingMessage: ChatMessage = {
      type: 'text',
      content: '🤔 Đang suy nghĩ...',
      isUser: false,
      timestamp: new Date()
    };
    this.aiAssistantService.addToChatHistory(thinkingMessage);

    try {
      let response: string;
      
      // If there's a pending image, use the original flow
      if (this.pendingImage) {
        response = await this.aiAssistantService.sendMessage(messageToSend, userMessage);
      } else {
        // For text-only messages, check for intents
        const [intent, targetLang] = await this.googleAIService.detectIntent(messageToSend);
        console.log('Detected intent:', intent, 'targetLang:', targetLang);

        if (intent === 'translate') {
          if (!this.currentTab?.id) {
            throw new Error('Không thể lấy được tab hiện tại');
          }

          const webview = document.querySelector(`webview#webview-${this.currentTab.id}`) as Electron.WebviewTag;
          if (!webview) {
            throw new Error('Không tìm thấy webview cho tab hiện tại');
          }

          this.addAssistantMessage('Đang xử lý yêu cầu dịch của bạn...');

          try {
            const base64Image = await this.screenshotService.captureFullPage(webview);
            console.log('Captured screenshot for translation');

            response = await this.googleAIService.translateImage(base64Image, targetLang || 'english');
            
            this.messages.pop(); // Remove processing message
          } catch (error) {
            console.error('Translation error:', error);
            this.messages.pop(); // Remove processing message
            throw error;
          }
        } else if (intent === 'summarize') {
          if (!this.currentTab?.id) {
            throw new Error('Không thể lấy được tab hiện tại');
          }

          const webview = document.querySelector(`webview#webview-${this.currentTab.id}`) as Electron.WebviewTag;
          if (!webview) {
            throw new Error('Không tìm thấy webview cho tab hiện tại');
          }

          this.addAssistantMessage('Đang xử lý yêu cầu tóm tắt của bạn...');

          try {
            const base64Image = await this.screenshotService.captureFullPage(webview);
            console.log('Captured screenshot for summarization');

            response = await this.googleAIService.summarizeImage(base64Image, targetLang || 'vietnamese');
            
            this.messages.pop(); // Remove processing message
          } catch (error) {
            console.error('Summarization error:', error);
            this.messages.pop(); // Remove processing message
            throw error;
          }
        } else if (intent === 'capture' || intent === 'capture_full_page') {
          if (!this.currentTab?.id) {
            throw new Error('Không thể lấy được tab hiện tại');
          }

          const webview = document.querySelector(`webview#webview-${this.currentTab.id}`) as Electron.WebviewTag;
          if (!webview) {
            throw new Error('Không tìm thấy webview cho tab hiện tại');
          }

          this.addAssistantMessage('Đang chụp màn hình...');

          try {
            const base64Image = intent === 'capture_full_page' 
              ? await this.screenshotService.captureFullPage(webview)
              : await this.screenshotService.captureVisibleArea(webview);
            
            console.log('Captured screenshot for chat context');
            
            // Create a new message with the captured screenshot
            const autoImageMessage: ChatMessage = {
              type: 'image',
              content: messageToSend,
              imageUrl: base64Image,
              srcUrl: intent === 'capture_full_page' ? 'Full page screenshot' : 'Visible area screenshot',
              isUser: true,
              timestamp: new Date()
            };
            
            // Add the captured image to chat history
            this.aiAssistantService.addToChatHistory(autoImageMessage);
            
            // Send message with the captured screenshot
            response = await this.aiAssistantService.sendMessage(messageToSend, autoImageMessage);
            
            this.messages.pop(); // Remove processing message
          } catch (error) {
            console.error('Screenshot error:', error);
            this.messages.pop(); // Remove processing message
            throw error;
          }
        } else if (intent === 'enter_input') {
          if (!this.currentTab?.id) {
            throw new Error('Cannot get current tab');
          }

          this.addAssistantMessage('Đang xử lý yêu cầu điền input...');

          try {
            const result = await this.aiAssistantService.handleInputFilling(messageToSend, this.currentTab);
            if (result) {
              response = result;
            } else {
              throw new Error('Failed to fill input');
            }
          } catch (error) {
            console.error('Input filling error:', error);
            throw error;
          }
        } else {
          // For regular chat
          response = await this.aiAssistantService.sendMessage(messageToSend);
        }
      }

      // Remove thinking message
      this.aiAssistantService.removeFromChatHistory(thinkingMessage);

      // Convert markdown to HTML and sanitize
      const htmlContent = await marked(response);
      const safeHtml = this.sanitizer.bypassSecurityTrustHtml(htmlContent);

      // Add AI response
      const aiMessage: ChatMessage = {
        type: 'text',
        content: response,
        isUser: false,
        timestamp: new Date(),
        htmlContent: safeHtml
      };
      this.aiAssistantService.addToChatHistory(aiMessage);

      // Clear pending image after sending
      this.pendingImage = null;
    } catch (error: any) {
      // Remove thinking message on error
      this.aiAssistantService.removeFromChatHistory(thinkingMessage);

      this.error = `Error: ${error.message || 'Unknown error'}`;
      console.error('Error sending message:', error);

      // Add error message
      const errorMessage: ChatMessage = {
        type: 'text',
        content: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại.',
        isUser: false,
        timestamp: new Date()
      };
      this.aiAssistantService.addToChatHistory(errorMessage);
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
    this.aiAssistantService.addToChatHistory(message);
  }

  addUserMessage(content: string) {
    const message: ChatMessage = {
      type: 'text',
      content,
      isUser: true,
      timestamp: new Date()
    };
    this.aiAssistantService.addToChatHistory(message);
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
    this.aiAssistantService.addToChatHistory(errorMessage);
  }

  private scrollToBottom(): void {
    try {
      this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  clearChat() {
    this.messages = [];
    this.aiAssistantService.clearChatHistory();
    this.error = null;
  }

  getPlaceholder(): string {
    return this.currentAction === 'search' ? 'Nhập từ khóa tìm kiếm...' : 'Nhập tin nhắn...';
  }

  async handleInputEnter() {
    console.log('handleInputEnter called');
    await this.sendMessage();
  }

  async handleButtonClick() {
    console.log('handleButtonClick called');
    await this.sendMessage();
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
      this.newMessage = this.i18n.t('ai.copied');
      setTimeout(() => {
        this.newMessage = originalContent;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      this.error = this.i18n.t('ai.copyFailed');
    }
  }

  async shareMessage(content: string) {
    try {
      if (navigator.share) {
        await navigator.share({
          title: this.i18n.t('ai.shareTitle'),
          text: content
        });
      } else {
        // Fallback to clipboard if Web Share API is not available
        await navigator.clipboard.writeText(content);
        const originalContent = this.newMessage;
        this.newMessage = this.i18n.t('ai.shareCopied');
        setTimeout(() => {
          this.newMessage = originalContent;
        }, 2000);
      }
    } catch (err) {
      console.error('Failed to share text: ', err);
      this.error = this.i18n.t('ai.shareFailed');
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  showHelp() {
    // Create help dialog content
    const helpContent = [
      { 
        title: this.i18n.t('ai.help.chat.title'), 
        description: this.i18n.t('ai.help.chat.desc'),
        examples: [
          this.i18n.t('ai.help.chat.ex1'),
          this.i18n.t('ai.help.chat.ex2'),
          this.i18n.t('ai.help.chat.ex3')
        ]
      },
      { 
        title: this.i18n.t('ai.help.summarize.title'), 
        description: this.i18n.t('ai.help.summarize.desc'),
        examples: [
          this.i18n.t('ai.help.summarize.ex1'),
          this.i18n.t('ai.help.summarize.ex2'),
          this.i18n.t('ai.help.summarize.ex3')
        ]
      },
      { 
        title: this.i18n.t('ai.help.translate.title'), 
        description: this.i18n.t('ai.help.translate.desc'),
        examples: [
          this.i18n.t('ai.help.translate.ex1'),
          this.i18n.t('ai.help.translate.ex2'),
          this.i18n.t('ai.help.translate.ex3')
        ]
      },
      { 
        title: this.i18n.t('ai.help.explain.title'), 
        description: this.i18n.t('ai.help.explain.desc'),
        examples: [
          this.i18n.t('ai.help.explain.ex1'),
          this.i18n.t('ai.help.explain.ex2'),
          this.i18n.t('ai.help.explain.ex3')
        ]
      },
      { 
        title: this.i18n.t('ai.help.capture.title'), 
        description: this.i18n.t('ai.help.capture.desc'),
        examples: [
          this.i18n.t('ai.help.capture.ex1'),
          this.i18n.t('ai.help.capture.ex2'),
          this.i18n.t('ai.help.capture.ex3'),
          this.i18n.t('ai.help.capture.ex4'),
          this.i18n.t('ai.help.capture.ex5'),
          this.i18n.t('ai.help.capture.ex6')
        ]
      },
      { 
        title: this.i18n.t('ai.help.fullPage.title'), 
        description: this.i18n.t('ai.help.fullPage.desc'),
        examples: [
          this.i18n.t('ai.help.fullPage.ex1'),
          this.i18n.t('ai.help.fullPage.ex2'),
          this.i18n.t('ai.help.fullPage.ex3'),
          this.i18n.t('ai.help.fullPage.ex4'),
          this.i18n.t('ai.help.fullPage.ex5')
        ]
      },
      { 
        title: this.i18n.t('ai.help.fill.title'), 
        description: this.i18n.t('ai.help.fill.desc'),
        examples: [
          this.i18n.t('ai.help.fill.ex1'),
          this.i18n.t('ai.help.fill.ex2'),
          this.i18n.t('ai.help.fill.ex3'),
          this.i18n.t('ai.help.fill.ex4')
        ]
      }
    ];

    // Show help dialog
    const dialog = document.createElement('div');
    dialog.className = 'help-dialog';
    dialog.innerHTML = `
      <div class="help-content">
        <h2>${this.i18n.t('ai.helpTitle')}</h2>
        <div class="help-items">
          ${helpContent.map(item => `
            <div class="help-item">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              <div class="examples">
                <h4>${this.i18n.t('ai.exampleQueries')}</h4>
                <ul>
                  ${item.examples.map(example => `
                    <li>${example}</li>
                  `).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>
        <button class="close-help">${this.i18n.t('ai.close')}</button>
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
        max-width: 600px;
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

  createNewChat() {
    this.aiAssistantService.createNewChat();
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
    this.aiAssistantService.addToChatHistory(message);
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