import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TophungwindowsComponent } from './tophungwindows.component';

describe('TophungwindowsComponent', () => {
  let component: TophungwindowsComponent;
  let fixture: ComponentFixture<TophungwindowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TophungwindowsComponent]
    });
    fixture = TestBed.createComponent(TophungwindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
