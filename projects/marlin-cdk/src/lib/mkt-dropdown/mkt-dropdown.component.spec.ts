import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktDropdownComponent } from './mkt-dropdown.component';

describe('MktDropdownComponent', () => {
  let component: MktDropdownComponent;
  let fixture: ComponentFixture<MktDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
