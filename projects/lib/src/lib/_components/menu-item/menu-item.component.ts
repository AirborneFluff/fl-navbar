import { Component, EventEmitter, Output } from '@angular/core';
import { NavbarService } from '../../_services/navbar.service';

@Component({
  selector: 'fl-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Output() onClick = new EventEmitter();

  constructor(private navbar: NavbarService) {}

  onClickEvent() {
    this.navbar.closeMenu();
    this.onClick.emit();
  }
}
