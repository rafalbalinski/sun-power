import { TestBed } from '@angular/core/testing';

import { FooterStorageService } from './footer-storage.service';

describe(FooterStorageService.name, () => {
  let service: FooterStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
