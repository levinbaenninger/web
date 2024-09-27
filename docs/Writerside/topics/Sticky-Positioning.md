# Sticky Positioning

Sticky Positioning ist ein Hybrid zwischen relative und fixed Positioning. Dadurch kann sich ein positioniertes Element so verhalten, als wäre es
relativ positioniert, bis es bis zu einem bestimmten Schwellenwert (z. B. 10 Pixel vom oberen Rand des Ansichtsfensters) gescrollt wird. Danach wird
es fixiert.

```CSS
.positioned {
  position: sticky;
  top: 30px;
  left: 30px;
}
```
