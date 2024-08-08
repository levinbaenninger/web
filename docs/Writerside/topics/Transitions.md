# Transitions

Transitions sind ein wenig unsere Benutzerinteraktion insgesamt anspielender und geschmeidiger zu machen.

Dafür nutzen wir das `transition`-Property. Dieses hat vier Werte, den **Property Name**, die **Duration**, die **Timing Function** und den **Delay**.

## Property Name

Hier können wir entscheiden welche Properties einen Übergang machen sollten. Dafür einfach den Namen des Properties schreiben oder `all`.

## Duration

Hier entscheiden wir, wie lange der Übergang dauern soll.

## Timing Function

Es gibt viele verschiedene Timing Functions, die einen beginnen schnell und enden langsam, die anderen haben einen exponentiellen Anstieg, etc.

Für weitere Informationen: [MDN - Timing Functions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) oder [easings.net]
(https://easings.net)

## Delay

Hier kann man sagen, wie lange die Transition warten soll, bis sie ausgeführt wird.

## Beispiel

````CSS
.circle {
    width: 300px;
    height: 300px;
    background-color: magenta;
    transition: background-color 1s ease-in 0.2s;
}

.circle {
    background-color: cyan;
    border-radius: 50%;
}
````