---
icon: calendar
---

# Datum und Zeit

JavaScript macht es uns leicht Daten zu erstellen, da es kein bestimmtes Format gibt. So ist z.B. folgendes möglich:

```javascript
const now = new Date();
console.log(now);

console.log(new Date('Aug 19 2021 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date('2021-08-19T18:05:41'));
```

Alle diese obigen Kombinationen sind möglich, jedoch sollte man sich nicht darauf verlassen, das alles funktioniert. Die letzte Variante ist wohlmöglich die Beste, da es der Standard für das Datumsformat in Computersystem ist.

Für noch mehr Möglichkeiten siehe: [MDN `Date()`-Konstruktor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)

### Methoden﻿ <a href="#methoden" id="methoden"></a>

Ein Datum ist in JavaScript ebenfalls ein Objekt, welches verschiedenste Methoden hat.

#### `get`-Methoden﻿ <a href="#get-methoden" id="get-methoden"></a>

Auf einem Datumsobjekt gibt es verschiedenste `get`-Methoden, welche uns einen bestimmten Teil des Objektes zurückgeben:

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-1">console.log(future.getFullYear());</a>
<a data-footnote-ref href="#user-content-fn-2">console.log(future.getMonth());</a>
<a data-footnote-ref href="#user-content-fn-3">console.log(future.getDate());</a>
<a data-footnote-ref href="#user-content-fn-4">console.log(future.getDay());</a>
<a data-footnote-ref href="#user-content-fn-5">console.log(future.getHours());</a>
<a data-footnote-ref href="#user-content-fn-6">console.log(future.getMinutes());</a>
<a data-footnote-ref href="#user-content-fn-7">console.log(future.getSeconds());</a>
<a data-footnote-ref href="#user-content-fn-8">console.log(future.getTime());</a>
</code></pre>

#### `set`-Methoden﻿ <a href="#set-methoden" id="set-methoden"></a>

Mit den `set`-Methoden können wir bestimmte Teile des Datums verändern:

```javascript
future.setFullYear(2040);
future.setMonth(6);
future.setDate(12);
future.setHours(13);
future.setMinutes(15);
future.setSeconds(20);

console.log(future); // Sun Jul 12 2040 13:15:20 GMT+0200 (Central European Summer Time)
```

#### `toString`-Methoden﻿ <a href="#tostring-methoden" id="tostring-methoden"></a>

Es gibt noch weitere Methoden, welche uns unser Datumsobjekt in einen String umwandeln, den wir dann bspw. einer API senden können:

```javascript
console.log(future.toISOString()); // 2040-07-12T11:15:20.000Z --> UTC time
console.log(future.toString()); // Sun Jul 12 2040 13:15:20 GMT+0200 (Central European Summer Time)
console.log(future.toDateString()); // Sun Jul 12 2040
console.log(future.toTimeString()); // 13:15:20 GMT+0200 (Central European Summer Time)
console.log(future.toLocaleString()); // 7/12/2040, 1:15:20 PM
console.log(future.toLocaleDateString()); // 7/12/2040
console.log(future.toLocaleTimeString()); // 1:15:20 PM
console.log(future.toUTCString()); // Sun, 12 Jul 2040 11:15:20 GMT
```

Die Methode `toISOString()` ist besonders nützlich, wenn wir mit APIs arbeiten, die das Datum im UTC-Format verlangen.

{% hint style="info" %}
Die Methode `toLocaleString()` ist abhängig vom Standort des Nutzers: Darstellung des Datums und Zeitzone. Dabei kann man als Argument noch das Gebiet angeben. Die volle Übersicht findest du hier: [W3Schools JS Reference (Dates)](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocalestring_date_all)
{% endhint %}

[^1]: 2037

[^2]: 10

[^3]: 19

[^4]: 4 (Thursday)

[^5]: 15

[^6]: 23

[^7]: 0

[^8]: 2142244980000
