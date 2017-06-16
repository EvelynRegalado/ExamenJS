import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-patronus',
  templateUrl: './patronus.component.html',
  styleUrls: ['./patronus.component.css']
})
export class PatronusComponent implements OnInit {
  @Input() patronus: string;
  constructor() { }

  ngOnInit() {
  }

}
