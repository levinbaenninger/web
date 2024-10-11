# flat- und flatMap-Methode

Die `flat()`-Methode wandelt einen n-Dimensionalen Array in einen 1-Dimensionalen Array um, dabei kann man eine Tiefe angeben, so kann man bspw. 
auch einen 3-Dimensionalen in einen 1-Dimensionalen Array umwandeln.

````Javascript
const twoDimensionalArr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(twoDimensionalArr.flat()); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

const threeDimensionalArr = [[1, 2, 3], [4, [5, 6]], 7, 8];
console.log(threeDimensionalArr.flat()); // [ 1, 2, 3, 4, [ 5, 6 ], 7, 8 ]
console.log(threeDimensionalArr.flat(2)); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

const fourDimensionalArr = [[1, 2, 3], [4, [5, [6, 7]]], 8, 9];
console.log(fourDimensionalArr.flat(2)); // [ 1, 2, 3, 4, 5, [ 6, 7 ], 8, 9 ]
console.log(fourDimensionalArr.flat(3)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
````

Wie man sieht mutiert es den originalen Array auch nicht.

Daneben gibt es noch die `flatMap()`-Methode welche die [**`map()`**](map-Methode.md)- und `flat()`-Methode kombiniert.

````Javascript
const overallBalance = accounts
  .flatMap((account) => account.movements)
  .reduce((acc, movement) => acc + movement);
console.log(overallBalance);
````

> Bei der `flatMap()`-Methode können wir die Tiefe nicht wie bei `flat()` bestimmen.