import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <>
      <div className="App">
        <section className="movie-list-section">
          {/* Render Movie Lists Here */}
          <h1>Movie List Section</h1>
          {movies.map((movie, index) => (
            <div key={index} className="movie-card">
              <h2>{movie.title}</h2>
              <p>Year: {movie.year}</p>
              <p>Runtime: {movie.runtime}</p>
              <p>Director: {movie.director}</p>
              <p>Genres: {movie.genres.join(", ")}</p>
              <p>IMDb Rating: {movie.imdbRating}</p>
              <p>IMDb Votes: {movie.imdbVotes}</p>
              <img src={movie.image} alt={movie.title} />
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
