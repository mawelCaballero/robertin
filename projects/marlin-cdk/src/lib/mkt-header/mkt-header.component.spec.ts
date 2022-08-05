import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktHeaderComponent } from './mkt-header.component';

describe('MktHeaderComponent', () => {
  let component: MktHeaderComponent;
  let fixture: ComponentFixture<MktHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
