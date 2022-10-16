import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userRole } from '../models/userRole';
import { accountService } from '../services/accountService';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  userRoles:userRole[]=[]
  id:string="";
  name:string="";
  constructor(private activatedRoute:ActivatedRoute,private accountService:accountService) { }

  ngOnInit(): void {
  debugger
    if(this.activatedRoute.snapshot.queryParams["Id"] != undefined){    
      this.id =this.activatedRoute.snapshot.queryParams["Id"]
      this.LoadRole(this.id)
    }
    if(this.activatedRoute.snapshot.queryParams["name"] != undefined){    
      this.name =this.activatedRoute.snapshot.queryParams["name"]
    }
  }

  LoadRole(id:string){
    this.accountService.getUserRoles(id).subscribe({
      next:data=>{
        debugger
        this.userRoles=data;
      },
      error:err=>console.log(err)
    })
  }

  onUpdate(userRoles:userRole[]){
    debugger
    this.accountService.UpdateUserRole(userRoles).subscribe({
      next:data=>{
        console.log("success")
      },
      error:err =>console.log(err)
    })
  }

}
