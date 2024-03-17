import { TestBed } from '@angular/core/testing';

import { PolkadotjsService } from './polkadotjs.service';

describe('PolkadotjsService', () => {
  let service: PolkadotjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolkadotjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
