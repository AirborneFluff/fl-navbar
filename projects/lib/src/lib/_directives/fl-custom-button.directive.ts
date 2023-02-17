import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[flOnClick]'
})
export class FlCustomButtonDirective {
  @Output() onClick = new EventEmitter();

  constructor() { }
  
  @HostListener('click', ['$event'])
  onClickEvent(event: Event) {
    event.preventDefault();
    this.onClick.emit(event);
  }
}
