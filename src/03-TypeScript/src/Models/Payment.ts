import { Formatter } from '../Interfaces/Formatter.js';

export class Payment implements Formatter {
  constructor(
    private recipient: string,
    private details: string,
    private amount: number
  ) {}

  format(): string {
    return `${this.recipient} is owed CHF ${this.amount} for ${this.details}`;
  }
}
