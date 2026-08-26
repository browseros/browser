import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { ClipboardService } from '../../services/clipboard.service';
import { I18nService } from '../../services/i18n.service';
import { LanguageCode } from '../../i18n/translations';
import { TabPersistenceService } from '../../services/tab-persistence.service';

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
  continueWhereYouLeftOff = true;

  constructor(
    private fb: FormBuilder,
    private clipboardService: ClipboardService,
    public i18n: I18nService,
    private tabPersistence: TabPersistenceService
  ) {
    this.apiKeysForm = this.fb.group({
      openaiApiKey: ['', Validators.required],
      geminiApiKey: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.continueWhereYouLeftOff = this.tabPersistence.getContinueWhereYouLeftOff();
    // Load saved keys from localStorage
    const savedKeys = localStorage.getItem('apiKeys');
    if (savedKeys) {
      this.savedKeys = JSON.parse(savedKeys);
      this.apiKeysForm.patchValue(this.savedKeys);
    }
  }

  ngAfterViewInit() {
    // Set up clipboard functionality for all input fields
    setTimeout(() => {
      const inputs = document.querySelectorAll('.form-control') as NodeListOf<HTMLInputElement>;
      inputs.forEach(input => {
        // Set up keyboard shortcuts
        this.clipboardService.setupKeyboardShortcuts(input, (newValue: string) => {
          const control = this.apiKeysForm.get(input.id);
          if (control) {
            control.setValue(newValue);
          }
        });

        // Set up context menu
        this.clipboardService.setupContextMenu(input, (newValue: string) => {
          const control = this.apiKeysForm.get(input.id);
          if (control) {
            control.setValue(newValue);
          }
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

  onLanguageChange(lang: LanguageCode) {
    this.i18n.setLanguage(lang);
  }

  onContinueWhereYouLeftOffChange(enabled: boolean) {
    this.continueWhereYouLeftOff = enabled;
    this.tabPersistence.setContinueWhereYouLeftOff(enabled);
  }
} 