import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { country } from "../models/country";

@Injectable()
export class countryService
{
    baseURL:string="http://localhost/AssessmentMaqta_API/api/Country";
constructor(private http:HttpClient){}
loadAll():Observable<country[]>{
    debugger;
    let userInfo=JSON.parse(localStorage.getItem("UserInfo"));
        debugger;
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: `Bearer  ${userInfo?.token}`
          })
        };
    return this.http.get<country[]>(this.baseURL+ "/LoadAll",httpOptions).pipe()
}

}