import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  public errorMsg = new BehaviorSubject<string>("");

  public infoMsg = new BehaviorSubject<string>("");

  constructor() {}
}
