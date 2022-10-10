import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLeavingWorkComponent } from './dialog-leaving-work.component';

describe('DialogLeavingWorkComponent', () => {
  let component: DialogLeavingWorkComponent;
  let fixture: ComponentFixture<DialogLeavingWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLeavingWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLeavingWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
