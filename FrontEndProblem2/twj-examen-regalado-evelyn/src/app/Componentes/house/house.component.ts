import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  @Input() house: string;
  constructor() { }

  ngOnInit() {
  }

}
