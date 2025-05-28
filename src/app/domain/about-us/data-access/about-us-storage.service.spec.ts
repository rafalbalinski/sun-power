import { TestBed } from '@angular/core/testing';

import { AboutUsStorageService } from './about-us-storage.service';

describe(AboutUsStorageService.name, () => {
  let service: AboutUsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutUsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
