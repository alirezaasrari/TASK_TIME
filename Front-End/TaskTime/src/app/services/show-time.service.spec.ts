import { TestBed } from '@angular/core/testing';

import { ShowTimeService } from './show-time.service';

describe('ShowTimeService', () => {
  let service: ShowTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
