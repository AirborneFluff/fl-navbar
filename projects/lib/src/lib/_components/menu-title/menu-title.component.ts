import { Component } from '@angular/core';
import { NavbarService } from '../../_services/navbar.service';

@Component({
  selector: 'fl-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent {

  constructor(private navbar: NavbarService) {}

  closeMenu() {
    this.navbar.closeMenu();
  }

}
