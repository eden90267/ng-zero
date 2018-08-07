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