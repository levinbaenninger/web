# Dynamic Type

Mit dem Dynamic Type können wir einer Variable sagen, dass sie jeden Datentypen annehmen darf:

```Typescript
let age: any;

age = 25;
age = 'Twentyfive'
age = [25]
age = { age: 25 }
```

Wir können `any` natürlich auch für Arrays und Objekte verwenden:

```Typescript
let mixed: any[] = [];

mixed.push(5);
mixed.push('Levin');
mixed.push(true);
midex.push({ age: 12 })

let person: {
    name: any,
    age: any
}

person = { name: true, age: 'Twentyfive'}
```

Man sollte jedoch vorsichtig mit `any` umgehen, da somit die wichtigsten Gründe für TypeScript verloren gehen und da man schnell Fehler machen kann.
