import { Component, computed, ViewChild } from '@angular/core';
import { TableComponent } from "../../components/table/table.component";
import { Employee, employees } from '../../models/mEmployee';
import { CommonModule } from '@angular/common';
import { ModalsComponent } from '../../components/modals/modals.component';
import { isModalOpen } from '../../shared/modal.state';

@Component({
  selector: 'app-employees',
  imports: [TableComponent, ModalsComponent, CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  constructor(){}
  myEmployees: Employee[] = employees
  headers = ["ID", "First Name", "Last Name", "Email", "Age"]
  fields = ["id","fname","lname","email","age"]

  viewEmployeeForm(){
    isModalOpen.set(true)
  }
}


