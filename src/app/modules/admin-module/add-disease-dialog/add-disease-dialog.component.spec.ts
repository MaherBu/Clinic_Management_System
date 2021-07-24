import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiseaseDialogComponent } from './add-disease-dialog.component';

describe('AddDiseaseDialogComponent', () => {
  let component: AddDiseaseDialogComponent;
  let fixture: ComponentFixture<AddDiseaseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDiseaseDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiseaseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
