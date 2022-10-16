import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Home', component:HomeComponent,children:[
    {path:'newEmp',component:NewEmployeeComponent},
    {path:'empList',component: EmployeeListComponent},
    {path:'createAccount',component: CreateAccountComponent},
    {path:'newRole',component:NewRoleComponent},
    {path:'UserList',component:UserListComponent},
    {path:'roleList',component:RoleListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
