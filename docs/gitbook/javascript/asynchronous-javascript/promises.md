---
icon: handshake-simple
---

# Promises

Ein Promise ist ein Objekt, das als **Platzhalter** für das **zukünftige Ergebnis** einer asynchronen Operation verwendet wird. Ein Beipsiel für ein zukünftiges Ergebnis bspw. die Response von einem AJAX Call.&#x20;

## Lifecycle

Ein Promise geht durch mehrere Status, weshalb wir einen Lifecycle durchlaufen.

<img src="../../.gitbook/assets/file.excalidraw (4).svg" alt="Promise Lifecylcle" class="gitbook-drawing">

{% hint style="info" %}
In unserem Code können wir diese verschiedenen States verarbeiten!
{% endhint %}

## Consuming Promises

Wir können Promises über die `then()`-Methode konsumieren und so die verschiedenen States behandeln.

```javascript
const getCountryData = (country) => {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]));
};

getCountryData('portugal');
```

{% hint style="warning" %}
Die Methode `response.json()` gibt ebenfalls ein Promise zurück, weshalb wir diesen Promise mit einem zweiten `then()` behandeln müssen.
{% endhint %}

### Chaining Promises

Damit wir die Callback Hell verhindern können wir Promises verketten. Das machen wir indem wir den nächsten Promise zurückgeben und danach wieder mit der Methode `then()` behandeln.

```javascript
const getCountryData = (country) => {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, 'neighbour'));
};

getCountryData('portugal');
```

### Rejected Promises

Wir können mit der `catch()`-Methode rejected Promises abfangen.

```javascript
const renderError = (message) => {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

const getCountryData = (country) => {
  fetch(`https://restcountries.com/v2/name/${country}`)
    ...
    .catch((err) => {
      console.error(`🔴 ${err}`);
      renderError(err.message);
    });
};
```

### Throwing errors manually

Wenn der User bspw. Informationen über ein Land will das gar nicht existiert, lautet die Fehlermeldung:

> Cannot read property 'flag' of undefined

Das bringt dem Nutzer nicht gerade viel. Wenn wir aber einen manuellen Fehler werfen, können wir so die Message darin selbst bestimmen.

```javascript
const getJSON = (url, errorMessage = 'Something went wrong') => {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
    return response.json();
  });
};

const getCountryData = (country) => {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then((data) => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found!');

      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then((data) => renderCountry(data, 'neighbour'))
    .catch((err) => {
      console.error(`🔴 ${err}`);
      renderError(err.message);
    });
};
```

Wenn wir manuell einen Fehler werfen, dann wird der Promise sofort rejected und wird dann schlussendlich im `catch()` abgefangen und behandlelt.

### `async`/`await`

Mit `async`/`await` bietet uns JavaScript eine einfachere Möglichkeit mir Promises zu arbeiten.

<pre class="language-javascript"><code class="lang-javascript">const whereAmI = <a data-footnote-ref href="#user-content-fn-1">async</a> () => {
  const {
    coords: { latitude: lat, longitude: lng }
  } = <a data-footnote-ref href="#user-content-fn-2">await</a> getPosition();

  const geoLocationResponse = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&#x26;longitude=${lng}`
  );
  const locationData = await geoLocationResponse.json();

  const countryResponse = await fetch(
    `https://restcountries.com/v2/name/${locationData.countryName}`
  );
  const [countryData] = await countryResponse.json();

  renderCountry(countryData);
};

whereAmI('portugal');
</code></pre>

#### `try`...`catch`

Mit `async`/`await` können wir nicht mehr die `catch()`-Methode nutzen. Deshalb müssen wir hier mit `try`...`catch`-Statements arbeiten.

<pre class="language-javascript"><code class="lang-javascript">const whereAmI = async () => {
  <a data-footnote-ref href="#user-content-fn-3">try</a> {
    ...
    
    const geoLocationResponse = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&#x26;longitude=${lng}`
    );
    if (!geoLocationResponse.ok)
      <a data-footnote-ref href="#user-content-fn-4">throw new Error('Problem getting location data');</a>
      
    ...
    
    const countryResponse = await fetch(
      `https://restcountries.com/v2/name/${locationData.countryName}`
    );
    if (!countryResponse.ok) throw new Error('Problem getting country');

    ...
  } <a data-footnote-ref href="#user-content-fn-5">catch (err)</a> {
    console.error(`🔴 ${err}`);
    renderError(err.message);
  }
};
</code></pre>

#### return-Werte

`async`-Funktionen können natürlich auch `return`-Werte haben. Diese sind aber nur über einen Trick zu erhalten.

```javascript
(async () => {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    console.error(`🔴 ${err}`);
  }
})();
```

Wir nutzen also [IIFE](../funktionen/iife-immediately-invoked-function-expressions.md), um `await` ausführen zu können. So können wir direkt auf die Daten zugreifen.&#x20;

{% hint style="info" %}
Den `try`/`catch`-Teil brauchen wir nur, wenn wir in der asynchronen Funktion den Error wieder werfen:

```javascript
catch (err) {
    console.error(`🔴 ${err}`);
    renderError(err.message);
    throw err;
}
```
{% endhint %}

{% hint style="success" %}
In Modules, kann auch ein top-level `await` genutzt werden, das heisst, man braucht keine IIFE mehr.
{% endhint %}

## Building Promises

```javascript
const lotteryPromise = new Promise((resolve, reject) => {
  console.log('The odds are calculated 🔮');

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You win 💰');
    } else {
      reject(new Error('You lost 💩'));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

```

Über den `Promise`-Constructor können wir einen neuen Promise erstellen. Die Callback-Funktion darin nimmt zwei Funktionen an:

* `resolve`: Markiert den Promise als fullfilled
* `reject`: Markiert den Promise als rejected

Diesen Promise können wir dann ganz normal über die `then()`-Methode konsumieren.

### Promisifying

Das Bauen eigener Promises ist vor allem dann nützlich, wenn wir mit Callbacks arbeiten, z.B. bei der `setTimeout()`-Methode oder mit der Geolocation API. So können wir nämlich der Callback Hell selbst entkommen.

```javascript
const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then((pos) => console.log(pos));
```

## Promises parallel ausführen

Wenn wir einfach nur sturr mehrere `await`s hintereinander ausführen, die aber nicht voneinander abhängig sind, dann verlieren wir kostbare Zeit. Um dies zu umgehen, können wir `Promise.all()` benutzen. Diese Methode führt alle Calls gleichzeitig aus.

```javascript
const getCapitals = async (...countries) => {
  try {
    const data = await Promise.all(
      countries.map((country) =>
        getJSON(`https://restcountries.com/v2/name/${country}`)
      )
    );

    return data.map((country) => country[0].capital);
  } catch (err) {
    console.error(err);
  }
};

(async () => {
  const capitals = await getCapitals('portugal', 'tanzania', 'canada');
  console.log(capitals);
})();
```

[^1]: Die Funktion in welcher wir asynchronen Code haben, muss mit `async` gekennzeichnet werden

[^2]: Mit `await` halten wir die Codeausführung an, bis wir die Daten haben.

[^3]: Gesamte Funktion wird mit `try` abgefangen, da überall Fehler auftreten können

[^4]: Errors können wie gewohnt auch manuell geworfen werden

[^5]: Der `catch`-Block gibt uns Zugriff auf den Fehler, der geworfen wurde.
