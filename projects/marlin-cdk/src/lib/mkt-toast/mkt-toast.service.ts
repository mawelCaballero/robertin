import { Injectable, TemplateRef } from "@angular/core";

export enum MktToastType {
  success,
  error,
  warning,
  info,
}

@Injectable({
  providedIn: "root",
})
export class MktToastService {
  toasts: any[] = [];

  show(
    textOrTpl: string | TemplateRef<any>,
    type: MktToastType = MktToastType.success
  ) {
    this.toasts.push({
      textOrTpl,
      ...{ classname: this.getMktToastType(type), delay: 3000 },
    });
  }

  remove(toast) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }

  private getMktToastType(type: MktToastType) {
    switch (type) {
      case MktToastType.success:
        return "bg-success text-light";
      case MktToastType.error:
        return "bg-danger text-light";
      case MktToastType.warning:
        return "bg-warning text-light";
      case MktToastType.info:
        return "bg-info text-light";
    }
  }
}
