import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { nav } from './nav-config';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(){}
  getNav = [...nav]
  isBurgerOpen: boolean = false

  navigateTo(btnRoute: string){
    switch(btnRoute){
      case "Home":{
        return ['/home']
      }
      case "Manage":{
        return ['/employees']
      }
      default:{
        return ['*']
      }
    }
  }
}
