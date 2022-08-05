import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Directive({
  selector: "[nivel]",
})
export class NivelDirective implements OnInit {
  @Input("nivel")
  value: any;

  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    this.setLevel();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value) {
      this.setLevel();
    }
  }

  private setLevel() {
    if (this.value.value < this.value.min) {
      this.el.nativeElement.parentNode.style.backgroundColor = "blue";
      this.el.nativeElement.parentNode.style.color = "white";
      this.el.nativeElement.innerText = "Bajo";
    } else if (this.value.value > this.value.max) {
      this.el.nativeElement.innerText = "Alto";
      this.el.nativeElement.parentNode.style.backgroundColor = "red";
      this.el.nativeElement.parentNode.style.color = "white";
    } else {
      this.el.nativeElement.innerText = "";
      this.el.nativeElement.parentNode.style.color = "black";
      this.el.nativeElement.parentNode.style.backgroundColor = "unset";
    }
  }
}
