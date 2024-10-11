'use strict';

// Create a date
const now = new Date();
console.log(new Intl.DateTimeFormat('en-US').format(now)); // 8/19/2021
console.log(new Intl.DateTimeFormat('en-GB').format(now)); // 19/08/2021
console.log(new Intl.DateTimeFormat('de-DE').format(now)); // 19.08.2021
console.log(new Intl.DateTimeFormat('ar-SY').format(now)); // ١١‏/١٠‏/٢٠٢٤

const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};

console.log(new Intl.DateTimeFormat('en-US', options).format(now)); // 8/19/2021, 6:05 PM
console.log(new Intl.DateTimeFormat('en-GB', options).format(now)); // 19/08/2021, 18:05
console.log(new Intl.DateTimeFormat('de-DE', options).format(now)); // 19.08.2021, 18:05
console.log(new Intl.DateTimeFormat('ar-SY', options).format(now)); // ١٩‏/٨‏/٢٠٢١، ٦:٠٥ م

console.log(navigator.language); // de-CH, en-US, en-GB, ar-SY, ...
