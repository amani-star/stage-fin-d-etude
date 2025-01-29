import { TestBed } from '@angular/core/testing';

import { AdminmailService } from './adminmail.service';

describe('AdminmailService', () => {
  let service: AdminmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
