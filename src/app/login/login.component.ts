import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { signIn } from '../models/signIn';
import { accountService } from '../services/accountService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage:string=""
  @ViewChild("f") SignInForm:NgForm;
  constructor(private accountService:accountService,private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    var signInModel=new signIn();
    signInModel.username=this.SignInForm.value["txtUsername"];
    signInModel.password=this.SignInForm.value["txtPassword"];
    this.accountService.login(signInModel).subscribe({
      next:data=>{
        debugger
        localStorage.setItem("UserInfo",JSON.stringify(data))
        this.router.navigate(['Home/empList']);
      },
      error:err=>{
        this.errorMessage="Invalid username or password"
        console.log(err)
      }
    })
  }

}
