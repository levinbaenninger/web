# Elemente auswählen, erstellen und löschen

## Elemente auswählen

Es gibt insgesamt fünf gängige Möglichkeiten, um Elemente auszuwählen:

````Javascript
console.log(document.querySelector('header')); // <header>...</header>
console.log(document.querySelectorAll('section')); // NodeList(4)[...]

console.log(document.getElementById('section--1')); // <section id="section--1" class="section">...</section>
console.log(document.getElementsByTagName('button')); // HTMLCollection(9)[...] --> live collection
console.log(document.getElementsByClassName('btn')); // HTMLCollection(9)[...] --> live collection
````

Die Methode `querySelector` bzw. deren Parameter funktioniert wie bei CSS-Selektoren, d.h. eine Klasse muss mit `.` vorangegangen werden, während 
eine ID mit `#` vorangegangen werden muss.

> Die `HTMLCollection` ist eine sogenannte live collection, die **automatisch aktualisiert** wird, wenn z.B. ein Element darin gelöscht wird.

### Spezielle Elemente

Das `document` hat noch weitere spezielle Elemente, z.B. das gesamte HTML-Element auf die wir so zugreifen:

````Javascript
console.log(document.documentElement); // <html>...</html>
console.log(document.head); // <head>...</head>
console.log(document.body); // <body>...</body>
````

## Elemente erstellen und einfügen

Es gibt zwei gängige Wege, um Elemente zu erstellen und im DOM einzufügen.

### Programmatisch

Beim programmatischen Weg erstellen wir zuerst ein `HTMLElement` im JavaScript, geben ihm einige Klassen und fügen es dann in den DOM-Tree ein:

````Javascript
const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message);
header.append(message);
header.before(message);
header.after(message);

header.append(message.cloneNode(true));
````

Mit `createElement()` erstellen wir also unser Element, hier ein `HTMLDivElement`. Danach geben wir ihm die Klasse `cookie-message`. Daraufhin 
fügen wir entweder text ein oder gleich HTML mit `innerHTML`, um hier z.B. noch einen Button einzufügen. 

Nachdem fügen wir das Element in unser DOM ein, dafür stehen uns vier Methoden zur Verfügung: 

- `prepend()` &rarr; innerhalb des Elements als erstes Child
- `append()` &rarr; innerhalb des Elements als letztes Child
- `before()` &rarr; vor dem Element
- `after()` &rarr; nach dem Element

Unten sehen wir noch die Möglichkeit, wie wir das gleiche Element mehrmals auf unserer Seite anzeigen können &rarr; wir müssen es also Klonen.

### Als HTML-Template

Wir können unser neues Element auch direkt als HTML-Template einfügen mit der Methode `insertAdjacentHTML()`:

````Javascript
const cookieMessageHTML = `
  <div class="cookie-message">
    We use cookies for improved functionality and analytics.
    <button class="btn btn--close-cookie">Got it!</button>
  </div>
`;

header.insertAdjacentHTML('afterbegin', cookieMessageHTML);
````

Hier erstellen wir also einen Template-String mit HTML Struktur (hier könnten wir natürlich auch Variablen einfügen) und fügen ihn dann in den 
Header ein. Das erste Argument hat dabei folgende Möglichkeiten:

- `beforebegin` &rarr; vor dem Element
- `afterbegin` &rarr; innerhalb des Elements als erstes Child
- `beforeend` &rarr; innerhalb des Elements als letztes Child
- `afterend` &rarr; nach dem Element

## Elemente löschen

Um Elemente zu löschen, nutzen wir die `remove()`-Methode auf dem zu entfernenden Element:

````Javascript
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());
````