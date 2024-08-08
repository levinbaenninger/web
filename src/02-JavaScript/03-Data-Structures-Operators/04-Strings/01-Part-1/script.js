//* Strings - Part 1

//* Characters & Length
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline[0]); // T
console.log(plane[1]); // 3
console.log(plane[5]); // undefined

console.log(airline.length); // 16

//* Methods
// .indexOf()
console.log(airline.indexOf('r')); // 6
console.log(airline.indexOf('z')); // -1
console.log(airline.indexOf('Portugal')); // 8
console.log(airline.lastIndexOf('r')); // 10

// .slice()
console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

//* Example
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B'); // You got the middle seat 😬
checkMiddleSeat('23C'); // You got lucky 😎
checkMiddleSeat('3E'); // You got the middle seat 😬

