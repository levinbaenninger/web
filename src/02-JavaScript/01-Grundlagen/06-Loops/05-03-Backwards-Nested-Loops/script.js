// 5. Loops

// 5.3 Looping Backwards and Loops in Loops

const levin = [
  'Levin',
  'Bänninger',
  2023 - 2007,
  'student',
  ['Michael', 'Peter', 'Steven']
];

//* Looping Backwards
for (let i = levin.length - 1; i >= 0; i--) {
  console.log(i, levin[i]);
}

//* Loops in Loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
  }
}
