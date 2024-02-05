import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidingwindowsComponent } from './sidingwindows.component';

describe('SidingwindowsComponent', () => {
  let component: SidingwindowsComponent;
  let fixture: ComponentFixture<SidingwindowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidingwindowsComponent]
    });
    fixture = TestBed.createComponent(SidingwindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
