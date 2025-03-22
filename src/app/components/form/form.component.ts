import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Employee } from '../../models/mEmployee';
import { Store } from '@ngrx/store';
import { EmployeeState } from '../../shared/store/employee.reducer';
import { EmployeeActions } from '../../shared/store/employee.actions';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private store: Store<{employee: EmployeeState}>
  ){}
  @Input() fields: string[] = []
  @Input() headers: string[] = []
  @Input() formGroup!: FormGroup
  
  employeeForm!: FormGroup;

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: [''],
      datehired: ['', Validators.required]
    })
  }

  submitForm(){
    if(this.employeeForm.valid){
      
      this.store.dispatch(EmployeeActions.addEmployee({
        employeeDetails: this.employeeForm.value
      }))
      // const newEmployee = {
      //   id: employeeFormState().length + 1,
      //   ...this.employeeForm.value
      // }

      // employeeFormState.set([...employeeFormState(), newEmployee])
      // console.log(newEmployee)
      // console.log(employeeFormState())
    }
  }
}
