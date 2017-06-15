import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BorracherasComponent } from './Componentes/borrachera/borrachera.component';

@NgModule({
  declarations: [
    AppComponent,
    BorracherasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [BorracherasComponent]
})
export class AppModule { }
