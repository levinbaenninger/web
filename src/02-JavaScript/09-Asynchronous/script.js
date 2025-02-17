'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imagesContainer = document.querySelector('.images');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
const renderCountry = (data, className = '') => {
  const html = `
      <article class="country ${className}">
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
};

/* const getCountryAndNeighbour = (country) => {
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

getCountryAndNeighbour('france'); */

const renderError = (message) => {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

const getJSON = (url, errorMessage = 'Something went wrong') => {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
    return response.json();
  });
};

/* const getCountryData = (country) => {
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

btn.addEventListener('click', () => {
  getCountryData('australia');
});

// Challenge #1
const whereAmI = (lat, lng) => {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
    .then((response) => {
      if (!response.ok)
        throw new Error(`Problem with geocoding: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      const { countryName: country, city } = data;
      console.info(`You're in ${city}, ${country}`);

      return fetch(`https://restcountries.com/v2/name/${country}`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `Problem with fetching country infos: ${response.status}`
        );
      return response.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`🔴 ${err}`));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

// Building Promises
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
  .catch((err) => console.error(err)); */

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

/* getPosition().then((pos) => console.log(pos));

// Challenge 2
const createImage = (imgPath) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imagesContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Error while loading the image'));
    });
  });
};

const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

let currentImage;

createImage('./img/img-1.jpg')
  .then((img) => {
    currentImage = img;
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then((img) => {
    currentImage = img;
    return wait(2);
  })
  .then(() => (currentImage.style.display = 'none'))
  .catch((err) => console.error(`🔴 ${err}`));

const whereAmI = async () => {
  try {
    const {
      coords: { latitude: lat, longitude: lng }
    } = await getPosition();

    const geoLocationResponse = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );
    if (!geoLocationResponse.ok)
      throw new Error('Problem getting location data');

    const locationData = await geoLocationResponse.json();

    const countryResponse = await fetch(
      `https://restcountries.com/v2/name/${locationData.countryName}`
    );
    if (!countryResponse.ok) throw new Error('Problem getting country');

    const [countryData] = await countryResponse.json();

    renderCountry(countryData);

    return locationData.city;
  } catch (err) {
    console.error(`🔴 ${err}`);
    renderError(err.message);
    throw err;
  }
};

(async () => {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    console.error(`🔴 ${err}`);
  }
})(); */

/* const getCapitals = async (...countries) => {
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

// Challenge 3
const createImage = (imgPath) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imagesContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Error while loading the image'));
    });
  });
};

const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const loadAndPause = async () => {
  try {
    const img1 = await createImage('./img/img-1.jpg');
    await wait(2);

    img1.style.display = 'none';
    const img2 = await createImage('./img/img-2.jpg');
    await wait(2);

    img2.style.display = 'none';
  } catch (err) {
    console.error(`🔴 ${err}`);
  }
};

loadAndPause();

const loadAll = async (images) => {
  const imgs = images.map(async (image) => await createImage(image));

  const imageElements = await Promise.all(imgs);
  imageElements.forEach((el) => el.classList.add('parallel'));
};

loadAll(['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg']); */
