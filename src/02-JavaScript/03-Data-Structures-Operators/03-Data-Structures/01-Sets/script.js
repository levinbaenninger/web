//* Looping Objects: Object Keys, Values, and Entries

//* Creating Sets
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet); // Set(3) {"Pasta", "Pizza", "Risotto"}

const nameSet = new Set('Levin');
console.log(nameSet); // Set(5) {"L", "e", "v", "i", "n"}

//* Getting the size of a Set
console.log(ordersSet.size); // 3

//* Checking if an element is in a Set
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

//* Adding elements to a Set
ordersSet.add('Garlic Bread');
console.log(ordersSet); // Set(4) {"Pasta", "Pizza", "Risotto", "Garlic Bread"}

//* Deleting elements from a Set
ordersSet.delete('Risotto');
console.log(ordersSet); // Set(3) {"Pasta", "Pizza", "Garlic Bread"}

//* Retrieving elements from a Set
// There is no way to retrieve elements from a Set. There is no need to do so because we can use the has() method to check if an element is in a Set.

//* Deleting all elements from a Set
// ordersSet.clear();

//* Looping over Sets
for (const order of ordersSet) console.log(order); // Pasta Pizza Garlic Bread


//* Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const roles = [...new Set(staff)];

console.log(roles); // (3) ["Waiter", "Chef", "Manager"]
console.log(new Set(staff).size); // 3