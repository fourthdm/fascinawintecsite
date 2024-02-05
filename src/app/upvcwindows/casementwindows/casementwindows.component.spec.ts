import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasementwindowsComponent } from './casementwindows.component';

describe('CasementwindowsComponent', () => {
  let component: CasementwindowsComponent;
  let fixture: ComponentFixture<CasementwindowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasementwindowsComponent]
    });
    fixture = TestBed.createComponent(CasementwindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
