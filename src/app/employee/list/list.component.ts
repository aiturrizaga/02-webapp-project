import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
      this.employeeService.findEmployees()
      .subscribe(res => {
        console.log('Employees:', res);
        this.employees = res;
      });
  }

}
