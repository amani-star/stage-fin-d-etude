import { TestBed } from '@angular/core/testing';

import { FonctiondappartenanceService } from './fonctiondappartenance.service';

describe('FonctiondappartenanceService', () => {
  let service: FonctiondappartenanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctiondappartenanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
