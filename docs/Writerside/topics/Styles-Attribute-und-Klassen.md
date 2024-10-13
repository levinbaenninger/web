# Styles, Attribute und Klassen

## Styles

### Styles setzen

Um Styles auf Elementen direkt zu setzen, können wir das `style`-Attribut nutzen, mit welchem wir dann Zugriff auf jedes CSS-Property haben, 
jedoch in CamelCase-Schreibweise.

```Javascript
btn.style.backgroundColor = '#37383d';
btn.style.width = '2rem';
```

> **Wichtig:** Diese Styles werden als Inline-Styles gesetzt und überschreiben somit alle Regeln ausser die, die mit `!important` markiert sind. 

{ style="warning" }

### Styles auslesen

Um nun auf alle Style-Properties eines Elements zuzugreifen, müssen wir die Methode `getComputedStyle()` nutzen:

````Javascript
console.log(getComputedStyle(btn).color); // rgb(255, 255, 255)
console.log(getComputedStyle(btn).height); // 52px
````

### CSS-Variablen ändern

Wir können auch die Werte der CSS-Variablen verändern, indem wir das gesamte Dokument auswählen:

````Javascript
document.documentElement.style.setProperty('--color-primary', 'orangered');
````

## Attribute

### Attribute lesen

Für Standard-Attribute können wir einfach unser Element nutzen und dann darauf zugreifen:

````Javascript
console.log(logo.alt); // Bankist logo
console.log(logo.src); // http://127.0.0.1/img/logo.png
console.log(logo.className); // nav__logo
````

Für Nicht-Standard-Attribute müssen wir die Methode `getAttribute()` nutzen:

````Javascript
console.log(logo.getAttribute('designer')); // Jonas
````

### Attribute setzen

Das Attribut setzen funktioniert ebenfalls über die Properties des HTML-Elements:

````Javascript
logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('company', 'Bankist');
````

## Klassen

Bei den Klassen haben wir essenziell vier Methoden, um einem Element Klassen hinzuzufügen, zu entfernen, umzuschalten und zu überprüfen, ob sie 
bereits angewandt wird:

````Javascript
logo.classList.add('c');

logo.classList.remove('c');

logo.classList.toggle('c');

console.log(logo.classList.contains('c')); // false
console.log(logo.classList.contains('nav__logo')); // true
````