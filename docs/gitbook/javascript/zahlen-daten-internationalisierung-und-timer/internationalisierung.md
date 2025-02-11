---
icon: earth-africa
---

# Internationalisierung

## Daten internationalisieren

Wir können Datumsobjekte internationalisieren, indem wir die eingebaute `Intl`-API von JavaScript nutzen:

<pre class="language-javascript"><code class="lang-javascript">const now = new Date();
<a data-footnote-ref href="#user-content-fn-1">console.log(new Intl.DateTimeFormat('en-US').format(now));</a>
<a data-footnote-ref href="#user-content-fn-2">console.log(new Intl.DateTimeFormat('en-GB').format(now));</a>
<a data-footnote-ref href="#user-content-fn-3">console.log(new Intl.DateTimeFormat('de-DE').format(now));</a>
<a data-footnote-ref href="#user-content-fn-4">console.log(new Intl.DateTimeFormat('ar-SY').format(now));</a>
</code></pre>

Eine komplette Tabelle dieser Codes findest du [hier](http://www.lingoes.net/en/translator/langcode.htm).

Wir können auch weitere Optionen mitgeben, um z.B. auch die Zeit anzuzeigen:

<pre class="language-javascript"><code class="lang-javascript">const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
};

<a data-footnote-ref href="#user-content-fn-5">console.log(new Intl.DateTimeFormat('en-US', options).format(now));</a>
<a data-footnote-ref href="#user-content-fn-6">console.log(new Intl.DateTimeFormat('en-GB', options).format(now));</a>
<a data-footnote-ref href="#user-content-fn-7">console.log(new Intl.DateTimeFormat('de-DE', options).format(now));</a>
<a data-footnote-ref href="#user-content-fn-8">console.log(new Intl.DateTimeFormat('ar-SY', options).format(now);</a> 
</code></pre>

{% hint style="info" %}
Der Datentyp `Options` hat folgende Möglichkeiten:

```javascript
type Options = {
 dateStyle: 'full' | 'long' | 'medium' | 'short',
 timeStyle: 'full' | 'long' | 'medium' | 'short',
 calendar: 'buddhist' | 'chinese' | 'coptic' | 'dangi' | 'ethioaa' | 'ethiopic' | 'gregory' | 'hebrew' | 'indian' | 'islamic' |
'islamic-umalqura' | 'islamic-tbla' | 'islamic-civil' | 'islamic-rgsa' | 'iso8601' | 'japanese' | 'persian' | 'roc' | 'islamicc',
 dayPeriod: 'narrow' | 'short' | 'long',
 numberingSystem: 'arab' | 'arabext' | 'bali' | 'beng' | 'deva' | 'fullwide' | ' gujr' | 'guru' | 'hanidec' | 'khmr' | ' knda' | 'laoo' | 'latn'
| 'limb' | 'mlym' | 'mong' | 'mymr' | 'orya' | 'tamldec' | 'telu' | 'thai' | 'tibt',
 localeMatcher: 'lookup' | 'best fit',
 year: "numeric" | "2-digit",
 month: "numeric" | "2-digit" | "long" | "short" | "narrow",
 day: "numeric" | "2-digit",
 hour: "numeric" | "2-digit",
 minute: "numeric" | "2-digit",
 second: "numeric" | "2-digit",
 era: "long" | "short" | "narrow",
 weekday: "long" | "short" | "narrow",
 hourCycle: 'h11'|'h12'|'h23'|'h24',
 hour12: boolean,
 timeZone: string,
 formatMatcher: 'basic' |'best fit',
timeZoneName: 'long' | 'short' |'shortOffset'|'longOffset'|'shortGeneric'| 'longGeneric'
}
```
{% endhint %}



### Sprache / Locale vom Browser﻿ <a href="#sprache-locale-vom-browser" id="sprache-locale-vom-browser"></a>

Oftmals macht es Sinn die Sprache, bzw. das Locale vom Browser zu bekommen. Deshalb können wir einfach auf ein Property zugreifen (`navigator.language`)

## Zahlen internationalisieren

Um Zahlen zu internationalisieren nutzen wir die `Intl`-API von JavaScript. Bei dieser API gibt es die statische Method `NumberFormat()`, mit welcher wir arbeiten können:

<pre class="language-javascript"><code class="lang-javascript">const num = 3884764.23;

<a data-footnote-ref href="#user-content-fn-9">console.log(new Intl.NumberFormat('en-US').format(num));</a>
<a data-footnote-ref href="#user-content-fn-10">console.log(new Intl.NumberFormat('de-DE').format(num));</a>
<a data-footnote-ref href="#user-content-fn-11">console.log(new Intl.NumberFormat('de-CH').format(num));</a>
<a data-footnote-ref href="#user-content-fn-12">console.log(new Intl.NumberFormat('ar-SY').format(num));</a>
</code></pre>

Wie wir sehen, sind die Trennzeichen ganz anders, sowie die "Kommas" für die Dezimalstellen der Zahl.

Weiter können wir Optionen mitgeben, welche uns die Formatierung noch weiter vereinfacht:

<pre class="language-javascript"><code class="lang-javascript">const options = {
  style: 'unit',
  unit: 'mile-per-hour'
};

console.log(new<a data-footnote-ref href="#user-content-fn-13"> Intl.NumberFormat('en-US', options).format(velocity));</a>
<a data-footnote-ref href="#user-content-fn-14">console.log(new Intl.NumberFormat('de-DE', options).format(velocity));</a>
<a data-footnote-ref href="#user-content-fn-15">console.log(new Intl.NumberFormat('ar-SY', options).format(velocity));</a> 

const currency = 12321.23;

options = {
  style: 'currency',
  currency: 'USD'
};

<a data-footnote-ref href="#user-content-fn-16">console.log(new Intl.NumberFormat('en-US', options).format(currency));</a>
<a data-footnote-ref href="#user-content-fn-17">console.log(new Intl.NumberFormat('de-DE', options).format(currency));</a>
<a data-footnote-ref href="#user-content-fn-18">console.log(new Intl.NumberFormat('ar-SY', options).format(currency));</a>
</code></pre>

{% hint style="info" %}
Der Datentyp `Options` bietet uns folgende Möglichkeiten:

```javascript
type Options = {
  compactDisplay?: "short" | "long"; // Only used when notation is "compact"
  currencyDisplay?: "symbol" | "narrowSymbol" | "code" | "name";
  currencySign?: "standard" | "accounting";
  localeMatcher?: "lookup" | "best fit";
  notation?: "standard" | "scientific" | "engineering" | "compact";
  numberingSystem?: 'arab' | 'arabext' | 'bali' | 'beng' | 'deva' | 'fullwide' | 'gujr' | 'guru' | 'hanidec' | 'khmr' | 'knda' | 'laoo' | 'latn' | 'limb' | 'mlym' | 'mong' | 'mymr' | 'orya' | 'tamldec' | 'telu' | 'thai' | 'tibt';
  signDisplay?: "auto" | "always" | "exceptZero" | "negative" | "never" ;
  style?: "decimal" | "currency" | "percent" | "unit";
  unit?: string;
  unitDisplay?: "long" | "short" | "narrow";
  useGrouping?: "always" | "auto" | boolean | "min2";
  roundingMode?: "ceil" | "floor" | "expand" | "trunc" | "halfCeil" | "halfFloor" | "halfExpand" | "halfTrunc" | halfEven";
  roundingPriority?: "auto" | "morePrecision" | "lessPrecision";
  roundingIncrement?: 1 | 2 | 5 | 10 | 20 | 25 | 50 | 100 | 200 | 250 | 500 | 1000 | 2000 | 2500 | 5000;
  trailingZeroDisplay?: "auto" | "stripIfInteger";
  minimumIntegerDigits?: number;
  minimumFractionDigits?: number;
  > maximumFractionDigits?: number;
  minimumSignificantDigits?: number;
  maximumSignificantDigits?: number;
}
```
{% endhint %}

[^1]: `8/19/2021`

[^2]: `19/08/2021`

[^3]: `19.08.2021`

[^4]: `١١‏/١٠‏/٢٠٢٤`

[^5]: `8/19/2021, 6:05 PM`

[^6]: `19/08/2021, 18:05`

[^7]: `19.08.2021, 18:05`

[^8]: `١٩‏/٨‏/٢٠٢١، ٦:٠٥ م`

[^9]: `3,884,764.23`

[^10]: `3.884.764,23`

[^11]: `3'884'764.23`

[^12]: `٣٬٨٨٤٬٧٦٤٫٢٣`&#x20;

[^13]: `120 mph`

[^14]: `120 mi/h`

[^15]: `١٢٠ ميل/س`

[^16]: `$12,321.23`

[^17]: `12.321,23 $`

[^18]: `١٢٬٣٢١٫٢٣ US$`
