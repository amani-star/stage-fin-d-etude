import { TestBed } from '@angular/core/testing';

import { ProprietairefondService } from './proprietairefond.service';

describe('ProprietairefondService', () => {
  let service: ProprietairefondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProprietairefondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
