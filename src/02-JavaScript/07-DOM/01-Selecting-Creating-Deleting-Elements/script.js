'use strict';

// Selecting elements
console.log(document.documentElement); // <html>...</html>
console.log(document.head); // <head>...</head>
console.log(document.body); // <body>...</body>

console.log(document.querySelector('header')); // <header>...</header>
console.log(document.querySelectorAll('section')); // NodeList(4) [...]

console.log(document.getElementById('section--1')); // <section id="section--1" class="section">...</section>
console.log(document.getElementsByTagName('button')); // HTMLCollection(9) [...] --> live collection
console.log(document.getElementsByClassName('btn')); // HTMLCollection(9) [...] --> live collection

// Creating and inserting elements
// Programatically create an element
const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
// header.before(message);
// header.after(message);
header.append(message);
// header.append(message.cloneNode(true));

// Use HTML template
const cookieMessageHTML = `
  <div class="cookie-message">
    We use cookies for improved functionality and analytics.
    <button class="btn btn--close-cookie">Got it!</button>
  </div>
`;

header.insertAdjacentHTML('afterbegin', cookieMessageHTML);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());
