# Sizing Funktionen

- Die `fit-content()`-Funktion benutzt den verfügbaren Platz, aber ist nie kleiner als `min-content` und nie grösser als `max-content`.
- Die `min-max()`-Funktion setzt ein Minimum und ein Maximum für die Länge. Das ist nützlich in Kombination mit relativen Einheiten:

````CSS
grid-template-columns: minmax(100px, 1fr) 3fr;
````