import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Page2Component} from './page2/page2.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';

@NgModule({ // 裝飾是一個 angular 模組
            // 跟 view 有關
  declarations: [
    AppComponent,
    Page2Component,
    HeaderComponent
  ],
  imports: [ // 匯入其他模組
    BrowserModule,
    FormsModule
  ],
  providers: [], // 註冊服務的提供者
  bootstrap: [AppComponent] // 啟動根元件
})
export class AppModule {
}
