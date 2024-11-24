# Prop Drilling

Prop Drilling passiert dann, wenn wir einen State heben müssen und die Props dann tief nach unten weitergeben müssen über Props. Zum Beispiel 
brauchen wir sowohl in der Navigation in der `NumOfResults`-Komponente den `movies`-State als auch in der Liste der Filme, die jedoch tief 
geschachtelt ist:

````Typescript
export function App() {
  const [movies, setMovies] = useState(moviesData);

  return (
    <>
      <NavBar movies={movies} />
      <main className="main">
        <MovieBox movies={movies} />
        ...
      </main>
    </>
  );
}

const MovieBox = ({ movies }: MovieBoxProps) => {
  ...

  return (
    <div className="box">
      ...
      {isOpen && <MovieList movies={movies} />}
    </div>
  );
};

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};
````

In diesem Beispiel geben wir also den `movies-State` durch eine Komponente durch, die den State eigentlich nur weitergibt und gar nicht braucht.