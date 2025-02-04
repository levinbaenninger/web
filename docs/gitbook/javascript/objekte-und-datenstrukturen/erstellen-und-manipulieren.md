---
icon: wrench-simple
---

# Erstellen und Manipulieren

## Objekte erstellen

```javascript
const levin = {
  firstName: 'Levin',
  lastName: 'Bänninger',
  age: 17,
  job: 'Software Engineer',
  friends: ['Jonas', 'Marie', 'Peter'],
  work(hours) {
    console.log(`{this.firstName} is working for {hours} hours...`);
  }
};
```

{% hint style="info" %}
Wir können in einem Objekt alle Datentypen benutzen
{% endhint %}

## Datenzugriff

Es gibt zwei Möglichkeiten, auf Daten eines Objekts zuzugreifen:

* **Punktnotation**
* **Klammernotation**

### Punktnotation﻿ <a href="#punktnotation" id="punktnotation"></a>

Die Syntax der Punktnotation sieht wie folgt aus:

```javascript
objName.property;
```

Es ist ziemlich einfach. Beispiel mit unseren Personendaten:

<pre class="language-javascript"><code class="lang-javascript">const levin = {
  firstName: 'Levin',
  lastName: 'Bänninger',
  age: 17,
  job: 'Student',
  friends: ['Jonas', 'Marie', 'Peter'],
};

<a data-footnote-ref href="#user-content-fn-1">levin.lastName;</a>
<a data-footnote-ref href="#user-content-fn-2">levin.age;</a>
<a data-footnote-ref href="#user-content-fn-3">levin.friends;</a>
</code></pre>

### Klammernotation﻿ <a href="#klammernotation" id="klammernotation"></a>

Die Syntax für die Klammerschreibweise sieht wie folgt aus:

```javascript
objName['expression'];
```

Wie du sehen kannst, ist das auch ziemlich einfach. Wieder das Beispiel mit unseren Personendaten:

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-4">levin['lastName']</a>;
<a data-footnote-ref href="#user-content-fn-5">levin['age']</a>;
<a data-footnote-ref href="#user-content-fn-6">levin['friends']</a>;
</code></pre>

{% hint style="warning" %}
Wenn wir versuchen, auf eine Eigenschaft zuzugreifen, die nicht existiert, erhalten wir `undefined`.
{% endhint %}

### Unterschied﻿ <a href="#unterschied" id="unterschied"></a>

Der grosse Unterschied, zwischen den beiden ist, dass ich mit der Klammerschreibweise einen Ausdruck eintippen kann. Du könntest zum Beispiel Folgendes tun:

<pre class="language-javascript"><code class="lang-javascript">const nameKey = 'Name';
<a data-footnote-ref href="#user-content-fn-7">levin['first' + nameKey];</a>
<a data-footnote-ref href="#user-content-fn-8">levin['last' + nameKey];</a>
</code></pre>

Das ist nicht möglich mit der Punktnotation.

{% hint style="success" %}
**Wann sollte ich was verwenden?**

In der Regel solltest du immer die Punktschreibweise verwenden, weil sie viel einfacher zu lesen ist. Verwende die Klammerschreibweise nur, wenn du den Eigenschaftsnamen berechnen musst.
{% endhint %}

## Objekte manipulieren

### Property hinzufügen

```javascript
levin.location = 'Switzerland';
levin['twitter'] = '@LevinBaenninger';
```

### Property bearbeiten

```javascript
levin.job = 'programmer';
levin['location'] = 'Zurich';
```

### Property löschen

```javascript
delete levin.location;
delete levin['twitter'];
```

[^1]: Bänninger

[^2]: 17

[^3]: `['Jonas', 'Marie', 'Peter']`

[^4]: Bänninger

[^5]: 17

[^6]: `['Jonas', 'Marie', 'Peter']`

[^7]: Levin

[^8]: Bänninger
