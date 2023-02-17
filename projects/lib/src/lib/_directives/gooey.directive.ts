import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fl-gooey]'
})
export class GooeyDirective implements AfterViewInit {
  navElement: any = this.element.nativeElement;
  navHeight: number = 0;
  lastScrollTop: number = 0;
  posOnPage: number = 0;
  topPosition: number = 0;
  scrollDir: number = 0;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  menuButtonClick() {
  }

  ngAfterViewInit(): void {
    this.navHeight = this.navElement.offsetHeight;
    this.renderer.setStyle(this.navElement, "top", `0px`)
  }

  @HostListener('window:scroll') scrolling() { // limit posOnPage to 0
    let scrollTop = window.scrollY;
    if (scrollTop < this.lastScrollTop) { // Scrolled up
      if (this.scrollDir <= 0) {
        if (this.posOnPage + this.navHeight < scrollTop)
          this.posOnPage = Math.max(this.lastScrollTop - this.navHeight, 0);
        this.scrollDir = 1;
      }
    }
    else { // Scrolled down
      if (this.scrollDir >= 0) {
        if (this.topPosition >= 0) {
          this.posOnPage = Math.max(this.lastScrollTop, 0)
        }
        this.scrollDir = -1;
      }
    }
    this.topPosition = Math.min(this.posOnPage - scrollTop, 0)
    this.renderer.setStyle(this.navElement, "top", `${this.topPosition}px`)
    this.lastScrollTop = scrollTop;
  }
}
