# Funktionen

Genau wie bei Variablen, Arrays, usw. können Variablen implizit oder explizit eingeführt werden:

```Typescript
// Implicit declaration
const greet = () => {
  console.log('Hello, World!');
};

// Explicit declaration
const greet: Function;

greet = () => {
  console.log('Hello, World!');
};
```

## Rückgabetyp und Parameter

Bei Funktionen können wir den Typen der Rückgabe und die Typen der Parameter bestimmen:

```Typescript
const add = (a: number, b: number): number => {
  return a + b;
}
```

Würden wir versuchen einen String oder einen Boolean für die Parameter einzusetzen, käme es zu einem Fehler.

### Optionale Parameter und Standardwerte

Um einen Parameter optional zu machen, können wir folgendes machen:

```Typescript
const add = (a: number, b: number, c?: number | string): number => {
  console.log(c)
  return a + b;
}
```

Um einen Standardwert zu setzen, falls der User nichts mitgibt, machen wir Folgendes:

```Typescript
c: number | string = 'No value'
```

## Funktionssignaturen

Wie wir bereits gesehen haben, können wir einer Variable den Typen `Function` geben. Wir können das aber noch ein wenig genauer definieren, das heisst, wir können bei der Deklaration sagen, welche Parameter die Funktion nimmt und welchen Rückgabetypen die Funktion hat:

```Typescript
const subtract: (a: number, b: number) => number;
```

Nun können wir die Funktion wie folgt initialisieren:

```Typescript
subtract = (minuend: number, subtrahend: number): number => {
    return a - c;
}
```

**Weiteres Beispiel:**

```Typescript
const logPerson: (obj: { name: string, age: number }): void;

logPerson = (pers: { name: string, age: number }): void => {
    console.log(`${pers.name} is ${pers.age} years old`);
}
```
