import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MktHeaderComponent } from './mkt-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherModule } from 'angular-feather';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MktHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    FeatherModule,
    PerfectScrollbarModule,
    NgbModule
  ],
  exports: [MktHeaderComponent]
})
export class MktHeaderModule { }
