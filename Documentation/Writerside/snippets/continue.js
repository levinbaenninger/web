const levin = ['Levin', 'Bänninger', 2023 - 2007, 'student', ['Michael', 'Peter', 'Steven']];

// Only print strings
for (let i = 0; i < levin.length; i++) {
  if (typeof levin[i] !== 'string') continue;

  console.log(levin[i], typeof levin[i]);
}
