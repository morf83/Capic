import { Component, OnInit } from '@angular/core';
import { regalo } from './regalo';
import { REGALI } from './regali';
@Component({
  selector: 'app-regali',
  templateUrl: './regali.component.html',
  styleUrls: ['./regali.component.css']
})
export class RegaliComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  regali= REGALI;

}
