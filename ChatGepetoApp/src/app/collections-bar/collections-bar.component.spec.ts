import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsBarComponent } from './collections-bar.component';

describe('CollectionsBarComponent', () => {
  let component: CollectionsBarComponent;
  let fixture: ComponentFixture<CollectionsBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionsBarComponent]
    });
    fixture = TestBed.createComponent(CollectionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
