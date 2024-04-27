# flex-grow

Dieses Property definiert die Fähigkeit eines Elements zu wachsen, wenn nötig. Es akzeptiert einen einheitslosen Wert welcher als Proportion dient.

![](flex-grow.png) { width="300" }

````CSS
.item {
  flex-grow: 4; /* default 0 */
}
````

## Beispiel

Wenn für alle Elemente `flex-grow` auf `1` eingestellt ist, wird der verbleibende Platz im Container gleichmäßig auf alle Children verteilt. Wenn
eines der untergeordneten Elemente den Wert `2` hat, nimmt dieses Element doppelt so viel Platz ein wie eines der anderen (oder es versucht es
zumindest).

