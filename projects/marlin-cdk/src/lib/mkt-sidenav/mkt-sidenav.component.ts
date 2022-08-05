import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mkt-sidenav',
  templateUrl: './mkt-sidenav.component.html',
  styleUrls: ['./mkt-sidenav.component.css']
})
export class MktSidenavComponent implements OnInit {


  @Input() sidebarbg:string;

  public expandLogo = false;
  constructor() { }

  ngOnInit(): void {
  }

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

}
