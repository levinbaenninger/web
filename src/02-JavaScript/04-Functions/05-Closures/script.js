'use strict';

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

console.dir(booker);

// Closure: secureBooking() function has access to the passengerCount variable even after the secureBooking() function has already returned. This is because the secureBooking() function has already returned, but the booker() function still has access to the passengerCount variable. This is called a closure.

// Example 1
let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

g();
f(); // 46

const h = function () {
  const b = 777;

  f = function () {
    console.log(b * 2);
  };
};

// Re-assigning f function
h();
f(); // 1554

console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`We are boarding ${n} passengers in ${wait} seconds`);
};

boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
