# Mit Klassen arbeiten

<show-structure depth="2" />

Wir haben oft Klassen wie `hidden`, die etwas vor dem Benutzer verbergen, bis ein Ereignis wie ein Button-Klick eintritt. Um nun eine Klasse aus einem
Element zu entfernen, können wir die Eigenschaft `classList` verwenden.

Diese Eigenschaft hat Methoden wie `add`, `remove` oder `toggle`.

## Klasse hinzufügen

Um eine Klasse hinzuzufügen, benutzen wir die Methode `add`:

````Javascript
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
````

## Klasse entfernen

Um eine Klasse zu entfernen, benutzen wir `remove`:

````Javascript
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
````

## Klasse umschalten

Um eine Klasse umzuschalten, d.h., bspw. wenn die Klasse `visible` gesetzt ist, entfernen, ansonsten hinzufügen, benutzen wir `toggle`:

````Javascript
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
````

## Element auf Klasse überprüfen

Mit der Methode `contains` können wir überprüfen, ob ein Element eine Klasse hat oder nicht.

````Javascript
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
````