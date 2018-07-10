import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarningRoutingModule } from './warning-routing.module';
import { WarningComponent } from './warning/warning.component';

@NgModule({
  imports: [
    CommonModule,
    WarningRoutingModule
  ],
  declarations: [WarningComponent]
})
export class WarningModule { }
