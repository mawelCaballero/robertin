import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";

export interface DropdownItem {
  key: string;
  value: string;
  selected: boolean;
}

@Component({
  selector: "mkt-dropdown",
  templateUrl: "./mkt-dropdown.component.html",
  styleUrls: ["./mkt-dropdown.component.scss"],
})
export class MktDropdownComponent implements OnInit {
  @Input() options = [];
  @Input() name: string;
  @Input() icon: string;
  @Input() showFilter = false;
  checked = false;
  @Output() onClick = new EventEmitter();
  @ViewChild("checkbox", { static: false, read: ElementRef }) elRef;

  constructor() {}

  ngOnInit(): void {}

  toggle(option) {
    this.onClick.emit(option);
  }

  isChecked() {
    this.checked = !this.checked;
  }
}
