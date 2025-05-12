import { TestBed } from '@angular/core/testing';

import { ContactStorageService } from './contact-storage.service';

describe(ContactStorageService.name, () => {
  let service: ContactStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
