import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientVisitDialogComponent } from './patient-visit-dialog.component';

describe('PatientVisitDialogComponent', () => {
  let component: PatientVisitDialogComponent;
  let fixture: ComponentFixture<PatientVisitDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientVisitDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientVisitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
