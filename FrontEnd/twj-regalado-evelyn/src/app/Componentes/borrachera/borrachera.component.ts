import { Component, OnInit } from '@angular/core';
import {BorracheraClass} from "../../Clases/BorracheraClass";
import {Http} from "@angular/http";

@Component({
  selector: 'app-borracheras',
  templateUrl: './borrachera.component.html',
  styleUrls: ['./borrachera.component.css']
})
export class BorracherasComponent implements OnInit {

  motivo:string="";
  latitudDondeEmpezo:number;
  longitudDondeEmpezo:number;

  borracheras: BorracheraClass[] = [];
  nuevoBorrachera: BorracheraClass = new BorracheraClass();

  constructor(public _http:Http) { }

  ngOnInit() {
     this._http.get('http://localhost:1337/Borrachera')
      .subscribe(
        respuesta => {
          let respJson:BorracheraClass[]= respuesta.json();
          console.log("respuesta json:", respJson);
          this.borracheras=respJson;
          console.log("Borracheras: ", this.borracheras);
        },
        error => {
          console.log("Error", error)
        }
      )
  }
  crearBorrachera() {
    console.log("Guardo los datos");
    /*let usuario= {
     nombre: this.nuevoUsuario.nombre
     }*/
    this._http.post('http://localhost:1337/Borrachera', this.nuevoBorrachera)
      .subscribe(
        respuesta => {
          let respuestaJson = respuesta.json();
          console.log('respuestaJson: ', respuestaJson);
          this.borracheras.push(respuestaJson);
        },
        error => {
          console.log("Error", error)
        }
      )
  }


}
