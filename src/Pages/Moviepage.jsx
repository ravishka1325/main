import React from 'react';
import '../components/MovieList/Movies.css';
import MovieListSearchBar from '../components/MovieList/MovieListSearchbar';
import Movies from '../components/MovieList/Movies';


const Moviepage = () => {
  return (
    <div>
      <MovieListSearchBar/>
      <Movies/>
    </div>
  );
};

export default Moviepage;