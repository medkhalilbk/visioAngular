import { TestBed } from '@angular/core/testing';

import { GetMeetsService } from './get-meets.service';

describe('GetMeetsService', () => {
  let service: GetMeetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMeetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
