import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import {
  catchError,
  delay,
  filter,
  finalize,
  map,
  mergeMap,
  retryWhen,
  switchMap,
  take,
  tap,
} from "rxjs/operators";
import { HttpProgressState, HttpStateService } from "./http-state.service";
import { NotificationService } from "./notification.service";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class TokenInterceptorService implements HttpInterceptor {
  private exceptions: string[] = [
    "login",
    "revoke",
    "register",
    "assets",
    "refresh",
  ];
  isRefreshing = false;

  constructor(
    private httpStateService: HttpStateService,
    private notificationService: NotificationService,
    private translateService: TranslateService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = this.cloneRequest(request);

    this.httpStateService.state.next({
      url: authReq.url,
      state: HttpProgressState.start,
    });
    return next.handle(authReq).pipe(
      retryWhen((error) => {
        return error.pipe(
          take(1),
          delay(1000),
          tap((response: any) => {
            if (
              response instanceof HttpErrorResponse &&
              !this.exceptions.includes(authReq.url)
            )
              this.notificationService.errorMsg.next(response.error);
            console.error(
              this.translateService.instant("Error in response"),
              response?.error
            );
            throw error;
          })
        );
      }),
      finalize(() => {
        this.httpStateService.state.next({
          url: authReq.url,
          state: HttpProgressState.end,
        });
      })
    );
  }

  cloneRequest(request: HttpRequest<any>) {
    return request.clone();
  }
}
