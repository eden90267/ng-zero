import { Component } from '@angular/core';

@Component({ // 宣告這個 class 是一個 Component
  selector: 'app-root', // 選取器 (官方 guideline 建議以 element 為主)
  templateUrl: './app.component.html', // 指 AppComponent 的 html template 所在之處
  styleUrls: ['./app.component.css'] // css 檔的定義，只會套用在該 App Component，名稱彼此不會互相衝突
})
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
  keywordReset() {
    this.keyword = '';
  }
}
