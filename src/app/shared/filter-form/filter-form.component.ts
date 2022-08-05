import { ConditionalExpr } from "@angular/compiler";
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SearchCriteria } from "./../../pages/search/search.service";

export interface ExploreForm {
  type: string;
  form: FormControl;
}

@Component({
  selector: "filter-form",
  templateUrl: "./filter-form.component.html",
  styleUrls: ["./filter-form.component.scss"],
})
export class FilterFormComponent implements OnInit, OnChanges {
  equipmentsForm = new FormGroup({
    equipmentUuid: new FormControl("", [Validators.required]),
    equipmentype: new FormControl("", [Validators.required]),
    equipmentManufacturer: new FormControl("", [Validators.required]),
    equipmentLocation: new FormControl("", [Validators.required]),
    equipmentName: new FormControl("", [Validators.required]),
  });

  linksForm = new FormGroup({
    uuid: new FormControl("", [Validators.required]),
    location: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
  });

  neForm = new FormGroup({
    uuid: new FormControl("", [Validators.required]),
    category: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
  });

  @Input() type: string;

  @Input()
  searchParams: Partial<SearchCriteria>;

  @Output()
  onSubmitForm = new EventEmitter<any>();

  constructor(private router: Router) {}
  ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result: any, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});

    this.patchValue(inputs);

    inputs?.searchParams?.forEach((item: any) => {
      this.bindFormValue(item);
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.emitForm();
  }

  private bindFormValue(item: any) {
    switch (this.type) {
      case "rack":
        this.equipmentsForm.get(item.key)?.setValue(item.value);
        break;
      case "path":
        this.linksForm.get(item.key)?.setValue(item.value);
        break;
      case "ne":
        this.neForm.get(item.key)?.setValue(item.value);
        break;
      default:
        break;
    }
  }

  private emitForm(): void {
    switch (this.type) {
      case "rack":
        this.onSubmitForm.emit(this.equipmentsForm.value);
        break;
      case "path":
        this.onSubmitForm.emit(this.linksForm.value);
        break;
      case "ne":
        this.onSubmitForm.emit(this.neForm.value);
        break;
      default:
        break;
    }
  }

  private patchValue(params?: string[]) {
    switch (this.type) {
      case "rack":
        this.equipmentsForm.patchValue(params ? params : this.searchParams);
        break;
      case "path":
        this.linksForm.patchValue(params ? params : this.searchParams);
        break;
      case "ne":
        this.neForm.patchValue(params ? params : this.searchParams);
        break;
      default:
        break;
    }
  }

  navigateAdvanceSearch() {
    // const searchCriteriaParams = this.searchService.transformSearchCriteria(
    //   this.searchField.value
    // );
    this.router.navigate([
      "/search",
      {
        id: this.equipmentsForm.get("id")?.value,
        type: this.equipmentsForm.get("type")?.value,
        bandwidth: this.equipmentsForm.get("bandwidth")?.value,
        protected: this.equipmentsForm.get("protected")?.value,
        diameter: this.equipmentsForm.get("diameter")?.value,
      },
    ]);
  }
}
