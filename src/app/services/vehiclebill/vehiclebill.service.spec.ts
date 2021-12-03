import { TestBed } from '@angular/core/testing';

import { VehiclebillService } from './vehiclebill.service';

describe('VehiclebillService', () => {
  let service: VehiclebillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclebillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
