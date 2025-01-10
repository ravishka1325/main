import React from 'react';
import Header from '../../src/components/Yokis/Header';
import Breadcrumb from '../../src/components/Jayshowtimes/Breadcrumb';
import MovieDetails from '../../src/components/Jayshowtimes/MovieDetails';
import ShowtimeSelector from '../../src/components/Jayshowtimes/ShowtimeSelector';
import '../css/MovieBooking.css';

const MovieBooking = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Breadcrumb />
        <MovieDetails />
        <ShowtimeSelector />
      </div>
    </div>
  );
};

export default MovieBooking;