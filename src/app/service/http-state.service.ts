import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export enum HttpProgressState {
  start,
  end,
}

export interface IHttpState {
  url: string;
  state: HttpProgressState;
}

@Injectable({
  providedIn: "root",
})
export class HttpStateService {
  public state = new BehaviorSubject<IHttpState>({} as IHttpState);

  constructor() {}
}
