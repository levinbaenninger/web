# Kompilieren

## Manuelle Kompilierung

Um unseren TypeScript-Code in JavaScript-Code zu kompilieren, nutzen wir die Konsole:

````Console
tsc script.ts
````

Nun wird ein neues File namens <path>script.js</path> erstellt. Diese Datei können wir jetzt in unserem HTML verlinken.

### Beispiel

Dieser TypeScript-Code

````Typescript
const firstName: string = 'Levin';
console.log(`My name is ${firstName}`);
````

wird in folgenden JavaScript-Code kompiliert:

````JavaScript
var firstName = 'Levin';
console.log("My name is ".concat(firstName));
````

> Wie du siehst werden neuere Features, beispielsweise `const` oder String-Concatenation in ihre alte Form (ES4) gewandelt. Somit ist unser TypeScript-Compiler auch ähnlich wie Babel und fördert die Rückwärtskompatibilität mit älteren Browsern.

## Automatische Kompilierung

Nun müssen wir jedes Mal, wenn wir Änderungen vorgenommen haben, das TypeScript-File von Hand kompilieren, damit wir das nicht müssen, können wir den Schalter `-w` verwenden:

````Console
tsc script.ts -w
````

## TypeScript mit Vite

Heutzutage nutzt man oftmals Vite. Vite ist ein Frontend-Tool um Web-Applikationen zu bauen, es gibt einen integrierten Server, unterstützt TypeScript, SCSS und mehr ohne zusätzliche Installation etc. 

Um ein Vite-Projekt mit TypeScript zu erstellen, geben wir folgendes in die Konsole ein:

````Bash
npm create vite@latest
````

Jetzt können wir unserem Projekt einen Namen geben, ein Framework auswählen und uns zwischen JavaScript und TypeScript entscheiden.

Vite erstellt uns direkt eine saubere Ordnerstruktur und wir können sofort mit dem Entwickeln von TypeScript-Applikation beginnen. 

Um den Server zu starten, nutzen wir folgenden Command:

````Bash
npm run dev
````