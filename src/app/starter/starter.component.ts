import { HttpClient } from "@angular/common/http";
import { ChangeDetectorRef, Component, ViewEncapsulation } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./starter.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class StarterComponent {
  loginDisplay = false;
  valorReferencial: any = {};

  currentDate: string;

  currentReport: BehaviorSubject<any> = new BehaviorSubject<any>({});

  fechas: Array<Date> = [];

  data: any = {};

  constructor(
    private http: HttpClient,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) {
    this.http.get("assets/data/informe.json").subscribe((data: any) => {
      this.data = data;
      this.valorReferencial = data.rango_referencial;
      data?.items.forEach((currentItem: any, index) => {
        if (index === data?.items.length - 1) {
          this.currentDate = currentItem.fecha;
          const selectedData = {
            data: currentItem.datos,
            prevData: this.getPrevData(currentItem),
          };
          console.log(selectedData);
          this.currentReport.next(selectedData);
        }
        this.fechas.push(currentItem.fecha);
      });
    });
  }

  ngOnInit(): void {}

  onSelectOption(event: any) {
    const filteredData = this.data.items.find(
      (item: any) => item.fecha === event
    );

    const selectedData = {
      data: filteredData?.datos,
      prevData: this.getPrevData(filteredData),
    };
    console.log(selectedData);
    this.currentReport.next(selectedData);
    this.currentDate = event;
    this.cdRef.detectChanges();
  }

  getPrevData(currentData: any) {
    const indexPrev = this.data.items.indexOf(currentData) - 1;
    if (indexPrev >= 0) {
      const prevData = this.data.items[indexPrev];
      console.log("PrevData", prevData);
      return prevData?.datos;
    }
    return {};
  }
}
