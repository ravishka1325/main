import React from 'react';
import './Contactus.css';

const ContactUS = () => {
  return (
    <div className="contactus-form">
        <div className="form-container">
        <h2>Contact Us</h2>
            <form>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Phone" required />
                <textarea placeholder="Your Message Here..." required></textarea>
                <div className="cusbtn">
                    <button className='button-cus' type="submit">Send</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default ContactUS;
