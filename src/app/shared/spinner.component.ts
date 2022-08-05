import {
  Component,
  Input,
  OnDestroy,
  Inject,
  ViewEncapsulation,
} from "@angular/core";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from "@angular/router";
import { DOCUMENT } from "@angular/common";
import {
  HttpStateService,
  IHttpState,
  HttpProgressState,
} from "./../service/http-state.service";

@Component({
  selector: "app-spinner",
  template: `<div class="preloader loading" *ngIf="isSpinnerVisible">
    <div class="spinner">
      <div>
        <h1
          style="
    padding-top: 30px;
"
        >
          Loading...
        </h1>
      </div>
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
  </div>`,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./spinner.component.scss"],
})
export class SpinnerComponent implements OnDestroy {
  public isSpinnerVisible = true;

  @Input() public backgroundColor = "rgba(0, 115, 170, 0.69)";

  // constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
  constructor(
    private router: Router,
    private httpStateService: HttpStateService
  ) {
    this.httpStateService.state.subscribe((progress: IHttpState) => {
      if (this.router.url === "/") {
        this.isSpinnerVisible = false;
      }

      if (progress && progress.url) {
        this.isSpinnerVisible =
          progress.state === HttpProgressState.start ? true : false;
        // } else if (progress.url.indexOf(this.filterBy) !== -1) {
        //   this.loading = (progress.state === HttpProgressState.start) ? true : false;
        // }
      }
    });
  }

  ngOnDestroy(): void {
    this.isSpinnerVisible = false;
  }
}
