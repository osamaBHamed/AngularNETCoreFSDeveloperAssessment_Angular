import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signUp } from '../models/signUp';
import { accountService } from '../services/accountService';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  signUp:signUp[]=[]
  constructor(private accountService:accountService,private router:Router) { }

  ngOnInit(): void {

    this.accountService.userList().subscribe({
      next:data=>{
        this.signUp=data
      },
      error:err=>console.log(err)
    })

  }

  onAddRole(id:string, name:string){
    this.router.navigate(['/Home/roleList'],{queryParams:{Id:id,name:name}})
  }

}
