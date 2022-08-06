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
import { GraphicsComponent } from "../graphics/graphics.component";

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
  {
    path: "line-chart/:id",
    data: {
      title: "Line Chart",
      urls: [
        { title: "Starter ", url: "/dashboard" },
        { title: "Line Chart", url: "/line-chart" },
      ],
    },
    component: GraphicsComponent,
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
