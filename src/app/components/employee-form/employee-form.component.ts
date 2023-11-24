import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit{
  @Output() getInputValClick: EventEmitter<Employee> = new EventEmitter();
  @Output() getEditInputValClick: EventEmitter<Employee> = new EventEmitter();
  @Output() getItemToDeleteClick: EventEmitter<Employee> = new EventEmitter();
  @Input() inputEditInit: boolean = false;
  @Input() editIndex: number = 0;
  @Input() employeeDetails: Employee = {} as Employee;  
  inputEmployee = {
    id: 0,
    name: '',
    email: '',
    dateHired: '',
    isInEditMode: false
  } as Employee

  ngOnInit(): void {
    this.employeeDetails = this.inputEmployee
    console.log(this.employeeDetails)
  }
  sendInputVal(): void{
    console.log(this.inputEmployee);
    console.log(this.inputEditInit)
    this.getInputValClick.emit(this.inputEmployee);
  }
  sendEditInputVal(): void{
    console.log(this.inputEditInit)
    this.inputEmployee.id = this.editIndex;
    this.getEditInputValClick.emit(this.inputEmployee);
    
  }
  sendItemToDeleteVal(): void{
    this.inputEmployee.id = this.editIndex
    this.getItemToDeleteClick.emit(this.inputEmployee)
  }

  ResetEmployeeObject(){
    this.inputEmployee = {
      id: 0,
      name: '',
      email: '',
      dateHired: '',
      isInEditMode: false
    };
  }
}
