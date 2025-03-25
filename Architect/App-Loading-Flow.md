# Quy trình Load Ứng dụng Angular Electron

## 1. Khởi động Electron
- Khi ứng dụng được khởi động, Electron sẽ bắt đầu quá trình khởi tạo
- File `src/main.electron.ts` được thực thi đầu tiên
  - File này import và khởi tạo các module Electron từ `./electron`
- Electron tạo một cửa sổ chính (mainWindow) với các cấu hình:
  - Kích thước: 1200x800
  - Node integration được bật
  - Context isolation tắt
  - Web security tắt (chỉ trong môi trường development)

## 2. Load index.html
- File `src/index.html` là điểm khởi đầu cho việc load ứng dụng web
- Cấu trúc và quy trình load của index.html:

### 2.1 Head Section
- Thiết lập các meta tags cơ bản:
  ```html
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ```
- Load Bootstrap CSS:
  ```html
  <link href="assets/bootstrap/bootstrap.min.css" rel="stylesheet">
  ```
- Thiết lập title động thông qua webpack:
  ```html
  <title><%= htmlWebpackPlugin.options.title %></title>
  ```
- Thêm các head tags được cấu hình trong webpack:
  ```html
  <% if (webpackConfig.htmlElements.headTags) { %>
    <%= webpackConfig.htmlElements.headTags %>
  <% } %>
  ```
- Thiết lập base URL cho routing:
  ```html
  <% if (htmlWebpackPlugin.options.metadata.baseUrl) { %>
    <base href="<%= htmlWebpackPlugin.options.metadata.baseUrl %>">
  <% } %>
  ```

### 2.2 Body Section
- Chứa root component của Angular:
  ```html
  <app>
    Loading...
  </app>
  ```
- Trong môi trường development (khi không sử dụng HMR):
  ```html
  <% if (htmlWebpackPlugin.options.metadata.isDevServer && htmlWebpackPlugin.options.metadata.HMR !== true) { %>
    <script src="/webpack-dev-server.js"></script>
  <% } %>
  ```

### 2.3 Quy trình Load
1. HTML được parse và DOM được tạo
2. Các stylesheets (Bootstrap) được load
3. Webpack injects các scripts cần thiết:
   - Polyfills
   - Vendor scripts
   - Application scripts
4. Angular bootstrap process bắt đầu

## 3. Khởi tạo Angular
- Có hai phiên bản khởi tạo Angular tùy thuộc vào môi trường:

### Development Mode (main.browser.ts)
- File `src/main.browser.ts` được thực thi
- Sử dụng `platformBrowserDynamic()` cho JIT compilation
- Hỗ trợ Hot Module Replacement (HMR) thông qua `@angularclass/hmr`
- Bootstrap process:
  ```typescript
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(decorateModuleRef)
  ```

### Production Mode (main.browser.aot.ts)
- File `src/main.browser.aot.ts` được thực thi
- Sử dụng `platformBrowser()` cho AOT compilation
- Load module đã được compile trước: `AppModuleNgFactory`
- Bootstrap process:
  ```typescript
  platformBrowser()
    .bootstrapModuleFactory(AppModuleNgFactory)
    .then(decorateModuleRef)
  ```
- Đợi DOM ready thông qua `bootstrapDomReady()`

## 4. Load AppModule
- `AppModule` được import từ `src/app/app.module.ts`
- Module này là điểm khởi đầu chính cho Angular application
- Cấu trúc và chức năng của AppModule:

### 4.1 Imports và Dependencies
- Các Angular core modules:
  ```typescript
  BrowserModule,
  FormsModule,
  HttpModule,
  RouterModule
  ```
- NgRx modules cho state management:
  ```typescript
  StoreModule.provideStore(reducer),
  RouterStoreModule.connectRouter(),
  EffectsModule.run(AppEffects)
  ```
- Router configuration với hash mode và preloading:
  ```typescript
  RouterModule.forRoot(ROUTES, { 
    useHash: true, 
    preloadingStrategy: PreloadAllModules 
  })
  ```

