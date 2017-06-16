import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {
  @Input() gender: string;
  constructor() { }

  ngOnInit() {
  }

}
