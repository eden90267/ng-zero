# 掌握 Angular 範本語法與資料繫結

資料繫結的四種方法：

- 內嵌繫結 (interpolation)

  `{{property}}`

- 屬性繫結 (Property Binding)

  `[property]='statement'`

- 事件繫結 (Event Binding)

  `(event)='someMethod($event)'`

- 雙向繫結 (Two-way Binding)

  `[(ngModel)]='property'`

## 學習資料繫結方法：內嵌繫結

## 學習資料繫結方法：屬性繫結

注意是 JavaScript 的 DOM properties，而不是 html tag 的 properties，html tag 的 properties 也可稱為 attributes

所以設置 data-* 的設置會失敗，要使用 `[attr.data-title]="title"` 才可

## 學習資料繫結方法：事件繫結

方法 1:

```html
<img on-click="changeTitle()" />
```

方法 2 (建議):

```html
<img (click)="changeTitle()">
```

## 學習資料繫結方法：事件繫結 - 使用 $event 參數

```html
<img (click)="changeTitle($event)">
```

可以取得事件的詳細資訊，常用到的是 `$event.target` 物件


## 學習資料繫結方法：事件繫結 - 使用具有型別的 $event 參數

打錯字在 javascript 上容易發生，所以用 typescript 來補足具體型別，就可以選了

```javascript
changeTitle($event: MouseEvent) {
  if ($event.altKey) {
    this.title = 'The Will Will Web';
  }
  console.log($event);
}
```

OR：

```html
<img (click)="changeTitle($event.altKey)">
```

```javascript
changeTitle(altKey: boolean) {
  if (altKey) {
    this.title = 'The Will Will Web';
  }
}
```

什麼樣程式好維護就怎麼寫，簡單跟擴充取其一

## 學習資料繫結方法：雙向繫結 (Two-way Binding)

自動做到屬性繫結與事件繫結，程式碼會更少

原程式碼：

```html
<!-- Aside START -->
<aside class="col-md-4 sidebar-wrapper">
  <div id="widgetzone_be_WIDGET_ZONE" class="widgetzone">

    <!-- Search START-->
    <div class="widget search">
      <div class="widget-content">
        <div id="searchbox">
          <input type="text"
                 (keyup)="keywordChanges($event.target.value)"
                 (keyup.escape)="keywordReset($event.target)"
                 placeholder="請輸入搜尋關鍵字"
                 accesskey="s">
          <input type="button" value="搜尋" id="searchbutton">
          <br> 目前字數：{{wordcount}}
        </div>
      </div>
    </div>
```

```javascript
// ...
export class AppComponent { // Component 屬性事件定義在這裡
  title = 'demo1';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  wordcount = 0;
  constructor() {
    // setTimeout(() => {
    //   this.title = 'The Will Will Web';
    // }, 2000);
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
  }
  keywordChanges(value: string) {
    this.wordcount = value.length;
  }
  keywordReset(target: HTMLInputElement) {
    target.value = '';
    this.wordcount = 0;
  }
}
```

調整後：

```html
<!-- Aside START -->
<aside class="col-md-4 sidebar-wrapper">
  <div id="widgetzone_be_WIDGET_ZONE" class="widgetzone">

    <!-- Search START-->
    <div class="widget search">
      <div class="widget-content">
        <div id="searchbox">
          <input type="text"
                 [(ngModel)]="keyword"
                 (keyup.escape)="keywordReset()"
                 placeholder="請輸入搜尋關鍵字"
                 accesskey="s">
          <input type="button" value="搜尋" id="searchbutton">
          <br> 關鍵字：{{keyword}} 目前字數：{{keyword.length}}
        </div>
      </div>
    </div>
```

```javascript
// ...
export class AppComponent { // Component 屬性事件定義在這裡
  title = 'demo1';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  keyword = '';
  constructor() {
    // setTimeout(() => {
    //   this.title = 'The Will Will Web';
    // }, 2000);
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
  }
  keywordReset() {
    this.keyword = '';
  }
}
```

增加 FormsModule

```javascript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page2Component } from './page2/page2.component';
import {FormsModule} from '@angular/forms';

@NgModule({ // 裝飾是一個 angular 模組
  declarations: [ // 跟 view 有關, Page1Component, Page2Component的元件
    AppComponent,
    Page2Component
  ],
  imports: [ // 匯入其他模組
    BrowserModule,
    FormsModule
  ],
  providers: [], // 註冊服務的提供者
  bootstrap: [AppComponent] // 啟動根元件
})
export class AppModule { }
```

但雙向繫結不是萬靈丹，它會帶來一些負擔，如果過多雙向繫結的話

可敲打 `a-*` 快捷鍵會自動補全

## 認識範本參考變數 (Template reference variables)

`#name` 語法

```html
<input type="text" #tKeyword
       [(ngModel)]="keyword"
       (keyup.escape)="keywordReset()"
       placeholder="請輸入搜尋關鍵字"
       accesskey="s">
```

tKeyword 預設會是該  element 的 DOM

```html
<input type="text" #tKeyword
       [(ngModel)]="keyword"
       (keyup.escape)="keywordReset()"
       placeholder="請輸入搜尋關鍵字"
       accesskey="s">
<input type="button" value="搜尋" id="searchbutton">
<br> 關鍵字：{{keyword}} 目前字數：{{tKeyword.value.length}}
```

也可套用在 directive 上

```html
<app-header #tHeader></app-header>

<!-- CONTAINER START-->
<section class="container" (click)="tHeader.title = 'Title changed'">
```

tHeader 可以直接存取到它所有 component 屬性與事件，但也只能在 html template 上使用 (不過 Component 取得範本參考變數也是有方法，之後再帶)

## 學習 Angular 元件型指令 (Component Directives)

(未完待捕...)