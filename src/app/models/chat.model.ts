export interface ChatMessage {
  type: 'text' | 'image';
  content: string;
  htmlContent?: string;
  imageUrl?: string;
  srcUrl?: string;
  isUser: boolean;
  timestamp: Date;
}

export interface ImageToChat {
  imageUrl: string;
  srcUrl: string;
} 