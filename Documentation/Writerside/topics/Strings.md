# Strings

<show-structure depth="2" />

Zeichenketten sind ein sehr wichtiger Teil der Programmierung. Hier werden wir etwas über **template literals** lernen.

Mit Template-Literals können wir einfach Variablen zu Strings hinzufügen, anstatt mühsam Strings mit Variablen zu verketten:

```JavaScript
const firstName = 'Levin';
const job = 'programmer';
const birthYear = 2007;

// Concatenation
const levin =
	"I'm " + firstName + ', a ' + (2023 - birthYear) + ' year old ' + job + '!'; // I'm Levin, a 16 year old programmer!

// Template literals
const levinNew = `I'm ${firstName}, a ${2023 - birthYear} year old ${job}!`; // I'm Levin, a 16 year old programmer!
```

Wie Sie sehen können, verwenden wir `${}`, um auf Variablen in unserem String zu verweisen. Das sieht viel sauberer aus und ist kompakter.

Es ist auch viel einfacher, mehrzeilige Strings mit einem Template-Literal zu schreiben:

```JavaScript
console.log('String with multiple lines: \n\
like this,\n\
and this.'); // String with multiple lines: 
                like this, 
                and this.

console.log(`String with multiple lines: 
like this,
and this.`); // String with multiple lines: 
                like this, 
                and this.
```