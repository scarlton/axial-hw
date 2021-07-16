import { Injectable } from '@angular/core';
import { Money } from './money.model';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {
  moneys: Money[] = [];

  constructor() { }

  addToMoneys(money: Money) {
    this.moneys.push(money);
  }

  getMoneys() {
    return this.moneys;
  }
}
