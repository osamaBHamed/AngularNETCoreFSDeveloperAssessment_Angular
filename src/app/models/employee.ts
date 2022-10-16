import { country } from "./country";
import { department } from "./department";
import { jobTitle } from "./jobTitle";

export class employee{
    id:number;
    fName:string;
    lName:string;
    phoneNo:string;
    email:string;
    salary:number;
    hireDate:Date;
    bDate:Date;
    gender:number;
    status:number;
    country_Id:number;
    department_Id:number;
    jobTitle_Id:number;
    country:country;
    department:department;
    jobTitle:jobTitle;
}