---
icon: keyboard
---

# Events und Event Listener

Mit Events können wir unsere Anwendung dazu bringen, tatsächlich etwas zu tun, wenn wir zum Beispiel auf einen Button klicken.

Dafür müssen wir einen Event-Listener verwenden. Ein Event ist etwas, das auf der Seite passiert, zum Beispiel ein Mausklick, eine Mausbewegung oder ein Tastendruck. Mit einem Event-Listener können wir warten, bis ein bestimmtes Event eintritt, und dann darauf reagieren.

## Click Events

Mit Click Events können wir auf Mausklicks hören und so setzen wir das um:

{% stepper %}
{% step %}
### Element auswählen

<pre class="language-javascript"><code class="lang-javascript"><strong>const checkBtn = document.querySelector('.check');
</strong></code></pre>
{% endstep %}

{% step %}
### Event-Listener hinzufügen

```javascript
checkBtn.addEventListener('click', () => {
  console.log(document.querySelector('.guess').value);
})
```
{% endstep %}
{% endstepper %}

## Keypress Events

Um auf Keypress Events zu hören, müssen wir immer noch `addEventListener` verwenden, weil es nur eine andere Art von Ereignis ist.

Keyboard-Events sind sogenannte globale Events, weil sie nicht an einem bestimmten Element auftreten. Bei globalen Events hören wir normalerweise auf das gesamte Dokument. Dazu fügen wir den Event-Listener zum `document` hinzu.

Jeder Tastendruck erzeugt ein Objekt mit einigen Informationen, wie z.B. die Taste, die gedrückt wurde, etc. Wir können auf dieses Objekt zugreifen, indem wir einen Parameter in der Funktion des Event-Listeners übergeben.

Nachdem wir all das getan haben, können wir prüfen, ob die eingegebene Taste gleich, z.B. Escape ist und dann können wir sagen, dass die Klasse `hidden` hinzugefügt werden sollen.

```javascript
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
  }
});
```

