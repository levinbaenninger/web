# Strikter Modus

<show-structure depth="2" />

Der Strict Mode ist ein spezieller Modus, den wir in JavaScript aktivieren können und der es uns leichter macht, sicheren JavaScript-Code zu
schreiben. Er macht es uns Entwicklern leichter, versehentliche Fehler zu vermeiden, indem er

- **es uns verbietet**, bestimmte Dinge zu tun
- **sichtbare Fehler** erzeugt.

Wir aktivieren diesen Modus, indem wir `use strict` an den Anfang unserer JS-Datei schreiben. Es ist wichtig, dass dies die allererste Anweisung in
unserem Dokument ist.

## Beispiel

```Javascript
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; //! Uncaught ReferenceError: hasDriverLicense is not defined
if (hasDriversLicense) console.log('I can drive!');

const interface = 'Audio'; //! Uncaught SyntaxError: Unexpected strict mode reserved word
```
