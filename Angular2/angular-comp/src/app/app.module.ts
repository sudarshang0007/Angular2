import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DatainComponent } from './datain/datain.component';
import { DataoutComponent } from './dataout/dataout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatainComponent,
    DataoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
