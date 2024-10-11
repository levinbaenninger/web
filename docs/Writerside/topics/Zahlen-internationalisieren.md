# Zahlen internationalisieren

Um Zahlen zu internationalisieren nutzen wir die `Intl`-API von JavaScript. Bei dieser API gibt es die statische Method `NumberFormat()`, mit 
welcher wir arbeiten können:

````Javascript
const num = 3884764.23;

console.log(new Intl.NumberFormat('en-US').format(num)); // 3,884,764.23
console.log(new Intl.NumberFormat('de-DE').format(num)); // 3.884.764,23
console.log(new Intl.NumberFormat('de-CH').format(num)); // 3'884'764.23
console.log(new Intl.NumberFormat('ar-SY').format(num)); // ٣٬٨٨٤٬٧٦٤٫٢٣
````

Wie wir sehen, sind die Trennzeichen ganz anders, sowie die "Kommas" für die Dezimalstellen der Zahl.

Weiter können wir Optionen mitgeben, welche uns die Formatierung noch weiter vereinfacht:

````Javascript
const options = {
  style: 'unit',
  unit: 'mile-per-hour'
};

console.log(new Intl.NumberFormat('en-US', options).format(velocity)); // 120 mph
console.log(new Intl.NumberFormat('de-DE', options).format(velocity)); // 120 mi/h
console.log(new Intl.NumberFormat('ar-SY', options).format(velocity)); // ١٢٠ ميل/س

const currency = 12321.23;

options = {
  style: 'currency',
  currency: 'USD'
};

console.log(new Intl.NumberFormat('en-US', options).format(currency)); // $12,321.23
console.log(new Intl.NumberFormat('de-DE', options).format(currency)); // 12.321,23 $
console.log(new Intl.NumberFormat('ar-SY', options).format(currency)); // ١٢٬٣٢١٫٢٣ US$
````

> Der Datentyp `Options` bietet uns folgende Möglichkeiten:
> 
> ````Typescript
> type Options = {
> compactDisplay?: "short" | "long"; // Only used when notation is "compact"
> currencyDisplay?: "symbol" | "narrowSymbol" | "code" | "name";
> currencySign?: "standard" | "accounting";
> localeMatcher?: "lookup" | "best fit";
> notation?: "standard" | "scientific" | "engineering" | "compact";
> numberingSystem?: 'arab' | 'arabext' | 'bali' | 'beng' | 'deva' | 'fullwide' | 'gujr' | 'guru' | 'hanidec' | 'khmr' | 'knda' | 'laoo' | 'latn' | 'limb' | 'mlym' | 'mong' | 'mymr' | 'orya' | 'tamldec' | 'telu' | 'thai' | 'tibt';
> signDisplay?: "auto" | "always" | "exceptZero" | "negative" | "never" ;
> style?: "decimal" | "currency" | "percent" | "unit";
> unit?: string;
> unitDisplay?: "long" | "short" | "narrow";
> useGrouping?: "always" | "auto" | boolean | "min2";
> roundingMode?: "ceil" | "floor" | "expand" | "trunc" | "halfCeil" | "halfFloor" | "halfExpand" | "halfTrunc" | halfEven";
> roundingPriority?: "auto" | "morePrecision" | "lessPrecision";
> roundingIncrement?: 1 | 2 | 5 | 10 | 20 | 25 | 50 | 100 | 200 | 250 | 500 | 1000 | 2000 | 2500 | 5000;
> trailingZeroDisplay?: "auto" | "stripIfInteger";
> minimumIntegerDigits?: number;
> minimumFractionDigits?: number;
> > maximumFractionDigits?: number;
> minimumSignificantDigits?: number;
> maximumSignificantDigits?: number;
> }
> ````