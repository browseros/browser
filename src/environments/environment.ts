export const environment = {
  production: false,
  isDevServer: false,
  HMR: true,
  openaiApiKey: process.env['OPENAI_API_KEY'],
  apiUrl: 'https://api.openai.com/v1/chat/completions',
  geminiApiKey: process.env['GEMINI_API_KEY']
};

// Validate required environment variables
const requiredEnvVars = ['OPENAI_API_KEY', 'GEMINI_API_KEY'];
requiredEnvVars.forEach(envVar => {
  if (!process.env[envVar]) {
    console.error(`Missing required environment variable: ${envVar}`);
    console.error('Please make sure you have copied .env.example to .env and filled in your API keys');
  }
}); 