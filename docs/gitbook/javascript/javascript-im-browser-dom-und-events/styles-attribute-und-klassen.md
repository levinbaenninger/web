---
icon: paintbrush
---

# Styles, Attribute und Klassen

## Styles

### Styles setzen

Um Styles auf Elementen direkt zu setzen, können wir das `style`-Attribut nutzen, mit welchem wir dann Zugriff auf jedes CSS-Property haben, jedoch in CamelCase-Schreibweise.

```javascript
btn.style.backgroundColor = '#37383d';
btn.style.width = '2rem';
```

{% hint style="danger" %}
Diese Styles werden als Inline-Styles gesetzt und überschreiben somit alle Regeln ausser die, die mit `!important` markiert sind.
{% endhint %}

### Styles auslesen

Um nun auf alle Style-Properties eines Elements zuzugreifen, müssen wir die Methode `getComputedStyle()` nutzen:

<pre class="language-javascript"><code class="lang-javascript">co<a data-footnote-ref href="#user-content-fn-1">nsole.log(getComputedStyle(btn).color);</a>
<a data-footnote-ref href="#user-content-fn-2">console.log(getComputedStyle(btn).height);</a>
</code></pre>

### CSS-Variablen

Wir können auch die Werte der CSS-Variablen verändern oder CSS-Variablen neu erstellen , indem wir das gesamte Dokument auswählen:

```javascript
document.documentElement.style.setProperty('--color-primary', 'orangered');
```

## Attribute

### Attribute auslesen

Für Standard-Attribute können wir einfach unser Element nutzen und dann darauf zugreifen:

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-3">console.log(logo.alt);</a>
<a data-footnote-ref href="#user-content-fn-4">console.log(logo.src);</a>
<a data-footnote-ref href="#user-content-fn-5">console.log(logo.className);</a>
</code></pre>

Für Nicht-Standard-Attribute müssen wir die Methode `getAttribute()` nutzen:

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-6">console.log(logo.getAttribute('designer'));</a>
</code></pre>

### Attribute setzen

Das Attribut setzen funktioniert ebenfalls über die Properties des HTML-Elements:

```javascript
logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('company', 'Bankist');
```

## Klassen

Bei den Klassen haben wir essenziell vier Methoden, um einem Element Klassen hinzuzufügen, zu entfernen, umzuschalten und zu überprüfen, ob sie bereits angewandt wird:

<pre class="language-javascript"><code class="lang-javascript">logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');

<a data-footnote-ref href="#user-content-fn-7">console.log(logo.classList.contains('c'));</a>
<a data-footnote-ref href="#user-content-fn-8">console.log(logo.classList.contains('nav__logo'));</a>
</code></pre>

[^1]: `rgb(255, 255, 255)`

[^2]: `52px`

[^3]: `Bankist logo`

[^4]: [`http://127.0.0.1/img/logo.png`](http://127.0.0.1/img/logo.png)

[^5]: `nav__logo`

[^6]: `Jonas`

[^7]: `false`

[^8]: `true`
