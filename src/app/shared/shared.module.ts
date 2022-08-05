import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MktDropdownComponent,
  MktDropdownModule,
  MktTableComponent,
  MktTableModule,
} from "marlin-cdk";
import { FeatherComponent, FeatherModule } from "angular-feather";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ColumnTitlePipe } from "./../pipe/column-title.pipe";
import { NgbdSortableHeader } from "./../pages/explore/NgbdSortableHeader";
import { EquipmentTypeDirective } from "./../pages/explore/directives/equipment-type.directive";

@NgModule({
  declarations: [ColumnTitlePipe, NgbdSortableHeader, EquipmentTypeDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MktDropdownModule,
    MktTableModule,
    HttpClientModule,
    FeatherModule,
  ],
  exports: [
    MktDropdownComponent,
    MktTableComponent,
    FeatherComponent,
    ColumnTitlePipe,
    EquipmentTypeDirective,
    NgbdSortableHeader,
  ],
})
export class SharedModule {}
