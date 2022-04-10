import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-segnalazioni',
  templateUrl: './segnalazioni.component.html',
  styleUrls: ['./segnalazioni.component.css']
})

export class SegnalazioniComponent implements OnInit {

  formSegnalazioni: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formSegnalazioni = fb.group({
      'email': ['',Validators.required],
      'nome': ['',Validators.required],
      'cognome': ['',Validators.required],
      'telefono': [''],
      'indirizzo': ['',Validators.required],
      'immobile': ['',Validators.required],
      'documenti': ['',Validators.required],
      'titolo': [''],
      'descrizione': [''],

    })
   }

  ngOnInit(): void {
  }

  send(): void {
    if(!this.formSegnalazioni.valid){
      alert('compila tutti i campi');
      return;
    }
    console.log(
      this.formSegnalazioni.controls['email'].value,
      this.formSegnalazioni.controls['nome'].value,
      this.formSegnalazioni.controls['cognome'].value,
      this.formSegnalazioni.controls['telefono'].value,
      this.formSegnalazioni.controls['indirizzo'].value,
      this.formSegnalazioni.controls['immobile'].value,
      this.formSegnalazioni.controls['documenti'].value,
      this.formSegnalazioni.controls['titolo'].value,
      this.formSegnalazioni.controls['descrizione'].value,

    )
    }
  }
