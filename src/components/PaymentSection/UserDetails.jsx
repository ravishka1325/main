const UserDetails = () => {
    return (
      <div className="section">
        <h2 className="title">YOUR DETAILS</h2>
        <p className="subtitle">Fills Your Details</p>
        <div>
          <input type="text" placeholder="First Name & Last Name" className="input" />
          <input type="tel" placeholder="Mobile Number" className="input" />
          <input type="email" placeholder="Email Address" className="input" />
          <div className="checkbox-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to the <a href="#" className="terms-link">Terms and Conditions</a>
            </label>
          </div>
        </div>
      </div>
    );
  };
  export default UserDetails;