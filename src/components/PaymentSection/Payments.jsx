import React from 'react';
import { useLocation } from 'react-router-dom';
import PromoCode from './PromoCode.jsx';
import PaymentMethod from './PaymentMethod.jsx'; 
import UserDetails from './UserDetails.jsx';
import './PaymentMethod.css';

const Payments = () => {
  const location = useLocation();
  const { selectedSeats, totalPrice, selectedDate, selectedTime } = location.state || {};

  return (
    <div className="payment-page">
      <div className="payment-container">
        <nav className="nav">
          <span>Home {'>'} Payment</span>
        </nav>

        {/* Display order summary with data from SeatSelection */}
        <div className="section">
          <h1 className="title">Spider-Man: Far from Home</h1>
          <p>
            Date: {selectedDate} | Time: {selectedTime}
          </p>
          <p>Selected Seats: {selectedSeats ? selectedSeats.join(', ') : 'No seats selected'}</p>
          <div className="summary-row summary-total">
            <span>Total</span>
            <span>Rs. {totalPrice}</span>
          </div>
        </div>

        <PromoCode />
        <PaymentMethod />
        <UserDetails />

        <div className="actions">
          <button className="button button-primary">Pay Now</button>
          <button className="button button-secondary">Back</button>
        </div>
      </div>
    </div>
  );
};

export default Payments;
