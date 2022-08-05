import { TestBed } from "@angular/core/testing";

import { MktToastService } from "./mkt-toast.service";

describe("ToastService", () => {
  let service: MktToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MktToastService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
