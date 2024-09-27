# Type Aliasse

Mit TypeScript können wir unsere eigenen Typen erstellen. So verhindern wir ganz einfach redundanten Code.

```Typescript
type LoadingLocationState = {
  state: 'Loading';
};

type SuccessLocationState = {
  state: 'Success';
  coords: { lat: number; lon: number };
};

type ErrorLocationState = {
  state: 'Error';
  error: { message: string };
};

type LocationState = LoadingLocationState | SuccessLocationState | ErrorLocationState;

const printLocation = (location: LocationState) => {
  switch (location.state) {
    case "Loading":
      console.log(location.state);
      break;
    case "Success":
      console.log(location.coords.lat, location.coords.lon);
      break;
    case "Error":
      console.log(location.error.message);
      break;
  }
};
```
