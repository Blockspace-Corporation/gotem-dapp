import { TestBed } from '@angular/core/testing';

import { SmartContractVoteService } from './smart-contract-vote.service';

describe('SmartContractVoteService', () => {
  let service: SmartContractVoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartContractVoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
