# Keypress Events

<show-structure depth="2" />

Um auf Tastendruck-Ereignisse zu hören, müssen wir immer noch `addEventListener` verwenden, weil es nur eine andere Art von Ereignis ist.

Tastaturereignisse sind sogenannte globale Ereignisse, weil sie nicht an einem bestimmten Element auftreten. Bei globalen Ereignissen hören wir
normalerweise auf das gesamte
Dokument. Dazu fügen wir den Ereignis-Listener zum `document` hinzu.

Jeder Tastendruck erzeugt ein Objekt mit einigen Informationen, wie z.B. die Taste, die gedrückt wurde, etc. Wir können auf dieses Objekt zugreifen,
indem wir einen Parameter in der Funktion des Event-Listeners übergeben.

After we’ve done all that we can check if the typed key equals, for example `Escape` and then we can say it should add the classes `hidden`.

````Javascript
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
  }
});
````