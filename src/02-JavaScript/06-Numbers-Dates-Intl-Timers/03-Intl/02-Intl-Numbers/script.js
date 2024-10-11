'use strict';

const num = 3884764.23;

console.log(new Intl.NumberFormat('en-US').format(num)); // 3,884,764.23
console.log(new Intl.NumberFormat('de-DE').format(num)); // 3.884.764,23
console.log(new Intl.NumberFormat('de-CH').format(num)); // 3'884'764.23
console.log(new Intl.NumberFormat('ar-SY').format(num)); // ٣٬٨٨٤٬٧٦٤٫٢٣

const velocity = 120;

const options = {
  style: 'unit',
  unit: 'mile-per-hour'
};

console.log(new Intl.NumberFormat('en-US', options).format(velocity)); // 120 mph
console.log(new Intl.NumberFormat('de-DE', options).format(velocity)); // 120 mi/h
console.log(new Intl.NumberFormat('ar-SY', options).format(velocity)); // ١٢٠ ميل/س

const currency = 12321.23;

options = {
  style: 'currency',
  currency: 'USD'
};

console.log(new Intl.NumberFormat('en-US', options).format(currency)); // $12,321.23
console.log(new Intl.NumberFormat('de-DE', options).format(currency)); // 12.321,23 $
console.log(new Intl.NumberFormat('ar-SY', options).format(currency)); // ١٢٬٣٢١٫٢٣ US$
