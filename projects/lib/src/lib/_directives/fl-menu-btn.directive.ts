import { Directive, HostListener } from '@angular/core';
import { NavbarService } from '../_services/navbar.service';

@Directive({
  selector: '[flOpenMenu]'
})
export class FlMenuBtnDirective {

  constructor(private navbar: NavbarService) { }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    this.navbar.openMenu();
  }
}
