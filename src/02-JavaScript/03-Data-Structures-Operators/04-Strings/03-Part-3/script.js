//* Strings - Part 3

//* split() and join()
console.log('A+very+nice+string'.split('+')); // ["A", "very", "nice", "string"]
console.log('Jonas Schmedtmann'.split(' ')); // ["Jonas", "Schmedtmann"]

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName].join(' ');
console.log(newName); // Mr. Jonas Schmedtmann

//* padStart() and padEnd()

const message = 'Go to gate 23!';
console.log(message.padStart(22, '+').padEnd(30, '+')); // +++++++Go to gate 23!++++++++
