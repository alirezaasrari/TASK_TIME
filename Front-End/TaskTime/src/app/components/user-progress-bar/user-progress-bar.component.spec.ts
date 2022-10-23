import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProgressBarComponent } from './user-progress-bar.component';

describe('UserProgressBarComponent', () => {
  let component: UserProgressBarComponent;
  let fixture: ComponentFixture<UserProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
