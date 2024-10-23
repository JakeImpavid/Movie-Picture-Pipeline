// src/components/MovieList.js
import React, { useState, useEffect } from 'react';

const moviesData = [
  { id: 1, title: 'Inception', year: 2010 },
  { id: 2, title: 'Interstellar', year: 2014 },
  { id: 3, title: 'The Dark Knight', year: 2008 },
];

export default function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Simulate API call
    setMovies(moviesData); // In reality, you would fetch this from an API
  }, []);

  return (
    <div className="movie-list">
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} onClick={() => onMovieClick(movie)}>
            {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  );
}
