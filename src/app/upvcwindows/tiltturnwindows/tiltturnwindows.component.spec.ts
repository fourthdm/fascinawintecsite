import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiltturnwindowsComponent } from './tiltturnwindows.component';

describe('TiltturnwindowsComponent', () => {
  let component: TiltturnwindowsComponent;
  let fixture: ComponentFixture<TiltturnwindowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiltturnwindowsComponent]
    });
    fixture = TestBed.createComponent(TiltturnwindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
