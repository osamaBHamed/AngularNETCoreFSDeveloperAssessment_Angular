import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { role } from "../models/role";
import { signIn } from "../models/signIn";
import { signUp } from "../models/signUp";
import { userRole } from "../models/userRole";


@Injectable()
export class accountService{

    baseURL:string="http://localhost/AssessmentMaqta_API/api/Account";
    
    constructor(private http:HttpClient){}

    login(signInModel:signIn):Observable<any>{
        return this.http.post(this.baseURL+ "/Login",signInModel).pipe()
    }

    createAccount(signUpModel:signUp):Observable<any>{
        let userInfo=JSON.parse(localStorage.getItem("UserInfo"));
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: `Bearer  ${userInfo?.token}`
          })
        };
        return this.http.post(this.baseURL+ "/CreateAccount",signUpModel,httpOptions).pipe()
    }

    AddRole(roleModel:role):Observable<any>{
        let userInfo=JSON.parse(localStorage.getItem("UserInfo"));
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: `Bearer  ${userInfo?.token}`
          })
        };
        return this.http.post(this.baseURL+ "/AddRole",roleModel,httpOptions).pipe()
    }

    userList():Observable<signUp[]>{
        let userInfo=JSON.parse(localStorage.getItem("UserInfo"));
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: `Bearer  ${userInfo?.token}`
          })
        };
        return this.http.get<signUp[]>(this.baseURL+ "/GetUsers",httpOptions).pipe()
    }

    getUserRoles(id:string):Observable<userRole[]>{
        let userInfo=JSON.parse(localStorage.getItem("UserInfo"));
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: `Bearer  ${userInfo?.token}`
          })
        };
        return this.http.get<userRole[]>(this.baseURL+ "/UserRoles?UserId="+id,httpOptions).pipe()
    }

    UpdateUserRole(UserRoles:userRole[]):Observable<any>{
        debugger
        let userInfo=JSON.parse(localStorage.getItem("UserInfo"));
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: `Bearer  ${userInfo?.token}`
          })
        };
        return this.http.post(this.baseURL+ "/UpdateUserRole",UserRoles,httpOptions).pipe()
    }

}