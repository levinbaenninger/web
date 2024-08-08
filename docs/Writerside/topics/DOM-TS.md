# DOM

Im Grunde arbeitet man mit dem DOM in TypeScript ganz ähnlich wie in JavaScript. Es gibt jedoch einige wichtige Unterschiede.

## Null-Werte

TypeScript weiss nicht, ob ein Element in unserem HTML existiert, deshalb gibt TypeScript uns eine Warnung zurück, falls wir versuchen ein Property eines Objektes zu lesen.

````Typescript
const anchor = document.querySelector('a');
console.log(anchor.href) // Object is possibly 'null'
````

Das können wir mit folgenden zwei Wegen umgehen:

````Typescript
if (anchor) {
    console.log(anchor.href);
}

// OR

const anchor = document.querySelector('a')!;
````

Letztere Variante wird nur dann verwendet, wenn wir als Entwickler hundertprozentig sicher sind, dass dieses Objekt auf unserer Seite existiert.

## Typen

Ein weiterer Unterschied zu JavaScript ist, dass TypeScript für jedes Element einen eigenen Typen hat, das heisst, dass Visual Studio Code direkt die Properties und Methoden unseres Objektes lesen kann und diese uns per IntelliSense vorschlagen kann.

**Beispiele**: 

| Element  | Typ                  |
|----------|----------------------|
| `<a>`    | HTMLAnchorElement    |
| `<form>` | HTMLFormElement      |
| `<p>`    | HTMLParagraphElement |
| ...      | ...                  |

### Type Casting

Wir wählen jedoch nicht immer Elemente mit dem Element-Selektor aus, sondern nutzen eher Klassen oder IDs. Wenn wir das machen, weiss TypeScript nicht, was für ein Element das sein soll. 

Um dieses Problem zu lösen, gibt es Type Casting. Das sieht dann wie folgt aus:

````Typescript
const form = document.querySelector('.new-item-form') as HTMLFormElement;
````
