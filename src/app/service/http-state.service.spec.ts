import { TestBed } from '@angular/core/testing';

import { HttpStateService } from './http-state.service';

describe('HttpStateService', () => {
  let service: HttpStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
