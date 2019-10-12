import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtractionPage } from './subtraction.page';

describe('SubtractionPage', () => {
  let component: SubtractionPage;
  let fixture: ComponentFixture<SubtractionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtractionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtractionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
