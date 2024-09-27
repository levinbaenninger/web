import { Invoice } from './Models/Invoice.js';
import { ListTemplate } from './Models/ListTemplate.js';
import { Payment } from './Models/Payment.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
let items = JSON.parse(localStorage.getItem('items') || '[]');
items.forEach((item) => {
  let doc;
  if (item.type === 'invoice') {
    doc = new Invoice(item.tofrom, item.details, item.amount);
  } else {
    doc = new Payment(item.tofrom, item.details, item.amount);
  }
  list.render(doc, item.type, 'end');
});
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let doc;
  let item;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    item = {
      tofrom: tofrom.value,
      details: details.value,
      amount: amount.valueAsNumber,
      type: 'invoice'
    };
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    item = {
      tofrom: tofrom.value,
      details: details.value,
      amount: amount.valueAsNumber,
      type: 'payment'
    };
  }
  items.push(item);
  localStorage.setItem('items', JSON.stringify(items));
  list.render(doc, type.value, 'end');
  form.reset();
});
