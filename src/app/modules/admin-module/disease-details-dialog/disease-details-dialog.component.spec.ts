import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseDetailsDialogComponent } from './disease-details-dialog.component';

describe('DiseaseDetailsDialogComponent', () => {
  let component: DiseaseDetailsDialogComponent;
  let fixture: ComponentFixture<DiseaseDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseaseDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
