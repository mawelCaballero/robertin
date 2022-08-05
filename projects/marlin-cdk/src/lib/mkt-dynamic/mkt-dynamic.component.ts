import { Component, Input, OnInit } from "@angular/core";
import { ComponentPortal } from "@angular/cdk/portal";

@Component({
  selector: "mkt-dynamic",
  templateUrl: "./mkt-dynamic.component.html",
})
export class MktDynamicComponent implements OnInit {
  @Input()
  component;

  componentPortal: ComponentPortal<any>;

  constructor() {}
  ngOnInit(): void {
    this.componentPortal = new ComponentPortal(this.component);
  }
}
