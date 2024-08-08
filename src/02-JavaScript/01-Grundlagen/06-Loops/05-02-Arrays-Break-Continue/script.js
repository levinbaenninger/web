// 5. Loops

//* 5.2 Looping Arrays, Breaking and Continuing
const levin = ['Levin', 'Bänninger', 2023 - 2007, 'student', ['Michael', 'Peter', 'Steven']];

// Reading from array
for (let i = 0; i < levin.length; i++) {
  console.log(levin[i], typeof levin[i]);
}

// Writing to array
const years = [1991, 2007, 2023];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}

console.log(ages);

//* Continue and Break

// Continue
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < levin.length; i++) {
  if (typeof levin[i] !== 'string') continue;

  console.log(levin[i], typeof levin[i]);
}

// Break
console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < levin.length; i++) {
  if (typeof levin[i] === 'number') break;

  console.log(levin[i], typeof levin[i]);
}
