import { NgModule } from '@angular/core';
import { BaseModule } from '../base';
import { NgZorroAntdModule } from 'ng-zorro-antd';

// 该模块包含了项目中所有公用组件,指令，管道，服务以及第三方公用模块, 且该模块包含了BaseModule模块(致力于打造一个所有项目中都能使用的angular公用模块)
@NgModule({
  declarations: [],
  imports: [
    BaseModule,
    NgZorroAntdModule
  ],
  exports: [
    BaseModule,
    NgZorroAntdModule
  ]
})
export class SharedModule { }
