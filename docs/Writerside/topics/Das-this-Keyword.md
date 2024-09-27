# Das this Keyword

<show-structure depth="2" />

**`this` Schlüsselwort/Variable:** Spezielle Variable, die für jeden Execution Context (jede Funktion) erstellt wird. Nimmt den Wert des "Eigentümers"
der Funktion an, in der das Schlüsselwort `this` verwendet wird (zeigt auf ihn).

`this` ist nicht statisch. Es hängt davon ab, wie die Funktion aufgerufen wird, und der Wert wird erst zugewiesen, wenn die Funktion tatsächlich
aufgerufen wird.

> **Method** -> `this` = `<object that is calling the method>`
>
> ```Javascript
>   const jonas = {
> 	name: 'Jonas',
> 	year: 1989,
> 	calcAge: function() {
> 		return 2037 - this.year
> 	}
> };
> jonas.calcAge(); // 48
> ```
>
> **Simple function call** -> `this` = `undefined`
>
> **Arrow functions** -> `this` = `<this of surrounding function (lexical <mark>this)>`
>
> **Event Listener** -> `this` = `<DOM element that the hander is attached to>`
>
> `new`, `call`, `apply`, `bind` -> <Later in the course...⌛>

`this` does **not** point to the function itself, and also **not** to its variable environment.
