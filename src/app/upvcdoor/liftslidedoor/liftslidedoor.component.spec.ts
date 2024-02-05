import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftslidedoorComponent } from './liftslidedoor.component';

describe('LiftslidedoorComponent', () => {
  let component: LiftslidedoorComponent;
  let fixture: ComponentFixture<LiftslidedoorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiftslidedoorComponent]
    });
    fixture = TestBed.createComponent(LiftslidedoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
