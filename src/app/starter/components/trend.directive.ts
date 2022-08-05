import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
} from "@angular/core";
export interface EquipmentTypeData {
  value: string;
  column: string;
}
@Directive({
  selector: "[trend]",
})
export class TrendDirective implements OnInit {
  @Input("trend")
  value: any;

  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    this.setTrend();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value) {
      this.setTrend();
    }
  }

  private setTrend() {
    console.log(this.value);
    const { currentValue, prevValue } = this.value;

    if (prevValue) {
      if (currentValue < prevValue) {
        this.el.nativeElement.innerHTML = `<i class="fas fa-arrow-down"></i>`;
      } else if (currentValue > prevValue) {
        this.el.nativeElement.innerHTML = `<i class="fas fa-arrow-up"></i>`;
      } else {
        this.el.nativeElement.innerHTML = `<i class="fas fa-arrow-right"></i>`;
      }

      this.el.nativeElement.innerHTML += ` ${prevValue}`;
    } else {
      this.el.nativeElement.innerHTML = " - ";
    }
  }

  // this.el.nativeElement.innerHTML =
  //   '<?xml version="1.0" encoding="UTF-8"?>        <svg class="icon-small" width="20px" height="16px" viewBox="0 0 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">            <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">                <g id="Outlined" transform="translate(-272.000000, -1840.000000)">                    <g id="Device" transform="translate(100.000000, 1650.000000)">                        <g id="Outlined-/-Device-/-storage" transform="translate(170.000000, 186.000000)">                            <g>                                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>                                <path d="M2,20 L22,20 L22,16 L2,16 L2,20 Z M4,17 L6,17 L6,19 L4,19 L4,17 Z M2,4 L2,8 L22,8 L22,4 L2,4 Z M6,7 L4,7 L4,5 L6,5 L6,7 Z M2,14 L22,14 L22,10 L2,10 L2,14 Z M4,11 L6,11 L6,13 L4,13 L4,11 Z" id="🔹-Icon-Color" fill="currentColor"></path>                            </g>                        </g>                    </g>                </g>            </g>        </svg>        ';
  // break;
}
