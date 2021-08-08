export interface Visit{
    VisitId?:number;
    PatientId?:number;
    ClinicId?:number;
    DiseaseId?:number;
    DrId?:number;
    PatientFullName?:String;
    ClinicName?:String;
    DiseaseName?:String;
    DrName?:String;
    VisitDate?:String;
    Scheduled?:boolean;
    Price?:number;
    Wieght?:number;
    Length?:number;
    Smoking?:boolean;
    Note?:String;
}