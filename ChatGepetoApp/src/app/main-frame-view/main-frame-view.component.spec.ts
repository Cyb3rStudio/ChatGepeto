import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFrameViewComponent } from './main-frame-view.component';

describe('MainFrameViewComponent', () => {
  let component: MainFrameViewComponent;
  let fixture: ComponentFixture<MainFrameViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainFrameViewComponent]
    });
    fixture = TestBed.createComponent(MainFrameViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
