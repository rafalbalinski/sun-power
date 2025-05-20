import { TestBed } from '@angular/core/testing';

import { MalfunctionStorageService } from './malfunction-storage.service';

describe(MalfunctionStorageService.name, () => {
  let service: MalfunctionStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MalfunctionStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
