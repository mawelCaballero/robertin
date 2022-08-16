import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GuidelinesComponent } from "./guidelines.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { FeatherModule } from "angular-feather";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { HttpLoaderFactory } from "./../app.module";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Medicacion de robertin",
      urls: [{ title: "Medicacion", url: "/guidelines" }],
    },
    component: GuidelinesComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    FeatherModule,
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class GuidelinesModule {}
