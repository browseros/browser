export const environment = {
  production: false,
  isDevServer: false,
  HMR: true,
  openaiApiKey: process.env['OPENAI_API_KEY'] || 'YOUR_API_KEY_HERE', // Add your OpenAI API key here
  apiUrl: 'https://api.openai.com/v1/chat/completions',
  geminiApiKey: process.env['GEMINI_API_KEY'] || 'YOUR_API_KEY_HERE'
}; 