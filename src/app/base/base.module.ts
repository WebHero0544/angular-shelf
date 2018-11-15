import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';

// 致力于打造一个所有项目中都能使用的angular公用模块
@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,  //在此处导出angular模块，对于导入该模块的模块就无需在导入这些模块了, 避免了重复
    FormsModule,
    ReactiveFormsModule,
    NotFoundComponent
  ]
})
export class BaseModule { }
