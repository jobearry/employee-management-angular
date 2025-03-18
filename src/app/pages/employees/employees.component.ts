import { Component } from '@angular/core';
import { TableComponent } from "../../components/table/table.component";
import { employees } from '../../models/employee';

@Component({
  selector: 'app-employees',
  imports: [TableComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  myEmployees = employees
  headers = ["ID", "First Name", "Last Name", "Email", "Age"]
  fields = [...Object.keys(this.myEmployees[0])]
}


