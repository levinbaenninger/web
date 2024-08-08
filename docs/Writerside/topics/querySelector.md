# querySelector()

<show-structure depth="2" />

## Auswählen

### Erstes Element auswählen

Es gibt mehrere Möglichkeiten, Elemente auszuwählen. Die gängigste Methode ist die `queryselector()`-Methode. Sie gibt das erste Element innerhalb des
Dokuments zurück, das mit dem angegebenen Selektor übereinstimmt. Wenn keine Übereinstimmung gefunden wird, wird `null` zurückgegeben.

````Javascript
document.querySelector(selectors)
````

Ein Selektor kann eine Klasse, eine ID, ein Element, ... sein ([Selektoren](Selektoren.md))

### Alle Elemente auswählen

Um alle Elemente auszuwählen, können wir `querySelectorAll()` verwenden. Es funktioniert genauso wie `querySelector()`, gibt aber alle Elemente
zurück, die dem Selektor entsprechen.

```Javascript
document.querySelectorAll(selectors)
```

### Beispiel

````Javascript
document.querySelector('.message');
document.querySelectorAll('.score');
````

Jetzt haben wir das erste Element ausgewählt, das die Klasse `message` hat und alle Elemente, die die Klasse `score` haben.

Normalerweise speichert man die Selektion in einer Variables, sodass man dasselbe nicht etliche Male schreiben muss:

````Javascript
const message = document.querySelector('.message');
````

## Manipulieren

### Textelemente

Um den Text von Textelementen zu modifizieren, benutzen wir das `textContent`-Attribut:

````Javascript
document.querySelector('.message').textContent = '🎉 Correct Number!';
````

### Inputfeld

Um den Wert von Inputfeldern zu manipulieren, benutzen wir das `value`-Attribut:

````Javascript
document.querySelector('.guess').value = 23;
````

## Attribute von Elementen erfahren

Jedes Element hat dutzende von Attributen, welche wir über das DOM bearbeiten können. Wir können `console.dir()` benutzen, um die Attribute des
Elements zu erfahren:

````Javascript
console.dir(document.querySelector('.message'));
````

Diese Methode gibt uns dann das Objekt des Elements zurück mit allen Attributen.