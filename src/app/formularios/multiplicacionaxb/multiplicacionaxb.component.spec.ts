import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicacionaxbComponent } from './multiplicacionaxb.component';

describe('MultiplicacionaxbComponent', () => {
  let component: MultiplicacionaxbComponent;
  let fixture: ComponentFixture<MultiplicacionaxbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplicacionaxbComponent]
    });
    fixture = TestBed.createComponent(MultiplicacionaxbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
