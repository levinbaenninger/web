# Einfache Methoden

## `slice()`-Methode

Die `slice()`-Methode gibt uns einen Teil eines Arrays aus. Dabei können wir mit den Parametern den Start (inklusive) und das Ende (exklusiv) 
dieses Teils bestimmen. Der originale Array bleibt unberührt.

````Javascript
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['b', 'c']
console.log(arr.slice(1, -2)); // ['b', 'c']
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e'] - shallow copy
````

## `splice()`-Methode

Die `splice()`-Methode funktioniert fast gleich wie die `slice()`-Methode jedoch verändert sie auch den Array auf welchem die Methode aufgerufen 
wurde.

````Javascript
console.log(arr.splice(-1)); // ['e']
console.log(arr); // ['a', 'b', 'c', 'd']
````

## `reverse()`-Methode

Mit der `reverse()`-Methode können wir die Werte eines Arrays umkehren. Hier wird auch der originale Array verändert.

````Javascript
console.log(arr.reverse()); // ['e', 'd', 'c', 'b', 'a']
````

## `concat()`-Methode

Die `concat()`-Methode führt zwei Arrays zusammen zu einem. Die originalen Arrays werden nicht verändert.

````Javascript
const letters = arr.concat(['f', 'g', 'h']); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
````

## `join()`-Methode

Die `join()`-Methode führt alle Elemente eines Arrays in einem String zusammen. Dabei kann man als Parameter einen Seperator festlegen:

````Javascript
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h
````

## `at()`-Methode

Mit der `at()`-Methode können wir den Wert an einer Position (Index) herausfinden.

````Javascript
console.log(letters.at(0)); // a
console.log(letters.at(-1)); // h
````