import { Component, HostListener, AfterViewInit, Renderer2 } from '@angular/core';
import { NavbarService } from '../../_services/navbar.service';

@Component({
  selector: 'fl-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements AfterViewInit {
  private _lastScrollTop = 0;
  private _navbarHeight = 0;
  private _lastNavbarTop = 0;

  constructor(private navbar: NavbarService, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this._navbarHeight = this.navbar.navbarElement.offsetHeight
    })
  }

  @HostListener('scroll', ['$event']) scrolling(event: any) {
    let currentScrollTop = event.target.scrollTop;

    let scrollDistance = Math.abs(this._lastScrollTop - currentScrollTop);
    scrollDistance = Math.round(scrollDistance);
    if (scrollDistance === 0) return;

    this._lastScrollTop < currentScrollTop ? this.onScrollDown(scrollDistance) : this.onScrollUp(scrollDistance);

    this._lastScrollTop = currentScrollTop;
  }

  onScrollDown(scrollDistance: number) {
    let navTop = Math.max(this._lastNavbarTop - scrollDistance, -this._navbarHeight)
    this.setNavbarPosition(navTop);
  }

  onScrollUp(scrollDistance: number) {
    let navTop = Math.min(this._lastNavbarTop + scrollDistance, 0);
    this.setNavbarPosition(navTop);
  }

  setNavbarPosition(pos: number) {
    if (this._lastNavbarTop == pos) return;

    this.renderer.setStyle(this.navbar.navbarElement, "top", `${pos}px`)
    this._lastNavbarTop = pos;
  }

}
