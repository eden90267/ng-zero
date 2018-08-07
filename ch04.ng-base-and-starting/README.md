# 了解 Angular 基本架構與啟動流程

## 認識 Angular 應用程式啟動流程

```shell
$ npm start
```

事實上是執行

```shell
$ ng serve
```

- webpack：typescript 編譯並合併 5 個檔案
- 啟動一個開發伺服器

```html
<base href="/"/>
```

`<base>` 是 angular 非常重要的標籤。

```html
<app-root></app-root>
```

angular 的根元件，也可稱為 directive。啟動完成會被動態插入 DOM 標籤 (透過 JavaScript)

再來則是載入：

- inline.bundle.js
- polyfills.bundle.js
- styles.bundle.js
- vendor.bundle.js
- main.bundle.js

JavaScript 的動態加入到 html 的 `</body>` 之前，是透過 webpack 工具注入的。

main.ts 是 angular 的進入點

main.ts -> AppModule -> AppComponent

## 使用 Angular CLI 快速建立元件與範本

```shell
$ ng generate component page1
```

一組 4 個檔案，加上修改 app.module.ts

將 page1 的 selector 的 element 設置放置到 app.component.html 上，就將元件加入進來了

元件分很多種，以下是 ng 可以產生的元件

```shell
$ ng generate -h
 usage: ng generate <schematic> [options]
 Available schematics:
     serviceWorker
     application
     class
     component
     directive
     enum
     guard
     interface
     module
     pipe
     service
     universal
     appShell
     library
```

如果要砍掉 component，ng cli 就沒辦法幫你了，你要自己來

```shell
$ ng g c page2
```

## 將靜態檔案加入 Angular CLI 建立的專案

將靜態網站加入到 src 資料夾底下，並調整 angular.json

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "demo1": {
      // ...
      "architect": {
        "build": {
          // ...
          "options": {
            // ...
            "assets": [
              "src/favicon.ico",
              "src/assets",
              "src/api",
              "src/blog-index.html"
            ],
  // ...
}
```

## 將網頁 HTML 加入到 Angular 應用程式

注意 `<base>` 意思是整份網頁所有超連結以 base 設定的 href 屬性為基礎

增加 `<head>` 上的內容要在 `<base>` 之下，否則會有找不到靜態檔案的情形

## 發行與部署 Angular 應用程式的方法

```shell
$ ng build
```

打包成 dist 檔案，複製到網站伺服器 (html, css, js 與其他靜態檔案)

```shell
$ ng build --prod
```

多加上壓縮動作

## 升級 Angular 應用程式到新版的方法

```shell
$ ng -v
```

```shell
$ ng update
```

就算升級上去有問題，ng update 也會動幫你優正，主要更新在 package.json

看目前 ng-cli 的版本可執行下列這段：

```shell
$ npm list -g --depth=0
```

可看 global npm 套件有無新版：

```shell
$ npm outdated -g
```

安裝最新版本：

```shell
$ npm install -g @angular/cli
```

建議一兩週查看一下，有得更新就更新，因為程式碼不會變動。有問題可以用 Angular 官網的 release node 查看，或到 [Angular Update Guide](https://update.angular.io/) 的網站進行查看注意事項。