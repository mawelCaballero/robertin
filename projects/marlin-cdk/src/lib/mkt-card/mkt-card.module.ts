import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MktCardComponent } from './mkt-card.component';
import { FeatherModule } from 'angular-feather';



@NgModule({
  declarations: [
    MktCardComponent
  ],
  imports: [
    CommonModule,
    FeatherModule
  ],
  exports: [ MktCardComponent ]
})
export class MktCardModule { }
