'use strict';

// Create a date
const now = new Date();
console.log(now);

const future = new Date(2037, 10, 19, 15, 23);

console.log(new Date('Aug 19 2021 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date('2021-08-19T18:05:41'));

// Methods
// Getters
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4 (Thursday)
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0
console.log(future.getTime()); // 2142244980000

// Setters
future.setFullYear(2040);
future.setMonth(6);
future.setDate(12);
future.setHours(13);
future.setMinutes(15);
future.setSeconds(20);

console.log(future); // Sun Jul 12 2040 13:15:20 GMT+0200 (Central European Summer Time)

// toString methods
console.log(future.toISOString()); // 2040-07-12T11:15:20.000Z --> UTC time
console.log(future.toString()); // Sun Jul 12 2040 13:15:20 GMT+0200 (Central European Summer Time)
console.log(future.toDateString()); // Sun Jul 12 2040
console.log(future.toTimeString()); // 13:15:20 GMT+0200 (Central European Summer Time)
console.log(future.toLocaleString()); // 7/12/2040, 1:15:20 PM
console.log(future.toLocaleDateString()); // 7/12/2040
console.log(future.toLocaleTimeString()); // 1:15:20 PM
console.log(future.toUTCString()); // Sun, 12 Jul 2040 11:15:20 GMT
