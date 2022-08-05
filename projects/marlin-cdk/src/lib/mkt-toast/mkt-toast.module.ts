import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MktToastsContainer } from "./mkt-toast-container.component";

@NgModule({
  declarations: [MktToastsContainer],
  imports: [BrowserModule, NgbModule],
  exports: [MktToastsContainer],
})
export class MktToastModule {}