### 4.2 Component Declarations
- Khai báo tất cả các components cần thiết:
  ```typescript
  declarations: [
    AppComponent,
    HomeComponent,
    NoContentComponent,
    XLargeDirective,
    WebviewDirective,
    AppSearchComponent,
    AppNavComponent,
    AppWebviewComponent,
    AppBarComponent,
    WebviewComponent
  ]
  ```

### 4.3 Providers và Services
- Environment providers
- App resolvers
- Google Suggestion Service
- Base href configuration

### 4.4 Hot Module Replacement (HMR)
- Hỗ trợ HMR với các lifecycle hooks:
  ```typescript
  hmrOnInit(store: StoreType)
  hmrOnDestroy(store: StoreType)
  hmrAfterDestroy(store: StoreType)
  ```
- Lưu trữ và khôi phục state khi hot reload

## 5. Load AppComponent
- `AppComponent` được load như component gốc
- Định nghĩa trong `src/app/app.component.ts`
- Cấu trúc và chức năng:

### 5.1 Component Configuration
- Sử dụng ViewEncapsulation.None để styles có thể ảnh hưởng đến toàn bộ ứng dụng
- Template đơn giản chỉ chứa router-outlet:
  ```typescript
  template: `
    <router-outlet></router-outlet>
  `
  ```

### 5.2 Properties và Methods
- Các thuộc tính cơ bản:
  ```typescript
  public angularclassLogo = 'assets/img/angular-electron.svg';
  public name = 'Browser OS';
  public url = 'https://github.com/browseros/browser';
  ```
- Method openURL để mở URL trong browser mặc định

## 6. Routing và Component Loading
- File `src/app/app.routes.ts` định nghĩa cấu trúc routing
- Các routes được định nghĩa:
  ```typescript
  export const ROUTES: Routes = [
    { path: '',      component: HomeComponent },
    { path: 'home',  component: HomeComponent },
    { path: '**',    component: NoContentComponent }
  ];
  ```

### 6.1 Route Resolver
- `DataResolver` trong `src/app/app.resolver.ts` xử lý data trước khi load route
- Cung cấp data mẫu cho routes:
  ```typescript
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return Observable.of({ res: 'I am data'});
  }
  ```

## 7. Load HomeComponent
- `HomeComponent` được load thông qua routing
- Component này được định nghĩa trong `src/app/home/home.component.ts`
- Có các tính năng:
  - Tích hợp với Electron IPC
  - Sử dụng NgRx Store
  - Có AppSearchComponent
  - Có AppNavComponent
  - Có AppWebviewComponent
  - Có AppBarComponent

## 8. Hoàn tất Bootstrap
- Khi tất cả các module và components được load xong
- Log thời gian hoàn thành: `[Angular Bootstrap] Application bootstrapped successfully`
- Nếu có lỗi, sẽ log: `[Angular Bootstrap] Failed to bootstrap application`

## 9. Hot Module Replacement (HMR)
- Chỉ hoạt động trong môi trường development
- Sử dụng `@angularclass/hmr` để hỗ trợ hot reload
- Các thay đổi trong code sẽ được áp dụng ngay lập tức mà không cần reload toàn bộ ứng dụng

## Lưu ý quan trọng
- Quy trình này có sự khác biệt rõ ràng giữa môi trường development và production
- Trong production, ứng dụng sử dụng AOT (Ahead of Time) compilation với `main.browser.aot.ts`
- Trong development, ứng dụng sử dụng JIT compilation với `main.browser.ts`
- Electron cung cấp các API native để tương tác với hệ điều hành
- Các file main được phân chia rõ ràng theo mục đích sử dụng:
  - `main.electron.ts`: Khởi tạo Electron
  - `main.browser.ts`: Khởi tạo Angular trong development
  - `main.browser.aot.ts`: Khởi tạo Angular trong production
- Webpack đóng vai trò quan trọng trong việc:
  - Inject các scripts cần thiết
  - Xử lý các template variables
  - Quản lý assets
  - Hỗ trợ HMR trong development 