import { Component, OnInit } from '@angular/core';
import { ANNUNCI } from './annunci';
import { Annuncio } from './annuncio';

@Component({
  selector: 'app-lavoro',
  templateUrl: './lavoro.component.html',
  styleUrls: ['./lavoro.component.css']
})
export class LavoroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  annuncio= ANNUNCI;
}
