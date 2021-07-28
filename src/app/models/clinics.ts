export class Clinic{
    clinicId?:number;
    userName?:String;
    password?:String;
    clinicOpeningDate?:String;
    clinicClosingDate?:String;
    region?:String;
    adminClinics?: [];
    doctors?: [];
    surgeries?: [];
    surgeryVisits?: [];
    visits?: [];
}