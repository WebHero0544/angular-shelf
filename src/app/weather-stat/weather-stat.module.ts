import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { WeatherStatRoutingModule } from './weather-stat-routing.module';
import { WeatherStatComponent } from './weather-stat/weather-stat.component';

@NgModule({
  declarations: [WeatherStatComponent],
  imports: [
    SharedModule,
    WeatherStatRoutingModule
  ]
})
export class WeatherStatModule { }
