import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HarryPotterComponent } from './Componentes/harry-potter/harry-potter.component';

@NgModule({
  declarations: [
    AppComponent,
    HarryPotterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
