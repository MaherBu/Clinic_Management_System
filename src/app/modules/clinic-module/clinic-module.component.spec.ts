import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicModuleComponent } from './clinic-module.component';

describe('ClinicModuleComponent', () => {
  let component: ClinicModuleComponent;
  let fixture: ComponentFixture<ClinicModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
