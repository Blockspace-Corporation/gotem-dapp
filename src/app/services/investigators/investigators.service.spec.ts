import { TestBed } from '@angular/core/testing';

import { InvestigatorsService } from './investigators.service';

describe('InvestigatorsService', () => {
  let service: InvestigatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestigatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
