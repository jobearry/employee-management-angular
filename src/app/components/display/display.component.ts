import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  @Input() Employees: Employee[] = [];
  @Output() editDetailsClick: EventEmitter<Employee> = new EventEmitter();

  ngOnInit(): void {
    
  }

  showEditDetails(employee: Employee){
    employee.isInEditMode = true;
    this.editDetailsClick.emit(employee)
  }
}
