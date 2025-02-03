---
icon: rocket-launch
---

# IIFE (Immediately Invoked Function Expressions)

IIFE steht für Immediately Invoked Function Expressions und ist dafür zuständig, dass eine Funktion nur einmal aufgerufen werden kann und danach nie wieder.

Das sieht wie folgt aus:

```javascript
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();
```

Das ist vor allem für Kapselung von Daten hilfreich, da der Global Scope nicht auf Variablen innerhalb eines Function-Scopes zugreifen kann.
