import {Component, Input, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {PeliculaHarryPotter} from "../Interfaces/HarryPotter";

@Component({
  selector: 'app-pelicula-harry-potter',
  templateUrl: './pelicula-harry-potter.component.html',
  styleUrls: ['./pelicula-harry-potter.component.css']
})
export class PeliculaHarryPotterComponent implements OnInit {
  @Input() harrypotter:PeliculaHarryPotter;

  constructor() { }

  ngOnInit() {
  }
}
