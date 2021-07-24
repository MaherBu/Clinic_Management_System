import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiseaseSyndromesComponent } from './add-disease-syndromes.component';

describe('AddDiseaseSyndromesComponent', () => {
  let component: AddDiseaseSyndromesComponent;
  let fixture: ComponentFixture<AddDiseaseSyndromesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDiseaseSyndromesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiseaseSyndromesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
