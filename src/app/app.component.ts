import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './shared/store/employee.reducer';

@Component({
  selector: 'app-root',
  imports: [
    NavComponent, RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee-management';
}
