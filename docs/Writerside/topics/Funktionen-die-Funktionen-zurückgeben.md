# Funktionen, die Funktionen zurückgeben

Am besten fangen wir mit einem Beispiel an:

```Javascript
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  }
}
```

Wenn wir nun diese Funktion aufrufen, erhalten wir eine Funktion zurück:

<tabs>
    <tab title="JavaScript">
        <code-block lang="javascript">
            console.log(greet('Hey');
        </code-block>
    </tab>
    <tab title="Output">
        <code-block lang="console">
            (name) {
                console.log(`${greeting} ${name}`);
            }
        </code-block>        
    </tab>
</tabs>

Um nun die erhaltene Funktion aufzurufen, speichern wir den Wert vom Funktionsaufruf `greet` in einer Variabel:

```Javascript
const greeterHey = greet('Hey');
```

Wenn wir nun `greeterHey(...)` aufrufen erhalten wir einen Wert zurück:

```Javascript
greeterHey('Jonas'); // 'Hey Jonas'
```

Das funktioniert aufgrund einer sogenannten **Closure**, die wir uns später ansehen werden. Wir müssen die Funktion jedoch nicht zwingend in einer
Variable speichern, sondern können die Funktion sofort aufrufen:

```Javascript
greet('Hello')('Jonas');
```

Dieses Konzept ist sehr wichtig für ein Paradigma namens **Funktionale Programmierung**.
