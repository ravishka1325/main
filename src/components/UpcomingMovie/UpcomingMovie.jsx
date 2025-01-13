import React from 'react';
import './UpcomingMovie.css';

function UpComingMovie() {
    return (
      <div className="container">
      <header className="header">
      </header>
          <div className="upcoming-movie">
              <h2 className="title">Upcoming Movie Bookings</h2>
              <div className="title-line"></div>
              <div className="bookings-list">
                  <div className="booking-card">
                      <div>
                          <div className="movie-title">Spider-Man: Far from Home</div>
                          <div className="cinema">CINEX - Bambalapitiya</div>
                          <div className="date">Fri, 27 Jan</div>
                      </div>
                      <div className="arrow"></div>
                  </div>
                  <div className="booking-card">
                      <div>
                          <div className="movie-title">Spider-Man: Far from Home</div>
                          <div className="cinema">CINEX - Bambalapitiya</div>
                          <div className="date">Fri, 27 Jan</div>
                      </div>
                      <div className="arrow"></div>
                  </div>
                  <div className="booking-card">
                      <div>
                          <div className="movie-title">Spider-Man: Far from Home</div>
                          <div className="cinema">CINEX - Bambalapitiya</div>
                          <div className="date">Fri, 27 Jan</div>
                      </div>
                      <div className="arrow"></div>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default UpComingMovie;
