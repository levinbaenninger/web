---
icon: group-arrows-rotate
description: >-
  Hier lernst du alles rund um Promises, async/await, AJAX, den Event-Loop und
  mehr.
---

# Asynchronous JavaScript

## Synchron vs. Asynchron

<details>

<summary>Synchroner Code</summary>

* Grossteil des Codes ist synchron
* Synchroner Code wird Zeile für Zeile ausgeführt
* Jede Codezeile wartet, bis die vorherige Zeile beendet ist

**Problem:** Langlaufende Operationen blockieren die Ausführung!&#x20;

```javascript
const p = document.querySelector('p');
p.textContent = 'My name is Levin!';
alert('Text was edited!');
p.style.color = 'red';
```

Hier blockiert der `alert` die Codeausführung und die Seite funktioniert nicht, bis der User mit dem Alert interagiert.

</details>

<details>

<summary>Asynchroner Code</summary>

* Asynchroner Code wird ausgeführt, nachdem ein Task, die im "Hintergrund" läuft, beendet ist
* Asynchroner Code ist nicht-blockierend
* Die Ausführung wartet nicht darauf, dass ein asynchroner Task seine Arbeit beendet

```javascript
const p = document.querySelector('p');
setTimeout(() => {
  p.textcontent = 'My name is Levin!';
}, 5000);
p.style.color = 'red';
```

Der Time läuft asynchron ab, das heisst die Textfarbe wird rot obwohl der Timer eigentlich die Ausführung stoppt. Der Timer wird jedoch im Hintergrund ausgeführt, dann nach 5 Sekunden wird die Callback-Funktion darin aufgerufen.

</details>

{% content-ref url="ajax.md" %}
[ajax.md](ajax.md)
{% endcontent-ref %}

{% content-ref url="promises.md" %}
[promises.md](promises.md)
{% endcontent-ref %}



