import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UAExchangePanelComponent } from './uaexchange-panel.component';

describe('UAExchangePanelComponent', () => {
  let component: UAExchangePanelComponent;
  let fixture: ComponentFixture<UAExchangePanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UAExchangePanelComponent]
    });
    fixture = TestBed.createComponent(UAExchangePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
