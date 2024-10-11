# Über Arrays loopen

Mit der `forEach()`-Methode können wir über Arrays loopen. Dabei geben wir als Argument eine Callback-Funktion mit, die für jedes Element im 
jeweiligen Array aufgerufen wird. Dabei können wir der Callback-Funktion drei Argumente mitgeben, das einzelne Elemente, den Index und den 
gesamten Array.

````Javascript
movements.forEach((movement, index, array) => {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
````

> Bei dieser Methode können wir den Loop nicht abbrechen oder ein Element überspringen. Das müssten wir mit einem normalen oder [**For-Of Loop**](For-Of-Loop.md) machen

