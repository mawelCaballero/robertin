import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktDynamicComponent } from './mkt-dynamic.component';

describe('MktDynamicComponent', () => {
  let component: MktDynamicComponent;
  let fixture: ComponentFixture<MktDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
