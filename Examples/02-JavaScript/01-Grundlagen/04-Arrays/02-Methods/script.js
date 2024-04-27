// 3 Arrays

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
friends.push('Jay');
console.log(friends); // ["Michael", "Steven", "Peter", "Jay"]

friends.unshift('John');
console.log(friends); // ["John", "Michael", "Steven", "Peter", "Jay"]

// Remove elements
friends.pop();
console.log(friends); // ["John", "Michael", "Steven", "Peter"]

friends.shift();
console.log(friends); // ["Michael", "Steven", "Peter"]

// Get index of element
console.log(friends.indexOf('Steven')); // 1
console.log(friends.indexOf('Bob')); // -1

// Check if element is in array
console.log(friends.includes('Peter')); // true
console.log(friends.includes('Bob')); // false
