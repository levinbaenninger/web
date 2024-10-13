'use strict';

const btn = document.querySelector('.btn-country');

// Set styles
btn.style.backgroundColor = '#37383d';
btn.style.width = '2rem';

// Get styles
console.log(getComputedStyle(btn).color); // rgb(255, 255, 255)
console.log(getComputedStyle(btn).height); // 52px

// Change CSS variables
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Get attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Bankist logo
console.log(logo.src); // http://127.0.0.1/img/logo.png
console.log(logo.className); // nav__logo

console.log(logo.getAttribute('designer')); // Jonas

// Set attributes
logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('company', 'Bankist');

// Add classes
logo.classList.add('c');

// Remove classes
logo.classList.remove('c');

// Toggle classes
logo.classList.toggle('c');

// Check if an element contains a class
console.log(logo.classList.contains('c')); // false
console.log(logo.classList.contains('nav__logo')); // true
