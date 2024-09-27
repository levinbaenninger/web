import { Formatter } from '../Interfaces/Formatter.js';

export class Invoice implements Formatter {
  constructor(
    private client: string,
    private details: string,
    private amount: number
  ) {}

  format(): string {
    return `${this.client} owes CHF ${this.amount} for ${this.details}`;
  }
}
