import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Money } from '../money.model';
import { MoneyService } from '../money.service';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent {
  moneyForm = this.formBuilder.group({
    money: ''
  });
  constructor(
    private formBuilder: FormBuilder,
    private moneyService: MoneyService
  ) { }

  onSubmit(): void {
    this.moneyService.addToMoneys(new Money(this.moneyForm.value.money))
    this.moneyForm.setValue({ money: '' });
  }
}
