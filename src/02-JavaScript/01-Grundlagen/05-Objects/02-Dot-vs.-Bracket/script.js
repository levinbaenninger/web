// 4. Objects
// 4.2 Dot vs. Bracket

const levin = {
  firstName: 'Levin',
  lastName: 'Bänninger',
  age: 16,
  job: 'Student',
  friends: ['Jonas', 'Marie', 'Peter']
};

// Dot notation
console.log(levin.lastName); // Bänninger
console.log(levin.age); // 16
console.log(levin.friends); // (3) ["Jonas", "Marie", "Peter"]

// Bracket notation
console.log(levin.lastName); // Bänninger
console.log(levin.age); // 16
console.log(levin.friends); // (3) ["Jonas", "Marie", "Peter"]

//* Difference
const nameKey = 'Name';
console.log(levin[`first${nameKey}`]); // Levin
console.log(levin[`last${nameKey}`]); // Bänninger

// Example
const interestedIn = prompt(
  'What do you want to know about Levin? Choose between firstName, lastName, age, job and friends'
);

if (levin[interestedIn]) {
  console.log(levin[interestedIn]);
} else {
  console.log(
    'Wrong request! Choose between firstName, lastName, age, job and friends'
  );
}

console.log(
  `${levin.firstName} has ${levin.friends.length} friends, and his best friend is called ${levin.friends[2]}`
); // Levin has 3 friends, and his best friend is called Peter

// Add new property
levin.location = 'Switzerland';
levin.twitter = '@LevinBaenninger';
console.log(levin); // {firstName: "Levin", lastName: "Bänninger", age: 16, job: "Student", friends: Array(3), …}

// Modify property
levin.job = 'programmer';
levin.location = 'Zurich';
console.log(levin); // {firstName: "Levin", lastName: "Bänninger", age: 16, job: "programmer", friends: Array(3), …}

// Delete property
delete levin.location;
delete levin.twitter;
console.log(levin); // {firstName: "Levin", lastName: "Bänninger", age: 16, job: "programmer", friends: Array(3), …}
