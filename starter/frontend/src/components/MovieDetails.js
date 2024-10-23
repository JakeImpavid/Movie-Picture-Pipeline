import React from 'react';

export default function MovieDetails({ movie }) {
  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>Release Year: {movie.year}</p>
      {/* Additional details about the movie can be added here */}
    </div>
  );
}
