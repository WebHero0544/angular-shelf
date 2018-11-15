import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherStatComponent } from './weather-stat/weather-stat.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherStatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherStatRoutingModule { }
