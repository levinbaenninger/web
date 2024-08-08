# let, const und var

<show-structure depth="2" />

### `let`

Wir benutzen `let`, um eine Variable zu deklarieren, die später geändert werden kann:

```JavaScript
let age = 30;
age = 31;
```

Dieser Vorgang wird **Neuzuweisung** eines Wertes an eine Variable oder **Mutation** der Variable `age` genannt.

### `const`

Wir benutzen `const`, um eine Variable zu deklarieren, die später nicht mehr geändert werden kann:

```JavaScript
const birthYear = 1991;
birthYear = 1990; //! TypeError: Assignment to constant variable.
```

Da wir die Variable nicht mutieren können, müssen wir ihr direkt einen Wert zuweisen, zum Beispiel

```Javascript
const birthYear; //! SyntaxError: Missing initializer in const declaration
```

ist illegal, weil es nie einen Wert erhalten wird.

### `var`

`var` ist die alte Art, eine Variable zu deklarieren, auf den ersten Blick sieht es so aus, als wäre es das gleiche wie `let`:

```JavaScript
var job = 'Programmierer';
job = 'Lehrer';
```

Es gibt jedoch einige wesentliche Unterschiede zwischen `let` und `var`, auf die wir in späteren Abschnitten eingehen werden. Aber für jetzt sollten
wir **nie** `var` benutzen.