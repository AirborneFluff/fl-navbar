import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './_components/navbar/navbar.component';
import { NavbarMenuComponent } from './_components/navbar-menu/navbar-menu.component';
import { NavbarTitleComponent } from './_components/navbar-title/navbar-title.component';
import { MenuItemComponent } from './_components/menu-item/menu-item.component';
import { GooeyDirective } from './_directives/gooey.directive';
import { MenuTitleComponent } from './_components/menu-title/menu-title.component';
import { NavbarSearchComponent } from './_components/navbar-search/navbar-search.component';
import { NavbarButtonComponent } from './_components/navbar-button/navbar-button.component';
import { FlMenuBtnDirective } from './_directives/fl-menu-btn.directive';
import { FlCustomButtonDirective } from './_directives/fl-custom-button.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarMenuComponent,
    NavbarTitleComponent,
    MenuItemComponent,
    GooeyDirective,
    MenuTitleComponent,
    NavbarSearchComponent,
    NavbarButtonComponent,
    FlMenuBtnDirective,
    FlCustomButtonDirective,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    NavbarMenuComponent,
    NavbarTitleComponent,
    MenuItemComponent,
    MenuTitleComponent,
    NavbarSearchComponent,
    NavbarButtonComponent,
    FlMenuBtnDirective,
    FlCustomButtonDirective
  ]
})
export class FlNavbarModule { }