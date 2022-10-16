import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { department } from "../models/department";

@Injectable()
export class departmentService
{
    baseURL:string="http://localhost/AssessmentMaqta_API/api/Department";
    constructor(private http:HttpClient){}

    loadAll():Observable<department[]>{
        debugger;
        let userInfo=JSON.parse(localStorage.getItem("UserInfo"));
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: `Bearer  ${userInfo?.token}`
          })
        };
        return this.http.get<department[]>(this.baseURL+ "/LoadAll",httpOptions).pipe()
    }

}