import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlNavbarModule } from 'projects/lib/src/public-api';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FlNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
