import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { countryService } from './services/countryService';
import { departmentService } from './services/departmentService';
import { jobTitleService } from './services/jobTitleService';
import { employeeService } from './services/employeeService';
import { UserfullnamePipe } from './pipes/userfullname.pipe';
import { accountService } from './services/accountService';
import { CreateAccountComponent } from './create-account/create-account.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { UserListComponent } from './user-list/user-list.component';
import { RoleListComponent } from './role-list/role-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewEmployeeComponent,
    EmployeeListComponent,
    HomeComponent,
    UserfullnamePipe,
    CreateAccountComponent,
    NewRoleComponent,
    UserListComponent,
    RoleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [countryService,
              departmentService,
              jobTitleService,
              employeeService,
              accountService           
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
