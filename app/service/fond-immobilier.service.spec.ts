import { TestBed } from '@angular/core/testing';

import { FondImmobilierService } from './fond-immobilier.service';

describe('FondImmobilierService', () => {
  let service: FondImmobilierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FondImmobilierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
