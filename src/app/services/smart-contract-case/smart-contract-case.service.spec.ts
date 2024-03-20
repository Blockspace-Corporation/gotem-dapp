import { TestBed } from '@angular/core/testing';

import { SmartContractCaseService } from './smart-contract-case.service';

describe('SmartContractCaseService', () => {
  let service: SmartContractCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartContractCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
