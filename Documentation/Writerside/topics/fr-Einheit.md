# fr Einheit

Wenn man mit dem Grid arbeitet, wird man sehr oft die **fractional units** benutzen. Sie bedeuten im Wesentlichen „Teil des verbleibenden Raums“.
Also eine Deklaration wie diese:

````CSS
grid-template-columns: 1fr 3fr;
````

heisst, 25% und 75%. Der Vorteil von `fr` gegenüber Prozenten ist, dass, wenn man bspw. eine Margin hinzufügt, die 100% Breite überschreitet.
Zudem sind sie weitaus freundliche in Kombination mit anderen Einheiten:

````CSS
grid-template-columns: 50px min-content 1fr;
````

