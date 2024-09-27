# Operatoren

<show-structure depth="2" />

Mit Operatoren können wir mehrere Werte umwandeln oder miteinander kombinieren. Es gibt viele Kategorien von Operatoren:

- mathematische Operatoren
- Vergleichsoperatoren
- logische Operatoren
- Zuweisungsoperatoren
- ...

### Mathematische Operatoren

Wir können alle arithmetischen Operatoren verwenden wie:

- `+` → Addieren von Werten
- `-` → Subtrahieren von Werten
- `*` → Multiplikation von Werten
- `/` → Dividieren von Werten
- `%` → Berechnen des Restes einer Division
- `**` → Berechnen der Potenz

```JavaScript
let addition = 10 + 4;
let subtraction = 10 - 4;
let multiplication = 10 * 4;
let division = 10 / 4;
let modulo = 10 % 4;
let exponentiation = 10 ** 4;

console.log(
	addition,
	subtraction,
	multiplication,
	division,
	modulo,
	exponentiation,
); // 14 6 40 2.5 2 10000
```

### Verkettungsoperator

Der Verkettungsoperator (`+`) wird verwendet, um zwei Zeichenketten miteinander zu verbinden:

```JavaScript
let firstName = 'Levin';
let lastName = 'Bänninger';
const fullName = firstName + ' ' + lastName;

console.log(fullName); // Levin Bänninger
```

### Zuweisungsoperator

Die Zuweisungsoperatoren sind:

- `=` → einen Wert setzen
- `+=` → etwas zu einer Variablen hinzufügen
- `-=` → etwas von einer Variablen subtrahieren
- `*=` → etwas mit einer Variablen multiplizieren
- `/=` → etwas von einer Variablen dividieren
- `%=` → Rest von einer Variablen berechnen
- `**=` → Potenz von einer Variablen berechnen
- `++` → eins zu einer Variablen addieren
- `--` → eins von einer Variablen subtrahieren

Zuweisungsoperatoren werden verwendet, um die Aktualisierung für eine Variable zu verkürzen:

```JavaScript
let a = 10;

a += 10; // 20 (a = a + 10)
a -= 5; // 15 (a = a - 5)
a *= 4; // 60 (a = a * 4)
a /= 2; // 25 (a = a / 2)
a %= 6; // 1 (a = a % 6)
a **= 3; // 1 (a = a ** 3)
a++; // 2 (a = a + 1)
a--; // 1 (a = a - 1)
```

### Vergleichsoperatoren

Wir verwenden Vergleichsoperatoren, um boolesche Werte zu erzeugen:

- `==` → gleicher Wert, ignoriert Datentyp
- `===` → gleicher Wert und gleicher Typ
- `!=` → nicht gleicher Wert, ignoriert den Datentyp
- `!==` → ungleicher Wert und Typ
- `>` → größer als
- `<` → kleiner als
- `>=` → größer als oder gleich
- `<=` → kleiner als oder gleich

```JavaScript
10 == 5; // false
10 == '10'; // true
10 === '10'; // false
10 === 10; // true
10 != 5; // true
10 !== '10'; // true

10 > 5; // true
10 >= 5; // true
10 < 5; // false
10 <= 5; // false
```
