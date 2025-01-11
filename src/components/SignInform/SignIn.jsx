import React, { useState } from "react";
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here (e.g., API call)
    console.log("Signed in with:", email, password);
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <h1>CINEX</h1>
        <h2>Sign into Cinex</h2>
        <form className="signin-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign in</button>
        </form>
        <div className="help-links">
          <p>Having Trouble in?</p>
          <a href="/reset-password">Reset Password</a> or{" "}
          <a href="/RegistrationForm">Sign UP</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
