# Browser OS

A modern, feature-rich browser built with Angular and Electron, designed to provide a seamless and powerful web browsing experience.

## Features

- 🚀 Fast and efficient browsing experience
- 🎨 Modern, customizable UI
- 🔒 Enhanced security features
- 📱 Cross-platform support
- 🔄 Sync capabilities
- 🎯 Advanced tab management
- 🔍 Powerful search functionality
- 📚 Bookmark and history management
- 🎨 Theme customization
- �� Extension support
- 🤖 AI Assistant Integration:
  - Natural language chat with AI
  - Smart webpage summarization
  - AI-powered content translation
  - Code explanation and analysis
  - Intelligent search suggestions
  - Screenshot analysis and problem-solving
  - Full page capture and comprehensive analysis
  - Automated form filling assistance
  - Image-based discussions and analysis
  - Context-aware responses

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI
- Electron

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/browser-os.git
cd browser-os
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
browser-os/
├── src/
│   ├── app/
│   │   ├── actions/            # Redux actions
│   │   │   ├── app.actions.ts  # Core application actions
│   │   │   └── history.actions.ts # History management actions
│   │   ├── effects/           # Redux effects
│   │   │   └── app.ts         # Core application effects
│   │   ├── components/        # Angular components
│   │   │   ├── app-bar/      # Application bar component
│   │   │   ├── app-nav/      # Navigation component
│   │   │   ├── app-search/   # Search functionality
│   │   │   ├── app-webview/  # Web view component
│   │   │   ├── home/         # Home page component
│   │   │   ├── title/        # Title management
│   │   │   └── x-large/      # Large screen layout
│   │   ├── home/             # Home module
│   │   │   ├── app-nav/      # Navigation component
│   │   │   └── app-search/   # Search component
│   │   ├── no-content/       # 404 page component
│   │   ├── services/         # Angular services
│   │   │   └── google-suggestion.service.ts # Search suggestions service
│   │   ├── app.component.ts  # Root component
│   │   ├── app.module.ts     # Root module
│   │   ├── app.routes.ts     # Application routes
│   │   └── environment.ts    # Environment configuration
│   ├── electron/             # Electron main process
│   │   ├── dev-extensions.ts # Development tools setup
│   │   ├── index.ts         # Main Electron process
│   │   └── webview.directive.ts # WebView component
│   ├── assets/              # Static assets
│   │   ├── icons/          # Application icons
│   │   ├── images/         # Image assets
│   │   └── styles/         # Global styles
│   ├── styles/             # Global styles
│   ├── resources/          # Application resources
│   ├── meta/               # Meta files
│   ├── index.html          # Main HTML file
│   ├── main.browser.ts     # Browser entry point
│   ├── main.electron.ts    # Electron entry point
│   ├── polyfills.browser.ts # Browser polyfills
│   └── vendor.browser.ts   # Vendor dependencies
├── Architect/              # Architecture documentation
│   ├── Actions.md         # Redux actions and state management documentation
│   ├── Effects.md         # Redux effects and side effect handling documentation
│   ├── Home.md            # Home component documentation
│   ├── AppBar.md          # AppBar component documentation
│   ├── AppNav.md          # AppNav component documentation
│   ├── AppSearch.md       # AppSearch component documentation
│   ├── AppWebview.md      # AppWebview component documentation
│   ├── Title.md           # Title component documentation
│   ├── XLarge.md          # XLarge component documentation
│   └── Models.md          # Data models documentation
└── tests/                 # Test files
    ├── unit/             # Unit tests
    ├── e2e/              # End-to-end tests
    └── integration/      # Integration tests
