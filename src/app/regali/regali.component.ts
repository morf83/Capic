import { Component, OnInit } from '@angular/core';
import { regalo } from './regalo';
@Component({
  selector: 'app-regali',
  templateUrl: './regali.component.html',
  styleUrls: ['./regali.component.css']
})
export class RegaliComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //TO DO -
  regali:regalo =
    {
      id: 1,
      titolo:'vestiti uomo',
      immagini:[],
      descrizione:'vestiti uomo taglia l',
      autore: 'maria'
    }


}
