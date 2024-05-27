import { TestBed } from '@angular/core/testing';

import { CustomersDataTransferService } from './customers-data-transfer.service';

describe('CustomersService', () => {
  let service: CustomersDataTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersDataTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
