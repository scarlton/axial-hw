import { Component } from '@angular/core';
import { MoneyService } from '../money.service';

@Component({
  selector: 'app-number-output',
  templateUrl: './number-output.component.html',
  styleUrls: ['./number-output.component.css']
})
export class NumberOutputComponent {
  moneys = this.moneyService.getMoneys();

  constructor(
    private moneyService: MoneyService
  ) { }

}
