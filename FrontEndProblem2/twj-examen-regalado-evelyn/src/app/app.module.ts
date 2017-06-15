import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HarryPotterComponent } from './Componentes/harry-potter/harry-potter.component';
import { PeliculaHarryPotterComponent } from './Componentes/pelicula-harry-potter/pelicula-harry-potter.component';
import { GenderComponent } from './Componentes/gender/gender.component';
import { HouseComponent } from './Componentes/house/house.component';
import { PatronusComponent } from './Componentes/patronus/patronus.component';
import { SpeciesComponent } from './Componentes/species/species.component';

@NgModule({
  declarations: [
    AppComponent,
    HarryPotterComponent,
    PeliculaHarryPotterComponent,
    GenderComponent,
    HouseComponent,
    PatronusComponent,
    SpeciesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HarryPotterComponent]
})
export class AppModule { }
