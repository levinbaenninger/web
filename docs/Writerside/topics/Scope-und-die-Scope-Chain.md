# Scope und die Scope Chain

<show-structure depth="2" />

Wir haben gelernt, dass jeder Execution Context eine variable Umgebung, eine Scope Chain und das Schlüsselwort `this` hat. Jetzt werden wir uns auf
den Bereich und die Scope Chain konzentrieren.

## Scope Konzepte

**Scoping:** Wie die Variablen in unserem Programm **organisiert** und auf sie **zugegriffen** wird. _"Wo befinden sich die Variablen? "_ oder _"Wo
können wir
auf eine bestimmte Variable zugreifen, und wo nicht?";_

**Lexical Scoping:** Das Scoping wird durch **Platzierung** von Funktionen und Blöcken im Code gesteuert;

**Scope:** Raum oder Umgebung, in der eine bestimmte Variable deklariert wird (Variablenumgebung im Falle von Funktionen). Es gibt den global
Scope, den function Scope und den block scope;

**Scope einer Variable**: Bereich in unserem Code, in dem auf eine bestimmte Variable **zugegriffen** werden kann.

## 3 Arten von Scopes

### Global Scope

```Javascript
const me = 'Jonas';
const job = 'teacher';
const year = 1989;
```

- **Außerhalb** einer Funktion oder eines Blocks
- Im globalen Bereich deklarierte Variablen sind **überall** zugänglich

### Function Scope

```Javascript
function calcAge(birthYear) {
	const now = 2037;
	const age = now - birthyear;
	return age;
}

console.log(now); // ReferenceError
```

- Variablen sind nur **in Funktionen** zugänglich, nicht ausserhalb
- Gilt für **alle Funktionstypen**
- Auch **local scope** genannt

### Block Scope

```Javascript
if (year >= 1981 && year <= 1996) {
	const millenial = true;
	const food = 'Avocado toast';
}

console.log(millenial); // ReferenceError
```

- Variablen sind nur `innerhalb des Blocks` zugänglich
- Gilt nur für `let` und `const` Variablen
- Funktionen sind ebenfalls **block scoped** (im Strict Mode)

## Die Scope Chain

![](scope_chain.png) { width="500" thumbnail="true" }
