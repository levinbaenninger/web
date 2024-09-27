# Responsive Bilder

Um Bilder responsive zu machen, müssen wir sagen, dass diese nie die Container-Breite überschreiten. Ein möglicher Ansatz wäre folgender:

```CSS
img,
picture,
video {
  max-width: 100%;
}
```
