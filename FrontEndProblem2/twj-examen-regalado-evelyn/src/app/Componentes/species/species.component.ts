import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  @Input() species: string;
  constructor() { }

  ngOnInit() {
  }

}
