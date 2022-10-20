import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRestandworkPanelComponent } from './admin-restandwork-panel.component';

describe('AdminRestandworkPanelComponent', () => {
  let component: AdminRestandworkPanelComponent;
  let fixture: ComponentFixture<AdminRestandworkPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRestandworkPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRestandworkPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
