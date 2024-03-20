import { TestBed } from '@angular/core/testing';

import { ExtrinsicService } from './extrinsic.service';

describe('ExtrinsicService', () => {
  let service: ExtrinsicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtrinsicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
