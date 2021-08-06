import { DataService } from 'src/app/services/data-service';
import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-clinic-dashboard',
  templateUrl: './clinic-dashboard.component.html',
  styleUrls: ['./clinic-dashboard.component.css']
})
export class ClinicDashboardComponent implements OnInit {

  clinicCount: number;
  diseaseCount: number;
  patientCount: number;

  constructor(private ds:DataService) { }
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Corona', 'Flu', 'Enteritis', 'Tonsillitis', 'Hepatitis', 'Appendix'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [100, 37, 60, 45, 46, 33], label: 'Most common Diseases' }
  ];
  ngOnInit(): void {
    this.ds.getClinicCounts()
    .then(
      (x)=>{
        this.clinicCount = x 
      }
    );
    this.ds.getDiseaseCounts()
    .then(
      (x)=>{
        this.diseaseCount = x 
      }
    );
    this.ds.getPatientCounts()
    .then(
      (x)=>{
        this.patientCount = x 
      }
    );
  }

}
