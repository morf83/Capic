import { Injectable } from '@angular/core';
import { REGALI } from './regali/regali';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getRegali() {
    return REGALI;
  }
  constructor() { }
}
