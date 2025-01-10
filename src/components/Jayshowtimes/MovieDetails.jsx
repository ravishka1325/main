import React from 'react';
import './MovieDetails.css';

const MovieDetails = () => {
  return (
    <div className="movie-details">
      <img 
        src="https://resizing.flixster.com/Z_sVCiKKoq71XF9N70SUjQjLqys=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNkZjkxYWVjLTdkMzktNGQ3Yy1iMzljLTM4NWI0MTFmZjM0Zi5qcGc=" 
        alt="Spider-Man: Far from Home" 
        className="movie-poster"
      />

      <div className="movie-info">
        <h1>Hi Nanna</h1>
        <div className="movie-meta">
          <span>2023</span>
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