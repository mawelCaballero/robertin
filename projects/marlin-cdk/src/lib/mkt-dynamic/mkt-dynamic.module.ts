import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MktDynamicComponent } from "./mkt-dynamic.component";
import { PortalModule } from "@angular/cdk/portal";

@NgModule({
  declarations: [MktDynamicComponent],
  imports: [CommonModule, PortalModule],
  exports: [MktDynamicComponent],
})
export class MktDynamicModule {}
