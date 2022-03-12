import { TestBed } from '@angular/core/testing';

import { ResponseManagementService } from './response-management.service';

describe('ResponseManagementService', () => {
  let service: ResponseManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
