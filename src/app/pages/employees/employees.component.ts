import { Component, computed, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from "../../components/table/table.component";
import { CommonModule } from '@angular/common';
import { ModalsComponent } from '../../components/modals/modals.component';
import { isModalOpen } from '../../shared/modal.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { employeeReducer, EmployeeState } from '../../shared/store/employee.reducer';
import { selectAllEmployees } from '../../shared/store/employee.selector';
import { Observable } from 'rxjs';
import { Employee } from '../../models/mEmployee';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports:[
    TableComponent, ModalsComponent, CommonModule,
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {
  constructor(
    private store: Store<{employee: EmployeeState}>
  ){}
  // myEmployees: Employee[] = 
  employeeForm!: FormGroup
  headers = ["First Name", "Last Name", "Email", "Date Hired"]
  fields = ["fname","lname","email","datehired"]
  employeeState$!: Observable<Employee[]>
  ngOnInit(): void {
    this.employeeState$ = this.store.select(selectAllEmployees)
  }

  viewEmployeeForm(){
    isModalOpen.set(true)
  }
}


