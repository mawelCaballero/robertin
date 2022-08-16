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
    this.el.nativeElement.style.fontWeight = 800;
    if (this.value.value < this.value.min) {
      this.el.nativeElement.parentNode.style.color = "blue";
    } else if (this.value.value > this.value.max) {
      //this.el.nativeElement.innerText = "Alto";
      this.el.nativeElement.parentNode.style.color = "red";
    } else {
      //this.el.nativeElement.innerText = "Medio";
      this.el.nativeElement.parentNode.style.color = "grey";
    }
  }
}
