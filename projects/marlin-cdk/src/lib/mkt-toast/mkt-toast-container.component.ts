import { Component, TemplateRef } from "@angular/core";
import { MktToastService } from "./mkt-toast.service";

@Component({
  selector: "mkt-toasts",
  template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 3000"
      (hidden)="toastService.remove(toast)"
    >
      <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
        <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
      </ng-template>

      <ng-template #text>{{ toast.textOrTpl }}</ng-template>
    </ngb-toast>
  `,
  host: {
    class: "toast-container position-fixed top-0 end-0 p-3",
    style: "z-index: 1200",
  },
})
export class MktToastsContainer {
  constructor(public toastService: MktToastService) {}

  isTemplate(toast) {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
