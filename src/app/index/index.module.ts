import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
