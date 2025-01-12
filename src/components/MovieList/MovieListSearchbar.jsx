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
    <div className="Searchbar-container">
      <div className="m-search-bar">
        <input
          type="text"
          placeholder="Search Movies"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="search-input-m"
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
        <button onClick={handleApply} className="apply-button">
          APPLY
        </button>
      </div>
    </div>
  );
};

export default MovieListSearchBar;