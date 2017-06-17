import {Component, Input, OnInit} from '@angular/core';
import {PeliculaHarryPotter} from "../Interfaces/HarryPotter";
import {Http} from "@angular/http";

@Component({
  selector: 'app-harry-potter',
  templateUrl: './harry-potter.component.html',
  styleUrls: ['./harry-potter.component.css']
})
export class HarryPotterComponent implements OnInit {
  harrypotters: PeliculaHarryPotter[];
  name: string;

  constructor(private _http: Http) {
  }
  ngOnInit() {
  }
  cargarHarryPotter() {
    this._http
      .get('http://hp-api.herokuapp.com/api/characters/students')
      // .map(response => response.json())
      .subscribe(
        (reponse) => {
          console.log('Response: ', reponse.json());
          console.log(reponse.json());
          let respuesta = reponse.json();
          console.log(respuesta.next);
          //this.harrypotters = reponse.json().results;

          this.harrypotters = (respuesta);
          //LLAMO A UN SOLO ELEMENTO DE JSON
          //this.name = reponse.json()[0].name;
        },
        (error) => {
          console.log('Error: ', error);
        },
        () => {
          console.log('Finally');

        }
      );
  }


}
