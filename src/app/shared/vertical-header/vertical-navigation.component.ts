import {
  Component,
  AfterViewInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "app-vertical-navigation",
  templateUrl: "./vertical-navigation.component.html",
  styleUrls: ["./vertical-navigation.component.scss"],
})
export class VerticalNavigationComponent implements AfterViewInit {
  @ViewChild("searchInput") searchInput: ElementRef;
  @ViewChild("searchResultsContainer") searchResult: ElementRef;

  searchField: FormControl;
  searchForm: FormGroup;

  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  showResults: boolean = false;
  searchResults: Array<any> = [];
  public showSearch = false;

  constructor(private translate: TranslateService, private fb: FormBuilder) {
    translate.setDefaultLang("gb");
    this.searchField = new FormControl();
    this.searchForm = fb.group({ search: this.searchField });

    // this.searchField.valueChanges
    //   .debounceTime(400)
    //   .switchMap((searchString: string) => {
    //     this.showResults = true;
    //     return this.searchService.quickSearchElements(searchString);
    //   })
    //   .subscribe((result: Array<any>) => {
    //     this.searchResults = result;
    //   });
  }

  // This is for Notifications
  notifications: Object[] = [
    {
      btn: "btn-danger",
      icon: "ti-link",
      title: "Luanch Admin",
      subject: "Just see the my new admin!",
      time: "9:30 AM",
    },
    {
      btn: "btn-success",
      icon: "ti-calendar",
      title: "Event today",
      subject: "Just a reminder that you have event",
      time: "9:10 AM",
    },
    {
      btn: "btn-info",
      icon: "ti-settings",
      title: "Settings",
      subject: "You can customize this template as you want",
      time: "9:08 AM",
    },
    {
      btn: "btn-warning",
      icon: "ti-user",
      title: "Pavan kumar",
      subject: "Just see the my admin!",
      time: "9:00 AM",
    },
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: "assets/images/users/user1.jpg",
      status: "online",
      from: "Pavan kumar",
      subject: "Just see the my admin!",
      time: "9:30 AM",
    },
    {
      useravatar: "assets/images/users/user2.jpg",
      status: "busy",
      from: "Sonu Nigam",
      subject: "I have sung a song! See you at",
      time: "9:10 AM",
    },
    {
      useravatar: "assets/images/users/user2.jpg",
      status: "away",
      from: "Arijit Sinh",
      subject: "I am a singer!",
      time: "9:08 AM",
    },
    {
      useravatar: "assets/images/users/user4.jpg",
      status: "offline",
      from: "Pavan kumar",
      subject: "Just see the my admin!",
      time: "9:00 AM",
    },
  ];

  public selectedLanguage: any = {
    language: "English",
    code: "gb",
    type: "US",
    icon: "gb",
  };

  public languages: any[] = [
    {
      language: "English",
      code: "gb",
      type: "US",
      icon: "gb",
    },
    {
      language: "Español",
      code: "es",
      icon: "es",
    },
    {
      language: "Français",
      code: "fr",
      icon: "fr",
    },
    {
      language: "German",
      code: "de",
      icon: "de",
    },
  ];

  ngAfterViewInit() {}

  changeLanguage(lang: any) {
    this.translate.use(lang.code);
    this.selectedLanguage = lang;
  }

  onSearchClick() {
    this.showSearch = !this.showSearch;
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
    }, 500);
  }

  setFocusOnSearchResult() {
    this.searchResult.nativeElement.focus();
  }
}
