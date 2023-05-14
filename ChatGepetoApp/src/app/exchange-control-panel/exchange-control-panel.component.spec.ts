import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeControlPanelComponent } from './exchange-control-panel.component';

describe('ExchangeControlPanelComponent', () => {
  let component: ExchangeControlPanelComponent;
  let fixture: ComponentFixture<ExchangeControlPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeControlPanelComponent]
    });
    fixture = TestBed.createComponent(ExchangeControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
