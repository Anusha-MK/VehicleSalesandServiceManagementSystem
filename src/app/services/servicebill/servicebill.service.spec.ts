import { TestBed } from '@angular/core/testing';

import { ServicebillService } from './servicebill.service';

describe('ServicebillService', () => {
  let service: ServicebillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicebillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
