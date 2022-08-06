import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FeatherModule } from "angular-feather";
import { allIcons } from "angular-feather/icons";

import { FullComponent } from "./layouts/full/full.component";
import { BlankComponent } from "./layouts/blank/blank.component";

import { VerticalNavigationComponent } from "./shared/vertical-header/vertical-navigation.component";
import { VerticalSidebarComponent } from "./shared/vertical-sidebar/vertical-sidebar.component";
import { BreadcrumbComponent } from "./shared/breadcrumb/breadcrumb.component";
import { HorizontalNavigationComponent } from "./shared/horizontal-header/horizontal-navigation.component";
import { HorizontalSidebarComponent } from "./shared/horizontal-sidebar/horizontal-sidebar.component";

import { Approutes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SpinnerComponent } from "./shared/spinner.component";

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";

import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";

import {
  MktFooterModule,
  MktHeaderModule,
  MktSidenavModule,
  MktToastService,
  MktToastModule,
  MktTableModule,
  MktDropdownModule,
} from "marlin-cdk";
import { environment } from "./../environments/environment";
import { TokenInterceptorService } from "./service/token-interceptor.service";
import { NotificationService } from "./service/notification.service";
import { GraphicsComponent } from "./graphics/graphics.component";
import { NgApexchartsModule } from "ng-apexcharts";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

export function loggerCallback(message: string) {
  console.debug(message);
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20,
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    BlankComponent,
    VerticalNavigationComponent,
    BreadcrumbComponent,
    VerticalSidebarComponent,
    HorizontalNavigationComponent,
    HorizontalSidebarComponent,
    GraphicsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FeatherModule,
    MktToastModule,
    MktHeaderModule,
    MktFooterModule,
    MktTableModule,
    MktSidenavModule,
    MktDropdownModule,
    FeatherModule.pick(allIcons),
    RouterModule.forRoot(Approutes, {
      useHash: true,
      onSameUrlNavigation: "reload",
    }),
    PerfectScrollbarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    NotificationService,
    MktToastService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
