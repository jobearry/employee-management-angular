import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent<T extends { [key: string]: any }> {
  @Input() data: T[] = []
  @Input() headers: string[] = []
  @Input() fields: string[] = []
}

