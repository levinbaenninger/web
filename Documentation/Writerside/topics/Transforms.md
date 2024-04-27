# Transform

Das `transform` Property ist sehr mächtig, wir können damit jede mögliche Textmanipulation vornehmen.

## rotate()

Mit der `rotate()`-Funktion kann man Elemente um einen fixen Punkt im 2D Raum drehen, ohne es zu deformieren. Darüber hinaus gibt es `rotateX()`,
`rotateY()` und `rotateZ()`, diese drehen das Element auf der jeweiligen Achse.

````CSS
h1 {
	transform: rotate(90deg);
}

h1 {
	transform: rotate(1rad);
}

h1 {
	transform: rotate(0.25turn);
}
````

## scale()

Mit der `scale()`-Funktion kann man etwas vergrössern bzw. verkleinern.

````CSS
h1 {
	transform: scale(0.5)
}

/* (x and y axis) */
h1 {
	transform: scale(0.5, 1.3)
}
````

## translate()

Mit der `translate()`-Funktion kann man Elemente verschieben.

````CSS
h1 {
	transform: translate(100px, -50px)
}
````

<seealso>
    <category ref="weitere">
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform">MDN - Reference</a>
    </category>
</seealso>