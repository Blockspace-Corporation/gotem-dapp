import { TestBed } from '@angular/core/testing';

import { SmartContractEvidenceService } from './smart-contract-evidence.service';

describe('SmartContractEvidenceService', () => {
  let service: SmartContractEvidenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartContractEvidenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
