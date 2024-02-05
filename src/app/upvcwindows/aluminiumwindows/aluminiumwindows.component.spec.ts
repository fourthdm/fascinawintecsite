import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminiumwindowsComponent } from './aluminiumwindows.component';

describe('AluminiumwindowsComponent', () => {
  let component: AluminiumwindowsComponent;
  let fixture: ComponentFixture<AluminiumwindowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AluminiumwindowsComponent]
    });
    fixture = TestBed.createComponent(AluminiumwindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
