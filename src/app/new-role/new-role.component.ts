import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { role } from '../models/role';
import { accountService } from '../services/accountService';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.css']
})
export class NewRoleComponent implements OnInit {
@ViewChild('f') roleForm:NgForm;
errorMessage:string=""
actionStatus:boolean=true
  constructor(private accountService:accountService) { }

  ngOnInit(): void {
  }

  onSave(){
    if(this.roleForm.valid){
    var roleModel=new role();
    roleModel.name=this.roleForm.value["txtName"];
    this.accountService.AddRole(roleModel).subscribe({
      next:data=>{
        console.log("success")
        this.errorMessage="Role added Successfuly"
        this.actionStatus=true
      },
      error:err =>{
        this.errorMessage="Faild to add Role"
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
