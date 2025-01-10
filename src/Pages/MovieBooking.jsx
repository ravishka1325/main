import React from 'react';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import MovieDetails from '../components/MovieDetails';
import ShowtimeSelector from '../components/ShowtimeSelector';
import './MovieBooking.css';

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