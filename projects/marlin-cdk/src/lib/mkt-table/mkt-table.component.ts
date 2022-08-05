import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "mkt-table",
  templateUrl: "./mkt-table.component.html",
  styleUrls: ["./mkt-table.component.scss"],
})
export class MktTableComponent {
  constructor() {}

  @Input() dataLength: number = 0;
  @Input() columns: any[];
  @Input() visibleColumns: any[] = [];
  @Input() title: string;
  @Input() subtitle: string;
  @Input() showPagination: boolean = true;

  @Output() pageChange = new EventEmitter<any>();
  @Output() itemsPerPageChange = new EventEmitter<any>();

  @Output() columnChange = new EventEmitter<any>();

  pageSizeOptions = [
    { id: 5, value: "5 items per page" },
    { id: 10, value: "10 items per page" },
    { id: 25, value: "25 items per page" },
    { id: 50, value: "50 items per page" },
    { id: 100, value: "100 items per page" },
    { id: 500, value: "500 items per page" },
  ];

  page = 1;

  @Input()
  itemsPerPage: any = { id: 10, value: "10 items per page" };

  onItemsPerPageChange(event: any) {
    this.itemsPerPageChange.emit(event);
  }

  pageSize = 2;

  onPageChange(event) {
    this.pageChange.emit(event);
  }
}
