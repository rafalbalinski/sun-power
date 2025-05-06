import { TestBed } from '@angular/core/testing';

import { OfferStorageService } from './offer-storage.service';

describe(OfferStorageService.name, () => {
  let service: OfferStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
