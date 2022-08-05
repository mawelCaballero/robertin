import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MktDropdownComponent } from "./mkt-dropdown.component";
import { FeatherModule } from "angular-feather";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [MktDropdownComponent],
  imports: [CommonModule, FormsModule, NgbModule, FeatherModule],
  exports: [MktDropdownComponent],
})
export class MktDropdownModule {}
