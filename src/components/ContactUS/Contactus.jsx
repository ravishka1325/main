import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="tel: XXX XXX XXXX" required />
        <textarea placeholder="Your Message Here..." required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
