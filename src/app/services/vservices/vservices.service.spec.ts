import { TestBed } from '@angular/core/testing';

import { VservicesService } from './vservices.service';

describe('VservicesService', () => {
  let service: VservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
