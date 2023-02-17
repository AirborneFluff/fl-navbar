import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fl-navbar-search',
  templateUrl: './navbar-search.component.html',
  styleUrls: ['./navbar-search.component.css']
})
export class NavbarSearchComponent {
  @Input() searchPlaceholder: string = "";
  @Output() onKeyDown = new EventEmitter<string>();
  @Output() onChange = new EventEmitter<string>();
  searchField: string = "";
  
  onSearchKeyEvent(event: any) {
    setTimeout(() => {
      this.onKeyDown.emit(this.searchField);
    })
  }

  onSearchChangeEvent(event: any) {
    setTimeout(() => {
      this.onChange.emit(this.searchField);
    })
  }
}