# Daten internationalisieren

Wir können Datumsobjekte internationalisieren, indem wir die eingebaute `Intl`-API von JavaScript nutzen:

````Javascript
const now = new Date();
console.log(new Intl.DateTimeFormat('en-US').format(now)); // 8/19/2021
console.log(new Intl.DateTimeFormat('en-GB').format(now)); // 19/08/2021
console.log(new Intl.DateTimeFormat('de-DE').format(now)); // 19.08.2021
console.log(new Intl.DateTimeFormat('ar-SY').format(now)); // ١١‏/١٠‏/٢٠٢٤
````

Eine komplette Tabelle dieser Codes findest du [**hier**](http://www.lingoes.net/en/translator/langcode.htm).

Wir können auch weitere Optionen mitgeben, um z.B. auch die Zeit anzuzeigen:

````Javascript
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
};

console.log(new Intl.DateTimeFormat('en-US', options).format(now)); // 8/19/2021, 6:05 PM
console.log(new Intl.DateTimeFormat('en-GB', options).format(now)); // 19/08/2021, 18:05
console.log(new Intl.DateTimeFormat('de-DE', options).format(now)); // 19.08.2021, 18:05
console.log(new Intl.DateTimeFormat('ar-SY', options).format(now)); // ١٩‏/٨‏/٢٠٢١، ٦:٠٥ م
````

> Der Datentyp `Options` hat folgende Möglichkeiten:
> 
> ````Typescript
> type Options = {
>  dateStyle: 'full' | 'long' | 'medium' | 'short',
>  timeStyle: 'full' | 'long' | 'medium' | 'short',
>  calendar: 'buddhist' | 'chinese' | 'coptic' | 'dangi' | 'ethioaa' | 'ethiopic' | 'gregory' | 'hebrew' | 'indian' | 'islamic' | 
> 'islamic-umalqura' | 'islamic-tbla' | 'islamic-civil' | 'islamic-rgsa' | 'iso8601' | 'japanese' | 'persian' | 'roc' | 'islamicc',
>  dayPeriod: 'narrow' | 'short' | 'long',
>  numberingSystem: 'arab' | 'arabext' | 'bali' | 'beng' | 'deva' | 'fullwide' | ' gujr' | 'guru' | 'hanidec' | 'khmr' | ' knda' | 'laoo' | 'latn' 
> | 'limb' | 'mlym' | 'mong' | 'mymr' | 'orya' | 'tamldec' | 'telu' | 'thai' | 'tibt',
>  localeMatcher: 'lookup' | 'best fit',
>  year: "numeric" | "2-digit",
>  month: "numeric" | "2-digit" | "long" | "short" | "narrow",
>  day: "numeric" | "2-digit",
>  hour: "numeric" | "2-digit",
>  minute: "numeric" | "2-digit",
>  second: "numeric" | "2-digit",
>  era: "long" | "short" | "narrow",
>  weekday: "long" | "short" | "narrow",
>  hourCycle: 'h11'|'h12'|'h23'|'h24',
>  hour12: boolean,
>  timeZone: string,
>  formatMatcher: 'basic' |'best fit',
> timeZoneName: 'long' | 'short' |'shortOffset'|'longOffset'|'shortGeneric'| 'longGeneric'
> }
> ````

## Sprache / Locale vom Browser

Oftmals macht es Sinn die Sprache, bzw. die Locale vom Browser zu bekommen. Deshalb können wir einfach auf ein Property zugreifen (`navigator.language`)