import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColouredupvcwindowsComponent } from './colouredupvcwindows.component';

describe('ColouredupvcwindowsComponent', () => {
  let component: ColouredupvcwindowsComponent;
  let fixture: ComponentFixture<ColouredupvcwindowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColouredupvcwindowsComponent]
    });
    fixture = TestBed.createComponent(ColouredupvcwindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
