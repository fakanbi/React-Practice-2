import React, { useState } from "react";
import movieData from "./movies.json";
import "./MovieCatalog.css";

function MovieCatalog() {
  const [movies, setMovies] = useState(movieData.movies);
  const [expandedMovieId, setExpandedMovieId] = useState(null);

  // This is in the useState portion with the first const and the data from the JSON file

  const toggleWatchLater = (movieId) => {
    setMovies((theMovies) =>
      theMovies.map((movies) =>
        movies.id === movieID
          ? { ...movies, watchLater: !movies.watchLater }
          : movies
      )
    );
  };
  // This makes a varible theMovies and maps it a map that goes through and finds
  // the right movie in the object movies and updates the value
  // If the movie is found then it makes a copy of the movie object and updates the value of watchLater

  const toggleMovieDetails = (movieId) => {
    // TODO: Implement show/hide details
    // Okay this means that when one description is showing then the others should be hidden
    setExpandedMovieId((prevID) => (prevID === movieId ? null : movieId));
  };

  // Group movies by genre
  const genres = [...new Set(movies.map((movie) => movie.genre))];
  const moviesByGenre = {};
  genres.forEach((genre) => {
    moviesByGenre[genre] = movies.filter((movies) => movies.genre === genre);
  });
  console.log(moviesByGenre);
  // TODO: Implement grouping logic
  // display like genres together

  return (
    <div className="movie-catalog">
      <h1>Movie Catalog</h1>
      {Object.entries(moviesByGenre).map(([genre, moviesInGenre]) => (
        <div key={genre} className="genre-section">
          <h2 className="genre-title">{genre}</h2>
          <div className="movie-card">
            {moviesInGenre.map((movie) => (
              <div className="">
                <h4 className="movie-title">{movie.title}</h4>
                <p className="movie-meta">Directed by: {movie.director}</p>
                <p className="movie-meta">Year: {movie.year}</p>
                <p className="movie-rating">Rating: {movie.rating}</p>
                <p className="movie-description">{movie.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* Each genre should be a section */}
      {/* Each movie should show basic info and expand to show details when clicked */}
      {/* Include watch later toggle button for each movie */}
    </div>
  );
}

export default MovieCatalog;
