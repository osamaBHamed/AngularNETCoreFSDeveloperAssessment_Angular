import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { department } from '../models/department';
import { employee } from '../models/employee';
import { departmentService } from '../services/departmentService';
import { employeeService } from '../services/employeeService';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @ViewChild('txtSearchName') txtSearchName:ElementRef;
  @ViewChild('ddlSearchDepartment') ddlSearchDepartment:ElementRef;
  departments:department[]=[];
  employees:employee[]=[];

  constructor(private employeeService:employeeService,
    private departmentService:departmentService,
    private router:Router
    ) { }

  ngOnInit(): void {
    // fill department
    this.departmentService.loadAll().subscribe({
      next:data=>this.departments=data,
      error:err =>console.log(err)
    });
  }

  onSearch(){
    debugger
    let name=this.txtSearchName.nativeElement.value
    let department_id=this.ddlSearchDepartment.nativeElement.value

    this.employeeService.SearchCriteria(name,department_id).subscribe({
      next:data=>
      {
        debugger
        this.employees=data
      },
      error:err=>console.log(err)
    })

  }

  onDelete(id:number){
    debugger
    this.employeeService.delete(id).subscribe({
      next:data=>
      {
        debugger
        this.LoadAll()
      },

      error:err=>console.log(err)
    })
  }

  onEdit(id:number){
    this.router.navigate(['/Home/newEmp'],{queryParams:{Id:id}})
  }

  LoadAll() {
    debugger
    // fill all employees
    this.employeeService.loadAll().subscribe({
      next:data=>this.employees=data,
      error:err =>console.log(err)
    });
  }

}
