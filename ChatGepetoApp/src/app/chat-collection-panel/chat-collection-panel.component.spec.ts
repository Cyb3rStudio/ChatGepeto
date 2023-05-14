import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCollectionPanelComponent } from './chat-collection-panel.component';

describe('ChatCollectionPanelComponent', () => {
  let component: ChatCollectionPanelComponent;
  let fixture: ComponentFixture<ChatCollectionPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatCollectionPanelComponent]
    });
    fixture = TestBed.createComponent(ChatCollectionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
