import { Component, OnInit, ViewChild } from "@angular/core";

import { Subscription } from "rxjs";
import { NotificationService } from "./service/notification.service";
import { MktToastService, MktToastType } from "marlin-cdk";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  errorServiceSub: Subscription;
  infoServiceSub: Subscription;
  showNotification: boolean = false;

  @ViewChild("errorToast", { static: true }) errorToast: any;

  constructor(
    private notificationService: NotificationService,
    private mktToastService: MktToastService
  ) {
    this.errorServiceSub = this.notificationService.errorMsg.subscribe(
      (error) => {
        if (error) {
          this.showNotification = true;
          this.mktToastService.show(
            `An error has ocurred: ${error}`,
            MktToastType.error
          );
        }
      }
    );

    this.infoServiceSub = this.notificationService.infoMsg.subscribe((info) => {
      if (info) {
        this.showNotification = true;
        this.mktToastService.show(info, MktToastType.success);
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.errorServiceSub.unsubscribe();
    this.mktToastService.clear();
  }
}
