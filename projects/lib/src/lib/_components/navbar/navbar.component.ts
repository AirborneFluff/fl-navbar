import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { NavbarService } from '../../_services/navbar.service';

@Component({
  selector: 'fl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {

  constructor(public navbar: NavbarService, private element: ElementRef) { }

  ngAfterViewInit(): void {
    this.navbar.navbarElement = document.getElementById("navbar")
  }
}
