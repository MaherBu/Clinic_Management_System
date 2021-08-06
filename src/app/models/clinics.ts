export class Clinic{
    ClinicId?:number;
    UserName?:String;
    Password?:String;
    ClinicOpeningDate?:String;
    ClinicClosingDate?:String;
    Region?:String;
    AdminClinics?: [];
    Doctors?: [];
    Surgeries?: [];
    SurgeryVisits?: [];
    Visits?: [];
}