import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

export interface FilterItem {
  key: string;
  value: string;
}

@Component({
  selector: "filters-panel",
  templateUrl: "./filters-panel.component.html",
  styleUrls: ["./filters-panel.component.scss"],
})
export class FiltersPanelComponent implements OnInit {
  @Input() title: string = "";
  @Input() filters: FilterItem[] = [];
  @Output() onRemoveFilter = new EventEmitter<FilterItem>();

  constructor() {}

  ngOnInit(): void {}

  removeFilter(filterItem: FilterItem) {
    this.filters = this.filters.filter((item) => item.key !== filterItem.key);
    this.onRemoveFilter.emit(filterItem);
  }
}
