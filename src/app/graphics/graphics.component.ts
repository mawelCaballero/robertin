import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent,
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

export type ChartData = {
  name: string;
  data: number[];
  referenceMinData: number[];
  referenceMaxData: number[];
  categories: string[];
};

@Component({
  selector: "app-graphics",
  templateUrl: "./graphics.component.html",
  styleUrls: ["./graphics.component.scss"],
})
export class GraphicsComponent implements OnInit, OnDestroy {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  private sub: any;
  id: string;
  data: ChartData = {
    name: "",
    data: [],
    categories: [],
    referenceMaxData: [],
    referenceMinData: [],
  };
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.http.get("assets/data/informe.json").subscribe((data: any) => {
      this.data.name = this.id;

      data.items.forEach((element) => {
        this.data.categories.push(element.fecha);
        this.data.data.push(element.datos[this.id].value);
        this.data.referenceMaxData.push(data.rango_referencial[this.id].max);
        this.data.referenceMinData.push(data.rango_referencial[this.id].min);
      });

      this.chartOptions = {
        series: [
          {
            name: this.data.name,
            data: this.data.data,
          },
          {
            name: "Referencia Máxima",
            data: this.data.referenceMaxData,
          },
          {
            name: "Referencia Mínima",
            data: this.data.referenceMinData,
          },
        ],
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Informe de " + this.data.name,
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: this.data.categories,
        },
      };
    });
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params["id"]; // (+) converts string 'id' to a number
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
