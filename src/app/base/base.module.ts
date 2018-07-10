import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicNoPageComponent } from './components/public-no-page/public-no-page.component';

// 致力于打造一个所有项目中都能使用的angular公用模块
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PublicNoPageComponent],
  exports: [PublicNoPageComponent]
})
export class BaseModule { }
