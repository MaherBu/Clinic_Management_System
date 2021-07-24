import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterNavBarComponent } from './reporter-nav-bar.component';

describe('ReporterNavBarComponent', () => {
  let component: ReporterNavBarComponent;
  let fixture: ComponentFixture<ReporterNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporterNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
