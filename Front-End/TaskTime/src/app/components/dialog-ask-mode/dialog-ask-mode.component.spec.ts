import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAskModeComponent } from './dialog-ask-mode.component';

describe('DialogAskModeComponent', () => {
  let component: DialogAskModeComponent;
  let fixture: ComponentFixture<DialogAskModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAskModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAskModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
