import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialwindowsComponent } from './specialwindows.component';

describe('SpecialwindowsComponent', () => {
  let component: SpecialwindowsComponent;
  let fixture: ComponentFixture<SpecialwindowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialwindowsComponent]
    });
    fixture = TestBed.createComponent(SpecialwindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
