import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './page/main/main.component';
import { BodyComponent } from './page/body/body.component';
import { DisplayComponent } from './components/display/display.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BodyComponent,
    DisplayComponent,
    EmployeeFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
