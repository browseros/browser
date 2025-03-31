import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-api-keys',
  templateUrl: './api-keys.component.html',
  styleUrls: ['./api-keys.component.scss']
})
export class ApiKeysComponent implements OnInit {
  apiKeysForm: FormGroup;
  savedKeys: { [key: string]: string } = {};
  showSuccessMessage = false;
  showOpenAIKey = false;
  showGeminiKey = false;

  constructor(private fb: FormBuilder) {
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
} 