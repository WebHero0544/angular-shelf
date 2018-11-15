import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RainStatComponent } from './rain-stat/rain-stat.component';

const routes: Routes = [
  {
    path: '',
    component: RainStatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RainStatRoutingModule { }
