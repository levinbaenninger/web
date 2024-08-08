// 3. Arrays

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends); // ["Michael", "Steven", "Peter"]

const years = new Array(1991, 1984, 2008, 2020);
console.log(years); // [1991, 1984, 2008, 2020]

console.log(friends[0]); // Michael
console.log(friends[2]); // Peter
console.log(friends[3]); // undefined

console.log(friends.length); // 3
console.log(friends[friends.length - 1]); // Peter

friends[2] = 'Jay';
console.log(friends); // ["Michael", "Steven", "Jay"]

//! friends = ['Bob', 'Alice']; // TypeError: Assignment to constant variable.

const levin = ['Levin', 'Bänninger', 2023 - 2007, 'computer scientist', friends];

console.log(levin); // ["Levin", "Bänninger", 16, "computer scientist", Array(3)]
