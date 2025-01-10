import React from 'react';
import './MovieDetails.css';

const MovieDetails = () => {
  return (
    <div className="movie-details">
      <img 
        src="/lovable-uploads/abc3075e-6e35-4347-8ca4-b443e7cf8f46.png" 
        alt="Spider-Man: Far from Home" 
        className="movie-poster"
      />
      <div className="movie-info">
        <h1>Spider-Man: Far from Home</h1>
        <div className="movie-meta">
          <span>2019</span>
          <span className="dot">•</span>
          <span>PG-13</span>
          <span className="dot">•</span>
          <span>2h 9m</span>
        </div>
        <div className="movie-genre">
          <span>Genre: </span>
          Action, Adventure, Sci-Fi
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;