import {Component} from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
  n1: number = 0;
  n2: number = 0;
  result: number = 0;

  generateRandom(): number {
    return Math.floor(Math.random() * 1000);
  }

  generateN1() {
    this.n1 = this.generateRandom();
  }

  generateN2() {
    this.n2 = this.generateRandom();
  }

  sum() {
    this.result = this.n1 + this.n2;
  }

  substract() {
    this.result = this.n1 - this.n2;
  }

  multiply() {
    this.result = this.n1 * this.n2;
  }

  division() {
    if (this.n2 === 0)
      return;
    this.result = this.n1 / this.n2;
  }
}
