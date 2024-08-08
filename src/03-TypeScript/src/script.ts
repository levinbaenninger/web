import { Formatter } from './Interfaces/Formatter.js';
import { ListItem } from './Interfaces/ListItem.js';
import { Invoice } from './Models/Invoice.js';
import { ListTemplate } from './Models/ListTemplate.js';
import { Payment } from './Models/Payment.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

let items: ListItem[] = JSON.parse(localStorage.getItem('items') || '[]');

items.forEach((item) => {
  let doc: Formatter;

  if (item.type === 'invoice') {
    doc = new Invoice(item.tofrom, item.details, item.amount);
  } else {
    doc = new Payment(item.tofrom, item.details, item.amount);
  }

  list.render(doc, item.type, 'end');
});

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: Formatter;
  let item: ListItem;

  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    item = {
      tofrom: tofrom.value,
      details: details.value,
      amount: amount.valueAsNumber,
      type: 'invoice',
    };
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    item = {
      tofrom: tofrom.value,
      details: details.value,
      amount: amount.valueAsNumber,
      type: 'payment',
    };
  }

  items.push(item);
  localStorage.setItem('items', JSON.stringify(items));

  list.render(doc, type.value, 'end');
  form.reset();
});
