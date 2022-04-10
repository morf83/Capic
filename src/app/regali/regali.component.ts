import { Component, OnInit } from '@angular/core';
import { regalo } from './regalo';
import { REGALI } from './regali';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regali',
  templateUrl: './regali.component.html',
  styleUrls: ['./regali.component.css']
})
export class RegaliComponent implements OnInit {

  formRegali: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formRegali = fb.group({
      'email': ['',Validators.required],
      'nome': ['',Validators.required],
      'telefono': ['',Validators.required],
      'titolo': [''],
      'documenti': [''],
      'descrizione': [''],

    })
  }

  ngOnInit(): void {
  }

  regali= REGALI;

  send(): void {
    if(!this.formRegali.valid){
      alert('compila tutti i campi');
      return;
    }
    console.log(
      this.formRegali.controls['email'].value,
      this.formRegali.controls['nome'].value,
      this.formRegali.controls['telefono'].value,
      this.formRegali.controls['titolo'].value,
      this.formRegali.controls['documenti'].value,
      this.formRegali.controls['descrizione'].value


      )
    }
  }

