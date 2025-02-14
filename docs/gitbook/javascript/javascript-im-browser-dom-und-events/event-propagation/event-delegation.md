---
icon: share
---

# Event Delegation

Bei der Event Delegation machen wir uns die Eigenschaften von [Event Propagation](./) zu nutzen, genauer gesagt der [Bubbling Phase](./#bubbling-phase-1).

Event Delegation benutzen wir dann, wenn wir auf vielen Elementen den gleichen Event-Listener erstellen müssen.&#x20;

{% stepper %}
{% step %}
### Gemeinsames Parent-Element suchen

Zuerst sucht man das gemeinsame Parent-Element. Auf diesem erstellt man dann einen Event-Listener.
{% endstep %}

{% step %}
### Matching Strategy erstellen

In der Callback-Funktion muss man dann eine Matching Strategy erstellen, damit dieser Event-Listener nur ausgeführt wird, wenn auch wirklich mit dem gewollten Element interagiert wird.
{% endstep %}
{% endstepper %}

## Beispiel

```javascript
document.querySelector('.nav__links').addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
```

