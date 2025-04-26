import { TestBed } from '@angular/core/testing';

import { NavigationStorageService } from './navigation-storage.service';

describe(NavigationStorageService.name, () => {
  let service: NavigationStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
