import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { ClipboardService } from '../../services/clipboard.service';
import { Menu, MenuItem } from '@electron/remote';

@Component({
  selector: 'app-api-keys',
  templateUrl: './api-keys.component.html',
  styleUrls: ['./api-keys.component.scss']
})
export class ApiKeysComponent implements OnInit, AfterViewInit {
  apiKeysForm: FormGroup;
  savedKeys: { [key: string]: string } = {};
  showSuccessMessage = false;
  showOpenAIKey = false;
  showGeminiKey = false;

  constructor(
    private fb: FormBuilder,
    private clipboardService: ClipboardService
  ) {
    this.apiKeysForm = this.fb.group({
      openaiApiKey: ['', Validators.required],
      geminiApiKey: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Load saved keys from localStorage
    const savedKeys = localStorage.getItem('apiKeys');
    if (savedKeys) {
      this.savedKeys = JSON.parse(savedKeys);
      this.apiKeysForm.patchValue(this.savedKeys);
    }
  }

  ngAfterViewInit() {
    // Add context menu event listeners for API key inputs
    setTimeout(() => {
      const inputs = document.querySelectorAll('.form-control');
      inputs.forEach(input => {
        input.addEventListener('contextmenu', (e: any) => {
          e.preventDefault();
          const menu = new Menu();
          menu.append(new MenuItem({
            label: 'Copy',
            click: () => {
              const selectedText = (input as HTMLInputElement).value.substring(
                (input as HTMLInputElement).selectionStart,
                (input as HTMLInputElement).selectionEnd
              );
              if (selectedText) {
                this.clipboardService.copy(selectedText);
              }
            }
          }));
          menu.append(new MenuItem({
            label: 'Paste',
            click: async () => {
              const text = await this.clipboardService.paste();
              const inputEl = input as HTMLInputElement;
              const start = inputEl.selectionStart;
              const end = inputEl.selectionEnd;
              const formControl = this.apiKeysForm.get(inputEl.id);
              if (formControl) {
                const currentValue = formControl.value || '';
                formControl.setValue(currentValue.substring(0, start) + text + currentValue.substring(end));
                setTimeout(() => {
                  inputEl.selectionStart = inputEl.selectionEnd = start + text.length;
                });
              }
            }
          }));
          menu.popup({ x: e.clientX, y: e.clientY });
        });
      });
    });
  }

  toggleKeyVisibility(field: 'openaiApiKey' | 'geminiApiKey') {
    if (field === 'openaiApiKey') {
      this.showOpenAIKey = !this.showOpenAIKey;
    } else {
      this.showGeminiKey = !this.showGeminiKey;
    }
  }

  onSubmit() {
    if (this.apiKeysForm.valid) {
      const formData = this.apiKeysForm.value;
      
      // Save to localStorage
      localStorage.setItem('apiKeys', JSON.stringify(formData));
      
      // Update environment variables
      environment.openaiApiKey = formData.openaiApiKey;
      environment.geminiApiKey = formData.geminiApiKey;
      
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);
    }
  }

  clearKeys() {
    localStorage.removeItem('apiKeys');
    this.apiKeysForm.reset();
    environment.openaiApiKey = '';
    environment.geminiApiKey = '';
  }

  async handleCopy(event: any) {
    event.preventDefault();
    const input = event.target as HTMLInputElement;
    const selectedText = input.value.substring(input.selectionStart, input.selectionEnd);
    if (selectedText) {
      await this.clipboardService.copy(selectedText);
    }
  }

  async handlePaste(event: any) {
    event.preventDefault();
    const input = event.target as HTMLInputElement;
    const formControl = this.apiKeysForm.get(input.id);
    
    if (formControl) {
      const text = await this.clipboardService.paste();
      const start = input.selectionStart;
      const end = input.selectionEnd;
      const currentValue = formControl.value || '';
      formControl.setValue(currentValue.substring(0, start) + text + currentValue.substring(end));
      // Set cursor position after pasted text
      setTimeout(() => {
        input.selectionStart = input.selectionEnd = start + text.length;
      });
    }
  }
} 