```

### Key Directories Explained

#### `src/app/actions/`
Redux actions for state management:
- `app.actions.ts`: Core application actions
- `history.actions.ts`: Browser history management actions

#### `src/app/effects/`
Redux effects for handling side effects:
- `browser/`: Browser-related effects
- `electron/`: Electron-specific effects
- `shared/`: Common effects

#### `src/app/components/`
Contains all Angular components organized by feature:
- `app-bar/`: Main application bar with navigation controls
- `app-nav/`: Side navigation component
- `app-search/`: Search functionality implementation
- `app-webview/`: Web content rendering component
- `home/`: Home page and dashboard
- `title/`: Window and tab title management
- `x-large/`: Large screen layout handling

#### `src/app/home/`
Home module components:
- `app-nav/`: Navigation component specific to home
- `app-search/`: Search component specific to home

#### `src/app/services/`
Core services that handle business logic:
- `google-suggestion.service.ts`: Google search suggestions integration

#### `src/electron/`
Electron main process code:
- `dev-extensions.ts`: Development tools setup
- `index.ts`: Main process entry point
- `webview.directive.ts`: WebView component

#### `src/assets/`
Static application resources:
- `icons/`: Application icons
- `images/`: Image assets
- `styles/`: Global styles

#### `src/styles/`
Global styles and theme definitions

#### `src/resources/`
Application resources and configurations

#### `src/meta/`
Meta files and configurations

#### `Architect/`
Comprehensive documentation:
- Component documentation
- Architecture decisions
- Data models
- Technical specifications

#### `tests/`
Testing infrastructure:
- `unit/`: Component and service tests
- `e2e/`: End-to-end testing
- `integration/`: Integration tests

## Documentation

### Architecture

The Browser OS architecture is well-documented in the `Architect` folder. Here's what you can find:

- [Actions](Architect/Actions.md) - Documentation for Redux actions and state management
- [Effects](Architect/Effects.md) - Documentation for Redux effects and side effect handling
- [Home Component](Architect/Home.md) - Documentation for the home page component
- [AppBar Component](Architect/AppBar.md) - Documentation for the application bar
- [AppNav Component](Architect/AppNav.md) - Documentation for the navigation component
- [AppSearch Component](Architect/AppSearch.md) - Documentation for the search functionality
- [AppWebview Component](Architect/AppWebview.md) - Documentation for the web view component
- [Title Component](Architect/Title.md) - Documentation for the title management
- [XLarge Component](Architect/XLarge.md) - Documentation for the large screen layout
- [Models](Architect/Models.md) - Comprehensive documentation of all data models
- [Google Search Suggestion](Architect/GoogleSearchSuggestion.md) - Documentation for the search suggestion service

### How It Works

For a detailed explanation of how Browser OS works, including its architecture, components, and technical implementation, please see our comprehensive [How It Works](docs/HOW-IT-WORKS.md) documentation.

Here's a quick overview of the main components:

1. **Frontend Framework**: Angular with TypeScript
2. **Desktop Framework**: Electron
3. **State Management**: NgRx
4. **Development Tools**: Integrated debugging and monitoring
5. **Data Models**: Strongly typed interfaces
6. **Security**: Sandboxed processes and secure communication
7. **Performance**: Optimized for speed and efficiency
8. **Testing**: Comprehensive testing strategy

For detailed documentation of specific components, see the [Architecture Documentation](Architect/).

## Development

### Code Style

We follow the Angular style guide and use Prettier for code formatting. Run the following commands to ensure code quality:

```bash
# Format code
npm run format

# Lint code
npm run lint

# Run tests
npm test
```

### Building

```bash
# Development build
npm run build:dev

# Production build
npm run build:prod

# Package for distribution
npm run package
```

## Testing

We use a comprehensive testing strategy:

- Unit tests with Jasmine
- E2E tests with Cypress
- Integration tests
- Performance tests

Run tests with:
```bash
# Unit tests
npm run test

# E2E tests
npm run e2e

# All tests
npm run test:all
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Angular team for the amazing framework
- Electron team for the desktop capabilities
- All contributors and maintainers

## Support

For support, please:
1. Check the [documentation](Architect/)
2. Search existing [issues](https://github.com/yourusername/browser-os/issues)
3. Create a new issue if needed

## Roadmap

- [ ] Enhanced privacy features
- [ ] Advanced tab grouping
- [ ] Improved sync capabilities
- [ ] Better extension support
- [ ] Performance optimizations
- [ ] Additional theme options
- [ ] Enhanced search capabilities
- [ ] Better bookmark management

## Version History

- 0.1.0
  - Initial release
  - Basic browser functionality
  - Core features implementation

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/browser-os](https://github.com/yourusername/browser-os)

### AI Assistant Features

The Browser OS comes with a powerful AI Assistant that provides:

1. **Natural Language Chat**
   - Have conversations with AI about any topic
   - Context-aware responses
   - Support for code snippets and technical discussions

2. **Smart Content Analysis**
   - Webpage summarization
   - Content translation to multiple languages
   - Code explanation and analysis
   - Technical documentation interpretation

3. **Visual Analysis**
   - Screenshot capture and analysis
   - Full page capture for comprehensive review
   - Image-based problem solving
   - Diagram and chart interpretation

4. **Productivity Tools**
   - Automated form filling
   - Smart search suggestions
   - Context-aware assistance
   - Multi-language support

5. **Technical Features**
   - Integration with multiple AI models
   - Support for image uploads and analysis
   - Markdown rendering
   - Code syntax highlighting
   - Clipboard integration for images and text

6. **User Experience**
   - Modern, intuitive interface
   - Real-time responses
   - Error handling and recovery
   - Keyboard shortcuts support
   - Context menu integration