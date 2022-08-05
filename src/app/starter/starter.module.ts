import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { MktCardModule, MktDropdownModule } from "marlin-cdk";
import { FeatherModule } from "angular-feather";
import { StarterComponent } from "./starter.component";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpLoaderFactory } from "./../app.module";
import { HttpClient } from "@angular/common/http";
import { NgApexchartsModule } from "ng-apexcharts";
import { NivelDirective } from "./components/nivel.directive";
import { TrendDirective } from "./components/trend.directive";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Starter Page",
      urls: [
        { title: "Dashboard", url: "/dashboard" },
        { title: "Starter Page" },
      ],
    },
    component: StarterComponent,
  },
];

@NgModule({
  declarations: [StarterComponent, NivelDirective, TrendDirective],
  imports: [
    FormsModule,
    NgApexchartsModule,
    FeatherModule,
    CommonModule,
    MktCardModule,
    MktDropdownModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [RouterModule],
})
export class StarterModule {}
