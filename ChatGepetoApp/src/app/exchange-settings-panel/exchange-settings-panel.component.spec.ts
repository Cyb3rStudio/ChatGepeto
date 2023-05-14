import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeSettingsPanelComponent } from './exchange-settings-panel.component';

describe('ExchangeSettingsPanelComponent', () => {
  let component: ExchangeSettingsPanelComponent;
  let fixture: ComponentFixture<ExchangeSettingsPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeSettingsPanelComponent]
    });
    fixture = TestBed.createComponent(ExchangeSettingsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
