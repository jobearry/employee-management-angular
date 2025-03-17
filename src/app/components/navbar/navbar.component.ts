import { Component, EventEmitter, Output } from '@angular/core';
import { Employee } from 'src/app/models/Employee';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: false
})
export class NavbarComponent {
  @Output() newEmployeeClick: EventEmitter<Employee> = new EventEmitter() 
  employee = {} as Employee
  //isInEdit: boolean = false;
  
  showNewEmployeeDetails(){
    this.employee.isInEditMode = false
    this.newEmployeeClick.emit(this.employee)
  }
}
