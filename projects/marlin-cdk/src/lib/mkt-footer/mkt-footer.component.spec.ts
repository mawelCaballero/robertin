import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktFooterComponent } from './mkt-footer.component';

describe('MktFooterComponent', () => {
  let component: MktFooterComponent;
  let fixture: ComponentFixture<MktFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
