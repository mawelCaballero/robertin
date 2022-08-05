import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktTableComponent } from './mkt-table.component';

describe('MktTableComponent', () => {
  let component: MktTableComponent;
  let fixture: ComponentFixture<MktTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
