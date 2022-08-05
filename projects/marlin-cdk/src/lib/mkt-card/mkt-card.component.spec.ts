import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktCardComponent } from './mkt-card.component';

describe('MktCardComponent', () => {
  let component: MktCardComponent;
  let fixture: ComponentFixture<MktCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
