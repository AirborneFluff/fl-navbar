import { Component, Input } from '@angular/core';
import { NavbarService } from '../../_services/navbar.service';

@Component({
  selector: 'fl-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css', '../../styles.css']
})
export class NavbarMenuComponent {

  constructor(public navbar: NavbarService) {}

  closeMenu() {
    this.navbar.closeMenu();
  }

}
