import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktSpinnerComponent } from './mkt-spinner.component';

describe('MktSpinnerComponent', () => {
  let component: MktSpinnerComponent;
  let fixture: ComponentFixture<MktSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
