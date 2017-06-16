import {Component, Input, OnInit} from '@angular/core';
import {PeliculaHarryPotter} from "../Interfaces/HarryPotter";
import {Http} from "@angular/http";

@Component({
  selector: 'app-harry-potter',
  templateUrl: './harry-potter.component.html',
  styleUrls: ['./harry-potter.component.css']
})
export class HarryPotterComponent implements OnInit {
    harrypotters: any[] = [];

  constructor(private _http: Http) { }

  ngOnInit() {
  }
  cargarHarryPotter(){
    this._http
      .get('http://hp-api.herokuapp.com/api/characters')
      // .map(response => response.json())
      .subscribe(
        (reponse) => {
          console.log('Response: ', reponse);
          console.log(reponse.json());
          let repuesta: any = reponse.json();
          console.log(repuesta.next);
          this.harrypotters = reponse.json().results;
          // this.harrypotters = this.harrypotters.map(

          //(harryP) => {
          //harryP.imagenURL = "/assets/imagenesStarWars" + harryP.name + '.jpg';
          //return harryP;
          ///)
          //Arreglo
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
