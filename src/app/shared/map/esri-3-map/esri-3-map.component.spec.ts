import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esri3MapComponent } from './esri-3-map.component';

describe('Esri3MapComponent', () => {
  let component: Esri3MapComponent;
  let fixture: ComponentFixture<Esri3MapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Esri3MapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Esri3MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
