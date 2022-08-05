import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


@Component({
  selector: 'mkt-header',
  templateUrl: './mkt-header.component.html',
  styleUrls: ['./mkt-header.component.css']
})
export class MktHeaderComponent {

  public config: PerfectScrollbarConfigInterface = {};
  public isCollapsed = false;
  public showMobileMenu = false;
  public expandLogo = false;



  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();

  @Output() handleShowMobileMenu: EventEmitter<boolean> = new EventEmitter<boolean>();


  @Input()
  options = {
    theme: 'light', // two possible values: light, dark
    dir: 'ltr', // two possible values: ltr, rtl
    layout: 'vertical', // fixed value. shouldn't be changed.
    sidebartype: 'full', // four possible values: full, iconbar, overlay, mini-sidebar
    sidebarpos: 'fixed', // two possible values: fixed, absolute
    headerpos: 'fixed', // two possible values: fixed, absolute
    boxed: 'full', // two possible values: full, boxed
    navbarbg: 'skin1', // six possible values: skin(1/2/3/4/5/6)
    sidebarbg: 'skin6', // six possible values: skin(1/2/3/4/5/6)
    logobg: 'skin6' // six possible values: skin(1/2/3/4/5/6)
  };


  handleToggleSidebarInMobile(){
    this.showMobileMenu = !this.showMobileMenu;
    this.handleShowMobileMenu.emit(this.showMobileMenu);
  }

  toggleSidebarType() {
    switch (this.options.sidebartype) {
      case 'full':
      case 'iconbar':
        this.options.sidebartype = 'mini-sidebar';
        break;
      case 'overlay':
        this.handleShowMobileMenu.emit(!this.showMobileMenu);
        break;
      case 'mini-sidebar':
          this.options.sidebartype = 'full';
        break;
      default:
    }
    this.onClick.emit(this.options.sidebartype);
  }
}
