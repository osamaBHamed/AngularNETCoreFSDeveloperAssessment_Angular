import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { employee } from "../models/employee";

@Injectable()
export class employeeService
{
    baseURL:string="http://localhost/AssessmentMaqta_API/api/Employee";
    constructor(private http:HttpClient){}

    loadAll():Observable<employee[]>{
        debugger;
        let userInfo=JSON.parse(localStorage.getItem("UserInfo"));
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: `Bearer  ${userInfo?.token}`
          })
        };
        return this.http.get<employee[]>(this.baseURL+ "/LoadAll",httpOptions).pipe()
    }

    load(id:number):Observable<employee[]>{
        debugger;
        let userInfo=JSON.parse(localStorage.getItem("UserInfo"));
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: `Bearer  ${userInfo?.token}`
          })
        };
        return this.http.get<employee[]>(this.baseURL+ "/Load?Id="+id,httpOptions).pipe()
    }

    SearchCriteria(name:string, dept_id:number):Observable<employee[]>{
        debugger;
        let userInfo=JSON.parse(localStorage.getItem("UserInfo"));
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: `Bearer  ${userInfo?.token}`
          })
        };
        return this.http.get<employee[]>(this.baseURL+ "/SearchCriteria?name=" + name+ "&dept_Id="+dept_id,httpOptions).pipe()
    }

    insert(emp:employee):Observable<any>{
        debugger;
        let userInfo=JSON.parse(localStorage.getItem("UserInfo"));
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: `Bearer  ${userInfo?.token}`
          })
        };
        return this.http.post(this.baseURL+ "/Insert",emp,httpOptions)
    }

    update(emp:employee):Observable<any>{
        debugger;
        let userInfo=JSON.parse(localStorage.getItem("UserInfo"));
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: `Bearer  ${userInfo?.token}`
          })
        };
        return this.http.post(this.baseURL+ "/Update",emp,httpOptions)
    }

    delete(id:number):Observable<any>{
        debugger;
        let userInfo=JSON.parse(localStorage.getItem("UserInfo"));
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: `Bearer  ${userInfo?.token}`
          })
        };
        return this.http.post(this.baseURL+ "/Delete?Id="+id,null,httpOptions)
    }



}