import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage/manage.component';

@NgModule({
  declarations: [ManageComponent],
  imports: [
    SharedModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }
