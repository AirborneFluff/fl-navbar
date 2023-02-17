import { Component } from '@angular/core';
import { NavbarService } from '../../_services/navbar.service';

@Component({
  selector: 'fl-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.css']
})
export class NavbarButtonComponent {

  constructor(public navbar: NavbarService) {}

  menuButtonClick() {
    this.navbar.openMenu();
  }

}
