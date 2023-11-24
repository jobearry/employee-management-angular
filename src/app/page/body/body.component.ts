import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
  @Input() Employees: Employee[] = [];
  @Output() newEmployeeClick: EventEmitter<Employee> = new EventEmitter();
  @Output() editEmployeeClick: EventEmitter<Employee> = new EventEmitter();
  @Output() deleteEmployeeClick: EventEmitter<Employee> = new EventEmitter();
  outputEmployees: Employee = {} as Employee; 
  idNum: number = 0;
  //EmployeesArray: Employee[] = [];

  isInEditMode: boolean = false;
  editIndex: number = 0;
  
  constructor(){}
  ngOnInit(): void {
  }

  getVal(newInputData: Employee){
    this.outputEmployees = {
      id: this.idNum++,
      name: newInputData.name,
      email: newInputData.email,
      dateHired: newInputData.dateHired,
      isInEditMode: false
    };
    this.newEmployeeClick.emit(this.outputEmployees)
  }

  getEditLocation(editData: Employee){
    this.outputEmployees = editData
    this.isInEditMode = editData.isInEditMode
    this.editIndex = editData.id
  }
  
  check(check: Employee){
    this.outputEmployees = check
    this.isInEditMode = check.isInEditMode
  }

  editInit(editData:Employee){
    this.editEmployeeClick.emit(editData)
  }

  deleteInit(editData : Employee){
    this.deleteEmployeeClick.emit(editData)
  }
}

