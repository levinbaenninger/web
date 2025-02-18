---
icon: arrows-rotate-reverse
---

# AJAX

Mit AJAX können wir HTTP-Requests an einen Web-Server senden, um nach bestimmten Daten zu fragen, Daten zu senden, etc. Der Server gibt uns dann in Form einer Response diese Daten zurück.

{% hint style="info" %}
Diese Request geschehen alle asynchron im Hintergrund, da es einen Moment braucht bis wir die Daten vom Server haben.
{% endhint %}

## API

API steht für **A**pplication **P**rogramming **I**nterface und ist ein Stück Software, welches von anderer Software benutzt werden kann, damit Applikationen **miteinander kommunizieren** können.

Es gibt viele verschiedene Arten von APIs:

* DOM API
* Geolocation API
* ...

Es gibt aber auch Web APIs. Diese laufen auf einem Server, welcher Requests bekommt und Responses zurücksendet.&#x20;

Diese APIs können wir in unserem Frontend nutzen, um Interaktion und Austausch mit einem Backend erzielen. Wir können unsere eigene API programmieren oder eine der tausenden 3rd Party APIs nutzen.&#x20;

* [Weather API](https://openweathermap.org/api)
* [Country API](https://restcountries.com/)
* [Flight Data API](https://aviationstack.com/)
* [Currency Conversion API](https://fixer.io/)
* [API for sending email](https://sendgrid.com/en-us/solutions/email-api)
* ...

## `XMLHttpRequest`

Mit AJAX können wir einen `XMLHttpRequest` erstellen, und dann mit einem Event-Listener auf die Daten warten.&#x20;

{% hint style="info" %}
HTTP-Requests sollten nicht mehr mit `XMLHttpRequest` gemacht werden, da es veraltet ist.
{% endhint %}

```javascript
const getCountryData = (country) => {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', () => {
    const [data] = JSON.parse(request.responseText);

    const html = `
      <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million people</p>
          <p class="country__row"><span>🗣️</span>${data.languages.map((lang) => lang.name).join(', ')}</p>
          <p class="country__row"><span>💰</span>${data.currencies.map((curr) => curr.name).join(', ')}</p>
        </div>
      </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');

```

## Callback Hell

Wenn wir nun abhängig vom ersten Resultat bspw. das Nachbarsland anzeigen wollen, müssen wir das Nachbarsland innerhalb des Callbacks des ersten Requests. Wenn wir das nun einige Male machen müssen sind wir in der **Callback Hell**.

```javascript
const getCountryAndNeighbour = (country) => {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', () => {
    const [data] = JSON.parse(request.responseText);
    renderCountry(data);

    const neighbour = data.borders?.[0];
    if (!neighbour) return;

    const requestNeighbour = new XMLHttpRequest();
    requestNeighbour.open(
      'GET',
      `https://restcountries.com/v2/alpha/${neighbour}`
    );
    requestNeighbour.send();

    requestNeighbour.addEventListener('load', () => {
      const dataNeighbour = JSON.parse(requestNeighbour.responseText);
      renderCountry(dataNeighbour, 'neighbour');
    });
  });
};
```

Das Problem mit Callback Hell ist, dass wir die Übersicht verlieren, dadurch wird der Code schwierig zu warten und zu bearbeiten.

{% hint style="success" %}
Callback Hell wurde in ES6 mit [**Promises**](promises.md) gelöst.
{% endhint %}
