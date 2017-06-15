import { Component, OnInit } from '@angular/core';
import {BorracheraClass} from "../../Clases/BorracheraClass";

@Component({
  selector: 'app-borracheras',
  templateUrl: './borracheras.component.html',
  styleUrls: ['./borracheras.component.css']
})
export class BorracherasComponent implements OnInit {

  motivo:string="";
  latitudDondeEmpezo:number;
  longitudDondeEmpezo:number;

  borracheras: BorracheraClass[] = [];
  nuevoBorrachera: BorracheraClass = new BorracheraClass();

  constructor() { }

  ngOnInit() {
  }

}
