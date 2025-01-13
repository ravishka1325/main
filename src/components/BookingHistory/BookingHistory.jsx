import React from 'react';
import './BookingHistory.css'

function BookingHistoryP() {
    return (
      <div className="bkh-body">
            <div className="bkh-container">
                <div className="bkh-booking-history">
                    <h2 className="bkh-title">Movie Booking History</h2>
                    <div className="bkh-title-line"></div>
                    <div className="bkh-bookings-list">
                        <div className="bkh-booking-card">
                            <div>
                                <div className="bkh-movie-title">Spider-Man: Far from Home</div>
                                <div className="bkh-cinema">CINEX - Bambalapitiya</div>
                                <div className="bkh-date">Fri, 27 Jan</div>
                            </div>
                            <div className="bkh-arrow"></div>
                        </div>
                        <div className="bkh-booking-card">
                            <div>
                                <div className="bkh-movie-title">Spider-Man: Far from Home</div>
                                <div className="bkh-cinema">CINEX - Bambalapitiya</div>
                                <div className="bkh-date">Fri, 27 Jan</div>
                            </div>
                            <div className="bkh-arrow"></div>
                        </div>
                        <div className="bkh-booking-card">
                            <div>
                                <div className="bkh-movie-title">Spider-Man: Far from Home</div>
                                <div className="bkh-cinema">CINEX - Bambalapitiya</div>
                                <div className="bkh-date">Fri, 27 Jan</div>
                            </div>
                            
                            <div className="bkh-arrow"></div>
                        </div>
                        <div className="bkh-booking-card">
                            <div>
                                <div className="bkh-movie-title">Spider-Man: Far from Home</div>
                                <div className="bkh-cinema">CINEX - Bambalapitiya</div>
                                <div className="bkh-date">Fri, 27 Jan</div>
                            </div>
                            <div className="bkh-arrow"></div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default BookingHistoryP;