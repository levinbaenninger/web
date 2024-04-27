const levin = ['Levin', 'Bänninger', 2023 - 2007, 'student', ['Michael', 'Peter', 'Steven']];

for (let i = 0; i < levin.length; i++) {
  if (typeof levin[i] === 'number') break;

  console.log(levin[i], typeof levin[i]);
}
