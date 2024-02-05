import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasementdoorComponent } from './casementdoor.component';

describe('CasementdoorComponent', () => {
  let component: CasementdoorComponent;
  let fixture: ComponentFixture<CasementdoorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasementdoorComponent]
    });
    fixture = TestBed.createComponent(CasementdoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
