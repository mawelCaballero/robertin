import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MktTableComponent } from "./mkt-table.component";
import { FeatherModule } from "angular-feather";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MktDropdownModule } from "../mkt-dropdown/mkt-dropdown.module";

@NgModule({
  declarations: [MktTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    MktDropdownModule,
    FeatherModule,
    NgbModule,
  ],
  exports: [MktTableComponent],
})
export class MktTableModule {}
