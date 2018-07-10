import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseModule } from './base/base.module';
import { JointModule } from './joint/joint.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    JointModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  /** 配置 ng-zorro-antd 国际化 **/
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class AppModule { }



