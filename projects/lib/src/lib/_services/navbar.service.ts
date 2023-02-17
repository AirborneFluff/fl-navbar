import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private _menuExpanded = false;
  navbarElement: any = undefined;

  constructor() {

  }

  get menuExpanded() { return this._menuExpanded }

  openMenu() {
    this._menuExpanded = true;
  }
  closeMenu() {
    this._menuExpanded = false;
  }
}
