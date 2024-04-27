# Hintergründe

In CSS kann man verschiedene Hintergründe erstellen, hier befassen wir uns mit Hintergrundfarben und Hintergrundbildern.

## Hintergrundfarbe

Mit dem Property `background-color` können wir die Hintergrundfarbe eines Elements bestimmen:

````CSS
background-color: #567895
````

## Hintergrundbild

Mit dem Property `background-image` können wir ein Hintergrundbild einfügen, damit das aber gut aussieht, müssen weitere Properties benutzt werden.

````CSS
background-image: url(hero.jpg)
````

### Steuerung der Hintergrund-Wiederholung

Mit `background-reapet` bestimmen wir, was geschehen soll, wenn ein Bild noch nicht das ganze Element ausgefüllt hat:

- `no-reapeat` - Der Hintergrund wird nie wiederholt
- `repeat-x` - Der Hintergrund wird horizontal wiederholt
- `repeat-y` - Der Hintergrund wird vertikal wiederholt
- `repeat` - der Standard; wiederholt sich in beide Richtungen

````CSS
background-image: url(hero.jpg);
background-repeat: no-reapeat;
````

### Größe des Hintergrundbildes

Mit dem Property `background-size` können wir die Grösse unseres Hintergrundbilds anpassen. Das Property akzeptiert Längen und Prozente. Zudem
gibt es noch folgende Keywords:

- `cover` - Das Bild deckt sicher das ganze Element ab
- `contain` - Das Bild passt genau in das Element, vlt. gibt es Ränder, wenn die Seitenverhältnisse nicht stimmen.

````CSS
background-image: url(hero.jpg);
background-repeat: no-reapeat;
background-size: contain;
````

### Position des Hintergrundbilds

Mit dem Property `background-position` können wir die Position des Hintergrundbilds verändern. Das geht einerseits mit Längen und Prozenten,
andererseits mit Keywords, wie `top` und `right`.

````CSS
background-image: url(hero.png);
background-repeat: no-repeat;
background-position: top right;
````

