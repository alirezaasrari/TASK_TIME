import { TestBed } from '@angular/core/testing';
import { TaskTimeService } from './taskTime';

describe('EmployeesService', () => {
  let service: TaskTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
