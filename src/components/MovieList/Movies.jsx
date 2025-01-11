import React, { useState } from 'react';
import '../MovieList/Movies.css'


const movies = [
  {
    id: 1,
    title: "Gladiator II",
    duration: "2h 30min",
    releaseDate: "14 Nov 2024",
    status: "Now Showing",
    description: "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
    posterUrl: "https://static.toiimg.com/photo/90355881.cms" 
  },
  {
    id: 2,
    title: " II",
    duration: "2h 30min",
    releaseDate: "14 Nov 2024",
    status: "Now Showing",
    description: "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
    posterUrl: "https://static.toiimg.com/photo/90355881.cms" 
  },
  {
    id: 3,
    title: "Gladiator II",
    duration: "2h 30min",
    releaseDate: "14 Nov 2024",
    status: "Coming Soon",
    description: "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
    posterUrl: "https://resizing.flixster.com/c7fcjCvkHP4wiDlEdVRusMXCOws=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzAzOWI1YzkwLTNiODAtNDNmYy05MTA1LTViZjg4ZTgyYTc1MC5qcGc=" 
  },
  {
    id: 4,
    title: "Gladiator II",
    duration: "2h 30min",
    releaseDate: "14 Nov 2024",
    status: "Coming Soon",
    description: "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
    posterUrl: "https://upload.wikimedia.org/wikipedia/id/f/f7/Poster_Thaghut.jpg" 
  },
  {
    id: 5,
    title: "Gladiator II",
    duration: "2h 30min",
    releaseDate: "14 Nov 2024",
    status: "Now Showing",
    description: "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
    posterUrl: "https://upload.wikimedia.org/wikipedia/id/f/f7/Poster_Thaghut.jpg" 
  },
  {
    id: 6,
    title: "Gladiator II",
    duration: "2h 30min",
    releaseDate: "14 Nov 2024",
    status: "Coming Soon",
    description: "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
    posterUrl: "https://upload.wikimedia.org/wikipedia/id/f/f7/Poster_Thaghut.jpg" 
  },
  {
    id: 7,
    title: "Gladiator II",
    duration: "2h 30min",
    releaseDate: "14 Nov 2024",
    status: "Now Showing",
    description: "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
    posterUrl: "https://upload.wikimedia.org/wikipedia/id/f/f7/Poster_Thaghut.jpg" 
  },
  {
    id: 8,
    title: "Gladiator II",
    duration: "2h 30min",
    releaseDate: "14 Nov 2024",
    status: "Coming Soon",
    description: "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
    posterUrl: "https://upload.wikimedia.org/wikipedia/id/f/f7/Poster_Thaghut.jpg" 
  },
];

const Movies = () => {
  const [filter, setFilter] = useState("Now Showing");

  const filteredMovies = movies.filter(movie => movie.status === filter);

  return (
    <div className="app">
      <div className="titleandfilters">
      <h1 className="title">Movies</h1>
        <div className="filter-buttons">
          <button onClick={() => setFilter("Now Showing")}>Now Showing</button>
          <button onClick={() => setFilter("Coming Soon")}>Coming Soon</button>
        </div>
      </div>

      <div className="movies-list">
        {filteredMovies.map(movie => (
          <div key={movie.id} className="movie-card-m">
            <img src={movie.posterUrl} alt={movie.title} className="movie-poster-m" />
            <div className="movie-info-m">
              <h2>{movie.title}</h2>
              <p>{movie.duration} | {movie.releaseDate}</p>
              <p>{movie.description}</p>
              <div className="moviel-btns">
                <button>View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;