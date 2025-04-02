# Google AI Service Architecture

## Overview
The Google AI Service in Browser OS provides integration with Google's Gemini AI model, offering various AI-powered features including text processing, image analysis, translation, and chat capabilities.

## Core Components

### 1. Service Initialization
```typescript
class GoogleAIService {
    private genAI: GoogleGenerativeAI;
    private model: any;

    constructor() {
        this.initializeAI();
    }

    private initializeAI() {
        const apiKey = this.getApiKey();
        this.genAI = new GoogleGenerativeAI(apiKey);
        this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    }
}
```

### 2. API Key Management
```typescript
private getApiKey(): string {
    const keys = localStorage.getItem('apiKeys');
    if (keys) {
        const parsedKeys = JSON.parse(keys);
        return parsedKeys.geminiApiKey || '';
    }
    return '';
}

updateApiKey() {
    this.initializeAI();
}
```

## Features

### 1. Text Processing
```typescript
// Text Extraction from Image
async extractTextFromImage(base64Image: string): Promise<string>;

// Text Translation
async translateText(text: string, targetLang: string = 'vietnamese'): Promise<string>;

// Text Summarization
async summarizeText(text: string, targetLang: string = 'vietnamese'): Promise<string>;
```

### 2. Image Processing
```typescript
// Image Translation
async translateImage(base64Image: string, targetLang: string = 'vietnamese'): Promise<string>;

// Image Summarization
async summarizeImage(base64Image: string, targetLang: string = 'vietnamese'): Promise<string>;
```

### 3. Intent Detection
```typescript
async detectIntent(message: string): Promise<[string, string]>;
```
Supported Intents:
- translate: Translation requests
- summarize: Summarization requests
- explain_code: Code explanation requests
- chat: General chat or other requests

Supported Languages:
- english, vietnamese, japanese, korean, chinese
- french, german, spanish, russian, portuguese
- italian, dutch, polish, arabic, hindi
- none: For non-translation requests

### 4. Chat Features
```typescript
async chat(systemMessage: string, userMessage: string, imageUrl?: string): Promise<string>;
```

## Language Support

### 1. Translation Patterns
Vietnamese:
- "dịch ... sang ..."
- "dịch ... ra ..."
- "chuyển ... sang ..."
- "dịch giúp mình ..."
- "dịch trang này ..."
- "dịch nội dung này ..."

English:
- "translate ... to ..."
- "translate ... into ..."
- "translate this ..."
- "convert ... to ..."

### 2. Summarization Prompts
```typescript
const languagePrompts: { [key: string]: string } = {
    vietnamese: 'Hãy tóm tắt nội dung sau bằng tiếng Việt một cách ngắn gọn và dễ hiểu:',
    english: 'Please summarize the following content in English in a concise and clear way:',
    // ... other language prompts
};
```

## Error Handling

### 1. Common Errors
- API endpoint not found (404)
- No response from Gemini API
- No text extracted/generated
- Image loading errors
- API key configuration issues

### 2. Error Recovery
```typescript
try {
    // Operation
} catch (error: any) {
    console.error('Error:', error);
    if (error.message?.includes('404')) {
        throw new Error('API endpoint not found. Please check your API key and endpoint configuration.');
    }
    throw new Error(`Failed to perform operation: ${error.message || 'Unknown error'}`);
}
```

## Best Practices

### 1. API Usage
- Proper API key management
- Rate limiting consideration
- Error handling and recovery
- Response validation
- Image format handling

### 2. Performance
- Image optimization
- Response caching
- Batch processing
- Resource cleanup
- Memory management

### 3. Security
- API key protection
- Input validation
- Output sanitization
- Error message handling
- Data privacy

### 4. Development
- Type safety
- Code organization
- Documentation
- Testing coverage
- Error logging 