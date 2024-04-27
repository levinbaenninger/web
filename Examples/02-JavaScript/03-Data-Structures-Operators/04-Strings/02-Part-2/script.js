//* Strings - Part 2

const airline = 'TAP Air Portugal';

//* .toLowerCase() and .toUpperCase()
console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1); // Jonas

function correctName(name) {
  const lower = name.toLowerCase();
  const correct = lower[0].toUpperCase() + lower.slice(1);
  console.log(correct);
}

correctName('jOnAS'); // Jonas

//* .trim()
function normalizeMail(email) {
  const normalized = email.toLowerCase().trim();
  console.log(normalized);
}

normalizeMail('  Jonas@HElLo.com \n'); // jonas@hello.com

//* .replace()

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');

console.log(priceUS); // 288.97$

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
const announcementCorrect = announcement.replace(/door/g, 'gate');

console.log(announcementCorrect); // All passengers come to boarding gate 23. Boarding gate 23!

//* .includes()
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false

console.log(plane.startsWith('Air')); // true
console.log(plane.endsWith('A320')); // false