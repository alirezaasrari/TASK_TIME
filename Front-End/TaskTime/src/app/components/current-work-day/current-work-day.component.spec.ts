import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWorkDayComponent } from './current-work-day.component';

describe('CurrentWorkDayComponent', () => {
  let component: CurrentWorkDayComponent;
  let fixture: ComponentFixture<CurrentWorkDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentWorkDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentWorkDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
