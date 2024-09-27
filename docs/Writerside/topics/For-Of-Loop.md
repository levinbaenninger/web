# For-Of Loop

Der `for .. of`-Loop ist eine neue Art, um durch einen Array zu loopen. Die Syntax sieht so aus:

```Javascript
for (const iterator of array) {
  // statements
}
```

Der Iterator ist dabei jedes einzelne Element, bzw. unser `i` in einer normalen Loop. Der Array ist ganz einfach der Array, durch welchen wir
loopen wollen. Beispiel:

<tabs>
    <tab title="JavaScript">
        <code-block lang="javascript" src="for-of.js" />
    </tab>
    <tab title="Output">
        <code-block lang="console">
            Foccacia
            Bruschetta
            Garlic Bread
            Caprese Salad
            Pizza
            Pasta
            Risotto
        </code-block>
    </tab>
</tabs>

> Mit dem `for .. of`-Loop können wir immer noch `break` und `continue` benutzen

## Index bekommen

Was ist, wenn wir auch den Index brauchen? Es gibt eine Lösungsmöglichkeit: die `entries()`-Methode. Diese gibt uns für jedes Element einen Array
zurück, der folgende Form hat:

```Console
[Index, Item]
```

Bei unserem Beispiel würden unsere Einträge, so aussehen:

```Console
[0, "Foccacia"]
[1, "Bruschetta"]
[2, "Garlic Bread"]
...
```

### Beispiel

```Javascript
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
```
