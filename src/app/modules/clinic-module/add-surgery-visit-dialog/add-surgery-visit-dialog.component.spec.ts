import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSurgeryVisitDialogComponent } from './add-surgery-visit-dialog.component';

describe('AddSurgeryVisitDialogComponent', () => {
  let component: AddSurgeryVisitDialogComponent;
  let fixture: ComponentFixture<AddSurgeryVisitDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSurgeryVisitDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSurgeryVisitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
