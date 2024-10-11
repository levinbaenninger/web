# find-Methode

Mit der `find()`-Methode können wir ein Element eines Arrays finden, welches eine bestimmte Kondition erfüllt.

So können wir zum Beispiel einen bestimmten Account mit einem Nutzernamen finden:

````Javascript
currentAccount = accounts.find(
    (account) => account.username === inputLoginUsername.value
);
````

Zurück bekommen wir den ersten Account, der mit der Kondition übereinstimmt, hier den angegebenen Nutzernamen übereinstimmt.