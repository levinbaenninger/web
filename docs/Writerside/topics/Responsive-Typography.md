# Responsive Typography

Auch Text sollte immer entsprechend der Bildschirmgrösse angepasst werden. Ansonsten kann es auf Mobilgeräten schnell sehr unübersichtlich werden.

```CSS
h1 {
  font-size: 2rem;
}

@media (min-width: 1200px) {
  h1 {
    font-size: 4rem;
  }
}
```
