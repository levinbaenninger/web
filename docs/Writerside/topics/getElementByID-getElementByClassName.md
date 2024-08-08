# getElementById(), getElementByClassName(), ...

<show-structure depth="2" />

Wir können Elemente nicht nur mit `querySelector()` auswählen, sondern auch mit `getElementById()`, `getElementsByClassName()`, `getElementsByName()`
und `getElementsByTagName()`.

Die Unterschiede zwischen den oben genannten und `querySelector()` sind, dass sie schneller sind und dass man keine Selektoren, sondern Namen als
Parameter mitgibt.

Die Elementmanipulation funktioniert gleich wie bei `querySelector()`.

## getElementByID()

Mit `getElementById()` kann man Elemente mit bestimmten IDs auswählen:

````Javascript
document.getElementById(Id);
````

Der `return`-Wert ist ein Element.

## getElementByClassName()

Mit `getElementsByClassName()` kann man alle Elemente mit einer bestimmten Klasse auswählen:

````Javascript
document.getElementsByClassName(class);
````

Der `return`-Wert ist eine [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)

## getElementsByName()

Mit `getElementsByName()` kann man alle Elemente mit einem bestimmten Namen auswählen:

````Javascript
document.getElementsByName(name);
````

Der `return`-Wert ist eine [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)

## getElementsByTagName

Mit getElementsByTagName() kann man alle Element mit dem bestimmten Tagnamen auswählen:

````Javascript
document.getElementsByTagName(name)
````

Der `return`-Wert ist bei neueren WebKit Browsern eine [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList), bei älteren
eine [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)