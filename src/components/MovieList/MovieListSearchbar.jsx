import React, { useState } from 'react';
import '../MovieList/MovieListSearchbar.css'

const MovieListSearchBar = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [secondSearch, setSecondSearch] = useState('');

  const handleApply = () => {
    console.log('Apply clicked:', searchTitle, genre, secondSearch);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Movies"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        className="search-input"
      />
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="genre-select"
      >
        <option value="">Genre</option>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
        {/* Add more genres as needed */}
      </select>
      <select
        value={secondSearch}
        onChange={(e) => setSecondSearch(e.target.value)}
        className="second-search-select"
      >
        <option value="">Search Movies</option>
        <option value="movie1">Movie 1</option>
        <option value="movie2">Movie 2</option>
        <option value="movie3">Movie 3</option>
        {/* Add more options as needed */}
      </select>
      <button onClick={handleApply} className="apply-button">
        APPLY
      </button>
    </div>
  );
};

export default MovieListSearchBar;