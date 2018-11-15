import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { DisasterRoutingModule } from './disaster-routing.module';
import { DisasterComponent } from './disaster/disaster.component';

@NgModule({
  declarations: [DisasterComponent],
  imports: [
    SharedModule,
    DisasterRoutingModule
  ]
})
export class DisasterModule { }
