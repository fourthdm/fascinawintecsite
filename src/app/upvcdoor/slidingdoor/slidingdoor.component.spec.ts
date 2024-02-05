import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingdoorComponent } from './slidingdoor.component';

describe('SlidingdoorComponent', () => {
  let component: SlidingdoorComponent;
  let fixture: ComponentFixture<SlidingdoorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidingdoorComponent]
    });
    fixture = TestBed.createComponent(SlidingdoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
