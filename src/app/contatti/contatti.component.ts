import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})


export class ContattiComponent implements OnInit {

  //istanzio var form con classe formgroup e lo uso per il form html

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = fb.group({
      'nome': ['',Validators.required],
      'cognome': ['',Validators.required],
      'email': ['',Validators.required],
      'messaggio': [''],

    })
   }

  ngOnInit(): void {
  }

  send(): void {
    if(!this.form.valid){
      alert('compila tutti i campi');
      return;
    }
    console.log(
      this.form.controls['nome'].value,
      this.form.controls['cognome'].value,
      this.form.controls['email'].value,
      this.form.controls['messaggio'].value
    )
    }
  }
