import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MktSidenavComponent } from './mkt-sidenav.component';



@NgModule({
  declarations: [
    MktSidenavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MktSidenavComponent]
})
export class MktSidenavModule { }
