# flex-wrap

Standardmässig, versuchen alle Flex Items auf eine Reihe zu passen. Das ist veränderbar mit `flex-wrap`:

````CSS
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
````

- `nowrap` (default): alle Flex Items werden auf einer Linie sein
- `wrap`: Flex Items werden von oben nach unten auf mehreren Zeilen verteilt
- `wrap-reverse`: Flex Items werden von unten nach oben auf mehreren Zeilen verteilt