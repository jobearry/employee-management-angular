import { Component } from '@angular/core';
import { TableComponent } from "../../components/table/table.component";
import { Employee } from '../../models/employee';

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

export const employees: Employee[] = [
  {
    id: 1,
    fname: 'Alice',
    lname: 'Smith',
    email: 'alice.smith@example.com',
    age: 30,
  },
  {
    id: 2,
    fname: 'Bob',
    lname: 'Johnson',
    email: 'bob.johnson@example.com',
    age: 40,
  },
  {
    id: 3,
    fname: 'Charlie',
    lname: 'Brown',
    email: 'charlie.brown@example.com',
    age: 25,
  },
  {
    id: 4,
    fname: 'Diana',
    lname: 'Ross',
    email: 'diana.ross@example.com',
    age: 35,
  },
  {
    id: 5,
    fname: 'Evan',
    lname: 'Taylor',
    email: 'evan.taylor@example.com',
    age: 28,
  },
];
