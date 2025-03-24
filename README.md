# Browser OS

A desktop application built with Angular and Electron that allows websites to run native functions of the operating system.

## Project Structure

```
src/
├── app/                      # Angular application source code
│   ├── actions/             # Redux actions
│   ├── effects/             # Redux effects
│   ├── home/                # Home module components
│   │   ├── app-nav/        # Navigation component
│   │   └── app-search/     # Search component
│   ├── models/             # TypeScript interfaces and models
│   ├── no-content/         # 404 page component
│   ├── reducers/           # Redux reducers
│   ├── services/           # Angular services
│   ├── app.component.ts    # Root component
│   ├── app.module.ts       # Root module
│   ├── app.routes.ts       # Application routes
│   └── environment.ts      # Environment configuration
│
├── electron/               # Electron specific code
│   ├── dev-extensions.ts   # Development tools setup
│   ├── index.ts           # Main Electron process
│   └── webview.directive.ts # WebView component
│
├── assets/                # Static assets
├── styles/               # Global styles
├── resources/            # Application resources
├── meta/                 # Meta files
│
├── index.html            # Main HTML file
├── main.browser.ts       # Browser entry point
├── main.electron.ts      # Electron entry point
├── polyfills.browser.ts  # Browser polyfills
└── vendor.browser.ts     # Vendor dependencies
```

## Features

- Multi-tab browser interface
- Native OS integration
- Context menu support
- File download capabilities
- Tab management
- History tracking
- Search functionality

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
ng serve
```

3. In a new terminal, start Electron:
```bash
npm run electron:serve
```

## Building for Production

1. Build the Angular application:
```bash
npm run build
```

2. Build the Electron application:
```bash
npm run electron:build
```

## Dependencies

- Angular
- Electron
- NgRx (Redux for Angular)
- Bootstrap
- jQuery

## Development Tools

The application includes several development tools when running in development mode:
- Redux DevTools
- Devtron
- Hot Module Replacement

## Architecture

The application follows a Redux architecture pattern:
- Actions: Define what can happen in the app
- Reducers: Handle state changes
- Effects: Handle side effects
- Store: Central state management

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.