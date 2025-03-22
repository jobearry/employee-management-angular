import { Component, computed, Input, ViewChild } from '@angular/core';
import { FormComponent } from "../form/form.component";
import { CommonModule } from '@angular/common';
import { isModalOpen } from '../../shared/modal.state';
import { FormGroup } from '@angular/forms';
import { EmployeeState } from '../../shared/store/employee.reducer';
import { Store } from '@ngrx/store';
import { EmployeeActions } from '../../shared/store/employee.actions';

@Component({
  selector: 'app-modals',
  imports: [FormComponent, CommonModule],
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.css'
})
export class ModalsComponent {
  constructor(
  ){}
  @Input() modalType: string = ""
  @Input() formGroup!: FormGroup
  @Input() fields: string[] = []
  @Input() headers: string[] = []

  isModalVisible = computed(() => isModalOpen())

  //closeModal
  close(){
    isModalOpen.set(false)
  }

  //saveDetails
  addEmployee(){
    isModalOpen.set(false)
  }
}
