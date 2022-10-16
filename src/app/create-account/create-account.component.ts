import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { signUp } from '../models/signUp';
import { accountService } from '../services/accountService';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  @ViewChild('f') signUpForm:NgForm;
  errorMessage:string=""
  actionStatus:boolean=true
  constructor(private accountService:accountService) { }

  ngOnInit(): void {
  }

  onSave(){
    debugger
    if(this.signUpForm.valid){
    var signUpModel=new signUp();
    signUpModel.name=this.signUpForm.value["txtName"]
    signUpModel.email=this.signUpForm.value["txtEmail"]
    signUpModel.username=this.signUpForm.value["txtUsername"]
    signUpModel.password=this.signUpForm.value["txtPassword"]
    signUpModel.confirmPassword=this.signUpForm.value["txtConfirmPassword"]

      this.accountService.createAccount(signUpModel).subscribe({
        next:data=>{
          console.log("success")
          this.errorMessage="User added Successfuly"
          this.actionStatus=true
        },
        error:err =>{
          this.errorMessage="Faild to add User"
          console.log(err)
          this.actionStatus=false
        }
      })
    }
    else
    {
      this.errorMessage="Please fill required Fileds"
      this.actionStatus=false
    }

  }

}
