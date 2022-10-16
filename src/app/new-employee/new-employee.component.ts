import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeStatusEnum, GenderEnum } from '../enums/enums';
import { country } from '../models/country';
import { department } from '../models/department';
import { employee } from '../models/employee';
import { jobTitle } from '../models/jobTitle';
import { countryService } from '../services/countryService';
import { departmentService } from '../services/departmentService';
import { employeeService } from '../services/employeeService';
import { jobTitleService } from '../services/jobTitleService';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  @ViewChild("f") employeeForm:NgForm
  id:number;
  isEditMode:boolean=false
  countries:country[]=[];
  departments:department[]=[];
  jobTitles:jobTitle[]=[];

  errorMessage:string=""
  actionStatus:boolean=true

  employeeStatusEnum= EmployeeStatusEnum;
  employeeStatuskeys=[]

  genderEnum= GenderEnum;
  genderkeys=[]

  constructor(private countryService:countryService,
    private departmentService:departmentService,
    private jobTitleService:jobTitleService,
    private employeeService:employeeService,
    private activatedRoute:ActivatedRoute
    ) {
      this.employeeStatuskeys  = Object.keys(this.employeeStatusEnum).filter(f => !isNaN(Number(f)))
      this.genderkeys  = Object.keys(this.genderEnum).filter(f => !isNaN(Number(f)))
     }

  ngOnInit(): void {
    debugger;
    // fill country
    this.countryService.loadAll().subscribe({
      next:data=>this.countries=data,
      error:err =>console.log(err)
    });

    // fill department
    this.departmentService.loadAll().subscribe({
      next:data=>this.departments=data,
      error:err =>console.log(err)
    });

    // fill job Title
    this.jobTitleService.loadAll().subscribe({
      next:data=>this.jobTitles=data,
      error:err =>console.log(err)
    });
  debugger    
    if(this.activatedRoute.snapshot.queryParams["Id"] != undefined){    
      this.id =this.activatedRoute.snapshot.queryParams["Id"]
      this.onEdit()
    }

  
  }

  onEdit(){
    this.employeeService.load(this.id).subscribe({
      next:data=>{
        debugger
        this.isEditMode=true
        this.employeeForm.form.patchValue({
          "txtFirstName":data["fName"],
          "txtLastName":data["lName"],
          "txtPhoneNo":data["phoneNo"],
          "txtEmail":data["email"],
          "txtSalary":data["salary"],
          "txtHireDate":data["hireDate"],
          "txtBirthDate":data["bDate"],
          "ddlGender":data["gender"],
          "ddlStatus":data["status"],
          "ddlNationality":data["country_Id"],
          "ddlDepartment":data["department_Id"],
          "ddlJobTitle":data["jobTitle_Id"]
        })
      },
      error:err=>console.log(err)

    })
  }

  onSave(){
    debugger
    if(this.employeeForm.valid){
    var emp=new employee();
    emp.fName=this.employeeForm.value["txtFirstName"];
    emp.lName=this.employeeForm.value["txtLastName"];
    emp.phoneNo=this.employeeForm.value["txtPhoneNo"];
    emp.email=this.employeeForm.value["txtEmail"];
    emp.salary=parseFloat(this.employeeForm.value["txtSalary"]);
    emp.hireDate=this.employeeForm.value["txtHireDate"];
    emp.bDate=this.employeeForm.value["txtBirthDate"];
    emp.gender=parseInt(this.employeeForm.value["ddlGender"]);
    emp.status=parseInt(this.employeeForm.value["ddlStatus"]);
    emp.country_Id=parseInt(this.employeeForm.value["ddlNationality"]);
    emp.department_Id=parseInt(this.employeeForm.value["ddlDepartment"]);
    emp.jobTitle_Id=parseInt(this.employeeForm.value["ddlJobTitle"]);

    this.employeeService.insert(emp).subscribe({
      next:data=>{
        console.log("success")
        this.errorMessage="Employee added Successfuly"
        this.actionStatus=true
      },
      error:err =>{
        this.errorMessage="Faild to add Employee"
        console.log(err)
        this.actionStatus=false
      }
    });    
  }
  else{
    this.errorMessage="Please fill required Fileds"
    this.actionStatus=false
  }

  }


  onUpdate(){
    debugger
    if(this.employeeForm.valid){
    var emp=new employee();
    emp.id=this.id;
    emp.fName=this.employeeForm.value["txtFirstName"];
    emp.lName=this.employeeForm.value["txtLastName"];
    emp.phoneNo=this.employeeForm.value["txtPhoneNo"];
    emp.email=this.employeeForm.value["txtEmail"];
    emp.salary=parseFloat(this.employeeForm.value["txtSalary"]);
    emp.hireDate=this.employeeForm.value["txtHireDate"];
    emp.bDate=this.employeeForm.value["txtBirthDate"];
    emp.gender=parseInt(this.employeeForm.value["ddlGender"]);
    emp.status=parseInt(this.employeeForm.value["ddlStatus"]);
    emp.country_Id=parseInt(this.employeeForm.value["ddlNationality"]);
    emp.department_Id=parseInt(this.employeeForm.value["ddlDepartment"]);
    emp.jobTitle_Id=parseInt(this.employeeForm.value["ddlJobTitle"]);

    this.employeeService.update(emp).subscribe({
      next:data=>{
        console.log("success")
        this.errorMessage="Employee Updated Successfuly"
        this.actionStatus=true
      },
      error:err =>{
        this.errorMessage="Faild to Update Employee"
        console.log(err)
        this.actionStatus=false
      }
    });    
  }
  else{
    this.errorMessage="Please fill required Fileds"
    this.actionStatus=false
  }

  }

}
