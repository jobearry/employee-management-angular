import { Component } from '@angular/core';
import { Employee } from 'src/app/models/Employee';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    standalone: false
})
export class MainComponent {
  employees: Employee[] = [];
  meseji: string = `"I am your parent" \n   --Darth Vader`;
  
  PostChildData(data:Employee){
    this.employees.push(data);
  }

  UpdateChildData(data: Employee){
    this.employees[data.id].name = data.name
    this.employees[data.id].email = data.email
    this.employees[data.id].dateHired = data.dateHired
    this.employees[data.id].isInEditMode = false
  }

  DeleteChildData(data: Employee){
    this.employees.splice(data.id, 1)
  }
}


