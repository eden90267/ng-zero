# Chap02. 建立 Angular 開發環境

## 必要開發工具

- git
- node.js
- vscode
- notepad++

安裝 Angular CLI 骨架

```shell
$ npm i -g @angular/cli
```

P.S. vscode 安裝 angular extension pack 套件 (Will 保哥)，該套件是將大部分會用到的套件都安裝起來

## 使用 Angular CLI 建立專案骨架

```shell
$ ng new demo
$ npm start
```

[http://localhost:4200/](http://localhost:4200/)

## 認識 Angular CLI 建立的專案架構

```
demo1
├── e2e
│   ├── protractor.conf.js  // e2e testing 設定檔
│   ├── src
│   └── tsconfig.e2e.json
│
├── node_modules            // npm 安裝的管理套件
├── src
│    ├── app                // components
│    ├── assets             // 所有靜態檔案，額外的放在此
│    ├── browserslist
│    ├── environments       // 環境變數定義的 ts 檔案 (prod.ts 是 build for prod 才會用到)
│    ├── favicon.ico        // 網址列的圖示
│    ├── index.html         // 首頁
│    ├── karma.conf.js      // 單元測試工具用到的設定檔
│    ├── main.ts            // ts 降低 javascript 門檻，提升生產力
│    ├── polyfills.ts       // 相當重要，angular 執行用到舊版本瀏覽器，就需要進行 comment 的解除來引入新版的 api
│    ├── styles.css         // global css styles
│    ├── test.ts            // 寫單元測試用到，被 karma.conf.js 所使用
│    ├── tsconfig.app.json  // 繼承上一層的設定，針對 app 資料夾裡面的 ts 設定
│    ├── tsconfig.spec.json // 單元測試用到的 ts 設定檔
│    └── tslint.json
│
├── README.md
├── angular.json            // angular cli 設定檔
├── .editorconfig           // 編輯器的設定檔 (tab 符號、斷行符號等)
├── .gitignore              // 忽略設定檔
├── package-lock.json
├── package.json
├── tsconfig.json           // typescript 設定檔
└── tslint.json             // 定義使用 tslint 檢查程式碼品質的設定檔
```

大部分的檔案，你連動都不用動，頂多動到 angular.json 的 cli 檔案

## 認識 vscode 開發環境