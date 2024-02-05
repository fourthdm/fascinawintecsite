import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidefolddoorComponent } from './slidefolddoor.component';

describe('SlidefolddoorComponent', () => {
  let component: SlidefolddoorComponent;
  let fixture: ComponentFixture<SlidefolddoorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidefolddoorComponent]
    });
    fixture = TestBed.createComponent(SlidefolddoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
