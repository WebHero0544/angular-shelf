import { NgModule } from '@angular/core';
import { BaseModule } from '../base/base.module';
// 该模块包含了项目中所有公用组件,指令，管道，服务等, 且该模块包含了BaseModule模块(致力于打造一个所有项目中都能使用的angular公用模块), 
// 由于BaseModule模块中已经引入了CommonModule模块,因此无需再引
@NgModule({
  imports: [
    BaseModule
  ],
  declarations: []
})
export class JointModule { }
