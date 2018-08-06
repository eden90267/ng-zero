# Chap03. 簡介 Angular 開發框架

## 關於 AngularJS 與 Angular 開發框架

- Google 主導並有廣大社群參與
- Angular 1.x
  - 廣大社群 (最大)
  - 嶄新抽象化架構大幅簡化應用程式開發
- Angular 2.x
  - 歷經兩年重新打造
  - 更高執行效率、更好延展架構
  - 透過全新元件化技術建構現代化的開發框架
- AngularJS 第一代產品
- Angular 第二代產品
- 一二代兩者不相容，但二之後到五架構都不變

更新版本：

```
$ ng update
```

## Angular 優點與主要特色

- 跨平台
  - PWA (Angular Mobile Toolkit)
  - Desktop Apps
  - Native Apps
    - Ionic, NativeScript, React Native (components 跟 view 抽離，可運用在不同框架)
- 速度與效能
  - Code generation (AOT)
    - 將元件範本預先編譯成 JS 程式碼
  - Universal
    - 將開啟頁面的首頁預先產生完整 HTML 與 CSS 原始碼，加快首頁載入速度
      - 先給 HTML, CSS 再執行 angular 應用程式
      - 可支援 Node.js, .Net, PHP 或任何其他伺服器端網頁架構
  - Code Splitting
    - 全新元件路由機制，讓使用者只需載入需要的原始碼
- 生產力提升
  - Templates
    - 使用簡易有強大的範本語法提高開發效率
  - Angular CLI
    - 透過命令列工具快速建模、新增元件、執行測試與發行部署
  - IDE
- 完整的開發體驗
  - Testing
    - Karma、Protractor
  - Animation
    - 直觀的 Angular API 完成頁面動畫處理
  - Accessibility
    - 透過 ARIA-enabled 元件、開發者指引與內建的 a11y 測試基礎架構，建構具有可及性的應用程式

### Angular 亮點

- 效能改進
  - 偵測變更：比 ng1 快 10 倍
  - 更小的 lib size 與延遲載入機制
  - 範本編譯：支援 template 預先編譯機制
  - 渲染速度：比 ng1 快 5 倍 (Render & Re-render)
  - 支援伺服器渲染機制 (Node.js & ASP.NET)
- 高生產力
  - 簡潔語法讓團隊更加容易上手跟維護
  - 更強大的開發工具 Augury
  - 移除超過 40+ 個 directives
- 多樣平台
  - Browser, Node.js, NativeScript, and more...

### Angular 真正優勢

- 更熟悉的開發架構
  - 採用 TypeScript 開發語言，以類別為基礎的 OO 架構開發 Web 應用程式
  - 手邊現有開發工具/編輯器，就可以開發 Angular 2 應用程式
- 更低學習門檻
  - directives 減少
- 更好的執行效率與行動化體驗
  - 不同行動裝置之間的各種特性皆考量在內 (觸控、螢幕大小、硬體限制)
  - 內建 server rendering 與 Web Worker 技術改善頁面載入效率
  - 不僅做到預先產生 HTML 頁面，更能透過 NativeScript 與 Ionic 建立起網站框架與 Mobile App 之間的橋樑，開發速度更好的行動瀏覽體驗
- 更清晰的專案結構與可維護性
  - 使用 ES2015 模組管理機制，搭配 webpack 或 SystemJS 等工具即可立即上手
  - 全新的元件模組化架構
  - 只要參考官網 guideline，就可開發出好維護效率高的應用程式

## Angular 開發語言：TypeScript

- JavaScript (ES5, ES6, ES7) 的超集合，多了更多的特性
- 可編譯回瀏覽器支援的 JS，用新的語言特性來撰寫程式，更為簡潔與簡單

## 理解 Angular 應用程式與元件

### Angular 應用程式的組成

- 模組：AppModule
  - 元件：App Component
  - 元件：Child Component
  - 元件：Services Component
  - 元件：Pipe Component

### Angular 頁面的組成

- 應用程式元件 + 樣板 + 樣式 (AppComponent)
  - 頁首元件 + 樣板 + 樣式 (HeaderComponent)
  - 子選單元件 + 樣板 + 樣式 (AsideComponent)
  - 主要內容元件 + 樣板 + 樣式 (ArticleComponent)

Component 包 Component 概念。

元件化開發方式，不會讓你操縱到 DOM，讓你專注商業邏輯上。
