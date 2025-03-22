import { Component, computed, Input, ViewChild } from '@angular/core';
import { FormComponent } from "../form/form.component";
import { CommonModule } from '@angular/common';
import { isModalOpen } from '../../shared/modal.state';

@Component({
  selector: 'app-modals',
  imports: [FormComponent, CommonModule],
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.css'
})
export class ModalsComponent {
  isModalVisible = computed(() => isModalOpen())
  @Input() modalType: string = ""
  @Input() fields: string[] = []
  @Input() headers: string[] = []

  //closeModal
  close(){
    isModalOpen.set(false)
  }

  //saveDetails
  save(){
    
    isModalOpen.set(false)
  }
}
