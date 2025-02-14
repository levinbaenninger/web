---
icon: arrow-pointer
---

# Elemente auswählen, erstellen und manipulieren

## Elemente auswählen

Es gibt insgesamt fünf gängige Möglichkeiten, um Elemente auszuwählen:

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-1">console.log(document.querySelector('header'));</a>
<a data-footnote-ref href="#user-content-fn-2">console.log(document.querySelectorAll('section'));</a>

<a data-footnote-ref href="#user-content-fn-3">console.log(document.getElementById('section-1'));</a>
<a data-footnote-ref href="#user-content-fn-4">console.log(document.getElementsByTagName('button'));</a>
<a data-footnote-ref href="#user-content-fn-5">console.log(document.getElementsByClassName('btn'));</a>
</code></pre>

Die Methode `querySelector` bzw. deren Parameter funktioniert wie bei CSS-Selektoren, d.h. eine Klasse muss mit `.` vorangegangen werden, während eine ID mit `#` vorangegangen werden muss.

{% hint style="info" %}
Die `HTMLCollection` ist eine sogenannte Live Collection, die automatisch aktualisiert wird, wenn z.B. ein Element darin gelöscht wird.
{% endhint %}

### Spezielle Elemente

Das `document` hat noch weitere spezielle Elemente, z.B. das gesamte HTML-Element auf die wir so zugreifen:

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-6">console.log(document.documentElement);</a>
<a data-footnote-ref href="#user-content-fn-7">console.log(document.head);</a>
<a data-footnote-ref href="#user-content-fn-8">console.log(document.body);</a>
</code></pre>

## Elemente erstellen und einfügen

Es gibt zwei gängige Wege, um Elemente zu erstellen und im DOM einzufügen.

### Programmatisch

Beim programmatischen Weg erstellen wir zuerst ein `HTMLElement` im JavaScript, geben ihm einige Klassen und fügen es dann in den DOM-Tree ein:

```javascript
const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn-close-cookie">Got it!</button>';

header.prepend(message);
header.append(message);
header.before(message);
header.after(message);

header.append(message.cloneNode(true));
```

Mit `createElement()` erstellen wir also unser Element, hier ein `HTMLDivElement`. Danach geben wir ihm die Klasse `cookie-message`. Daraufhin fügen wir entweder Text ein oder gleich HTML mit `innerHTML`, um hier z.B. noch einen Button einzufügen.

Nachdem fügen wir das Element in unser DOM ein, dafür stehen uns vier Methoden zur Verfügung:

* `prepend()` → innerhalb des Elements als erstes Child
* `append()` → innerhalb des Elements als letztes Child
* `before()` → vor dem Element
* `after()` → nach dem Element

Unten sehen wir noch die Möglichkeit, wie wir das gleiche Element mehrmals auf unserer Seite anzeigen können → wir müssen es also Klonen.

### HTML-Template

Wir können unser neues Element auch direkt als HTML-Template einfügen mit der Methode `insertAdjacentHTML()`:

```javascript
const cookieMessageHTML = `
  <div class="cookie-message">
    We use cookies for improved functionality and analytics.
    <button class="btn btn-close-cookie">Got it!</button>
  </div>
`;

header.insertAdjacentHTML('afterbegin', cookieMessageHTML);
```

Hier erstellen wir also einen Template-String mit HTML Struktur (hier könnten wir natürlich auch Variablen einfügen) und fügen ihn dann in den Header ein. Das erste Argument hat dabei folgende Möglichkeiten:

* `beforebegin` → vor dem Element
* `afterbegin` → innerhalb des Elements als erstes Child
* `beforeend` → innerhalb des Elements als letztes Child
* `afterend` → nach dem Element

## Elemente löschen

```javascript
document
  .querySelector('.btn-close-cookie')
  .addEventListener('click', () => message.remove());
```

[^1]: `<header>...</header>`

[^2]: `NodeList(4)[...]`

[^3]: `<section id="section-1" class="section">...</section>`

[^4]: `HTMLCollection(9)[...]` -> Live Collection

[^5]: `HTMLCollection(9)[...]` -> Live Collection

[^6]: \<html>...\</html>

[^7]: \<head>...\</head>

[^8]: \<body>...\</body>
