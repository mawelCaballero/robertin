import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktSidenavComponent } from './mkt-sidenav.component';

describe('MktSidenavComponent', () => {
  let component: MktSidenavComponent;
  let fixture: ComponentFixture<MktSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
