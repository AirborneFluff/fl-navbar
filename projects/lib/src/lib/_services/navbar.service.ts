import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private _menuExpanded = false;

  constructor() { }

  get menuExpanded() { return this._menuExpanded }
  
  openMenu() {
    this._menuExpanded = true;
  }
  closeMenu() {
    this._menuExpanded = false;
  }
}
