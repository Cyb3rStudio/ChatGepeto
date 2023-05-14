import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemTextInputPanelComponent } from './system-text-input-panel.component';

describe('SystemTextInputPanelComponent', () => {
  let component: SystemTextInputPanelComponent;
  let fixture: ComponentFixture<SystemTextInputPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemTextInputPanelComponent]
    });
    fixture = TestBed.createComponent(SystemTextInputPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
