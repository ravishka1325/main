import React from 'react';
import './BookingConfirm.css';

function BookingConfirmation() {
  return (
    <div className="booking-container">
      
      <header className="header">
        
      </header>

      <div className="booking-content">
        <h1 className="booking-heading">BOOKING SUCCESSFUL</h1>

        <div className="movie-info">
          <h2 className="movie-title">Spider-Man: Far from Home</h2>
          <p>CINEX - Bambalapitiya</p>
        </div>

        <div className="ticket-details">
          <p><span className="label">Ticket No:</span> WMGH8LK</p>
          <p><span className="label">Tickets:</span> 4</p>
          <p><span className="label">Screen:</span> 02</p>
          <p><span className="label">Seats:</span> C3, C5, E5, F1</p>
          <p><span className="label">Date:</span> Fri, 27 Jan</p>
          <p><span className="label">Time:</span> 9:00 AM</p>
          <p><span className="label">Total Amount:</span> Rs. 4643</p>
        </div>

        <div className="customer-info">
          <p><span className="label">Customer Name:</span> Kisara Sandes</p>
          <p><span className="label">Customer Mobile:</span> 0789200730</p>
          <p><span className="label">Customer Email:</span> kisarasandes22@gmail.com</p>
        </div>

        <p className="note">
          Note: All sales are final and there will be no refunds, cancellations and or
          amendments to the confirmed and finalized bookings.
        </p>
      </div>
      
    </div>
  );
}

export default BookingConfirmation;