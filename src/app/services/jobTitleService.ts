import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { jobTitle } from "../models/jobTitle";

@Injectable()
export class jobTitleService
{
    baseURL:string="http://localhost/AssessmentMaqta_API/api/JobTitle";
constructor(private http:HttpClient){}
loadAll():Observable<jobTitle[]>{
    debugger;
    let userInfo=JSON.parse(localStorage.getItem("UserInfo"));
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: `Bearer  ${userInfo?.token}`
          })
        };
    return this.http.get<jobTitle[]>(this.baseURL+ "/LoadAll",httpOptions).pipe()
}

}