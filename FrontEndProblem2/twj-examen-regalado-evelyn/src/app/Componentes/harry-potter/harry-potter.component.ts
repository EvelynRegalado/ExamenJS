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
      .subscribe(
        (reponse) => {
          console.log('Response: ', reponse.json());
          console.log(reponse.json());
          let respuesta = reponse.json();
          console.log(respuesta.next);
          this.harrypotters = (respuesta);
          this.harrypotters = this.harrypotters.map(
            (harrypotter) => {
              harrypotter.image = "../assets/ImagenesHarryPotter"+harrypotter.name+'.jpg';
              return harrypotter;
            }
          )

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
