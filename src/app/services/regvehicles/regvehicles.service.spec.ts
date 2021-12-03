import { TestBed } from '@angular/core/testing';

import { RegvehiclesService } from './regvehicles.service';

describe('RegvehiclesService', () => {
  let service: RegvehiclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegvehiclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
