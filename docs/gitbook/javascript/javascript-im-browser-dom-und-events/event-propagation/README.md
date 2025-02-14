---
icon: paper-plane-top
---

# Event Propagation

Event Propagation beschreibt den Prozess, wie sich Events (wie Klicks oder Tastatureingaben) durch den DOM-Baum einer Webseite ausbreiten - zunächst in der Capturing-Phase von oben nach unten, dann in der Bubbling-Phase von unten nach oben durch die verschachtelten HTML-Elemente.

Es passiert folgendes, wenn beispielweise ein Click Event erstellt wird:

{% stepper %}
{% step %}
### `document`

Das Click Event wird an das `document` angehängt.

<figure><img src="../../../.gitbook/assets/image (15).png" alt="" width="563"><figcaption><p><code>document</code></p></figcaption></figure>
{% endstep %}

{% step %}
### Capturing Phase

Das Event durchläuft jedes Parent-Element des Target-Elements (Element mit dem Event-Listener).

<figure><img src="../../../.gitbook/assets/image (16).png" alt="" width="563"><figcaption><p>Capturing Phase</p></figcaption></figure>
{% endstep %}

{% step %}
### Target Phase

In der Target Phase werden die Events beim Target verarbeitet. Das machen wir mit Event-Listeners.

<figure><img src="../../../.gitbook/assets/image (17).png" alt="" width="563"><figcaption><p>Target Phase</p></figcaption></figure>
{% endstep %}

{% step %}
### Bubbling Phase

Das Event durchläuft nun wieder jedes Parent-Element bis zum `document`. Wenn das passiert ist es für JavaScript so, als ob das Event auch in einem der Parent-Elemente passiert wäre.&#x20;

Das heisst wir können an unsere Parent-Elemente ebenfalls Event-Listener anhängen. Diese werden auch dann aufgerufen, wenn ein Child-Element das Target-Element war.

<figure><img src="../../../.gitbook/assets/image (18).png" alt="" width="563"><figcaption><p>Bubbling Phase</p></figcaption></figure>

Mit einem kleinen Trick können wir uns das auch in der Capturing Phase zu nutze machen.
{% endstep %}
{% endstepper %}

## Bubbling Phase

Um die Events in der Bubbling Phase abzufangen, müssen wir Event-Handler an die Parent-Elemente anhängen.

```javascript
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', (e) => {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav__links').addEventListener('click', (e) => {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', (e) => {
  this.style.backgroundColor = randomColor();
});
```

Wenn wir nun auf ein Element mit der Klasse `.nav__link` klicken, werden sowohl bei diesem Element, als auch `.nav__links` und `.nav` die Hintergrundfarben verändert.

### `target` und `currentTarget`

Das Target-Element ist bei jedem der obigen Event-Listener gleich. Jedoch können wir auf das eigentliche Target-Element über `currentTarget` zugreifen.

{% hint style="info" %}
`currentTarget` entspricht im Event-Listener `this`.
{% endhint %}

### Propagation stoppen

Um dieses Verhalten zu verhindern können wir im Target-Element die Methode `stopPropagation` auf dem Event aufrufen.

```javascript
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  e.stopPropagation();
});
```

## Capturing Phase

Wir können das Standardverhalten des Event-Listeners mit einem Argument überschreiben:

```javascript
document.querySelector('.nav').addEventListener('click', (e) => {
  this.style.backgroundColor = randomColor();
}, true);
```

Jetzt wird das Event in der Capturing Phase abgefangen und nicht in der Bubbling Phase.
