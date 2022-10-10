import { TestBed } from '@angular/core/testing';

import { StartEmployeeInformationService } from './start-employee-information.service';

describe('StartEmployeeInformationService', () => {
  let service: StartEmployeeInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartEmployeeInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
