import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminiumdoorComponent } from './aluminiumdoor.component';

describe('AluminiumdoorComponent', () => {
  let component: AluminiumdoorComponent;
  let fixture: ComponentFixture<AluminiumdoorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AluminiumdoorComponent]
    });
    fixture = TestBed.createComponent(AluminiumdoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
