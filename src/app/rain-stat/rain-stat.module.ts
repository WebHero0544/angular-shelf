import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { RainStatRoutingModule } from './rain-stat-routing.module';
import { RainStatComponent } from './rain-stat/rain-stat.component';

@NgModule({
  declarations: [RainStatComponent],
  imports: [
    SharedModule,
    RainStatRoutingModule
  ]
})
export class RainStatModule { }
