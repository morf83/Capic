import { Component, OnInit } from '@angular/core';
import { ANNUNCI } from './annunci';
import { Annuncio } from './annuncio';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-lavoro',
  templateUrl: './lavoro.component.html',
  styleUrls: ['./lavoro.component.css']
})
export class LavoroComponent implements OnInit {


  form2: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form2 = fb.group({
      'email': ['',Validators.required],
      'nome': ['',Validators.required],
      'telefono': ['',Validators.required],
      'titolo': ['',Validators.required],
      'descrizione': [''],

    })
  }

  ngOnInit(): void {
  }
  annuncio= ANNUNCI;

  send(): void {
    if(!this.form2.valid){
      alert('compila tutti i campi');
      return;
    }
    console.log(
      this.form2.controls['email'].value,
      this.form2.controls['nome'].value,
      this.form2.controls['telefono'].value,
      this.form2.controls['titolo'].value,
      this.form2.controls['descrizione'].value
    )
    }
  }

