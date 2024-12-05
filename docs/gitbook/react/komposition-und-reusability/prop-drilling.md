---
icon: oil-well
---

# Prop Drilling

**Prop Drilling** ist der Prozess, bei dem Daten oder Zustände durch mehrere Ebenen einer Komponenten-Hierarchie weitergegeben werden. Es bezieht sich auf die Praxis, Daten von einer Elternkomponente an ihre Kinder und dann von den Kindern an deren eigene Kinder und so weiter weiterzugeben, bis die Daten die gewünschte Komponente erreichen, die sie benötigt.

Obwohl Prop Drilling eine notwendige und effektive Methode sein kann, um den Anwendungszustand zu verwalten, kann es auch problematisch werden, wenn die Komponenten-Hierarchie zu tief oder komplex wird. Dies kann zu mehreren Problemen führen, wie zum Beispiel Code-Duplizierung, erhöhtem kognitiven Aufwand und verminderter Wartbarkeit.

## Beispiel

<pre class="language-jsx"><code class="lang-jsx">export function App() {
  const [movies, setMovies] = useState(moviesData);

  return (
    &#x3C;>
      &#x3C;NavBar movies={movies} />
      &#x3C;main className="main">
        &#x3C;MovieBox movies={movies} />
        ...
      &#x3C;/main>
    &#x3C;/>
  );
}

const MovieBox = (<a data-footnote-ref href="#user-content-fn-1">{ movies }</a>) => {
  ...

  return (
    &#x3C;div className="box">
      ...
      {isOpen &#x26;&#x26; &#x3C;MovieList movies={movies} />}
    &#x3C;/div>
  );
};

const MovieList = ({ movies }) => {
  return (
    &#x3C;ul className="list">
      {movies?.map((movie) => (
        &#x3C;Movie movie={movie} key={movie.imdbID} />
      ))}
    &#x3C;/ul>
  );
}
</code></pre>

[^1]: Die Props die von der `App`-Komponenten kommen sind gar nicht für die `MovieBox`-Komponente bestimmt, sondern für die `MovieList`-Component. Sie dient also nur als Man-in-the-Middle für die Kommunikation
