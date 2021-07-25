import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClinicDialogComponent } from './add-clinic-dialog.component';

describe('AddClinicDialogComponent', () => {
  let component: AddClinicDialogComponent;
  let fixture: ComponentFixture<AddClinicDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClinicDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClinicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
