import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-text">CINEX</span>
          </Link>

          {/* Navigation Links - Hidden on mobile */}
          <div className="nav-links">
            <NavLink href="/" active>Home</NavLink>
            <NavLink href="/movies">Movies</NavLink>
            <NavLink href="/offers">Offers & Promotions</NavLink>
            <NavLink href="/about">About Us</NavLink>
          </div>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            <button className="login-button">
              LOGIN
            </button>
            <button className="signup-button">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Helper component for navigation links
const NavLink = ({ href, children, active = false }) => {
  return (
    <Link
      to={href}
      className={`nav-link ${active ? 'active' : ''}`}
    >
      {children}
    </Link>
  );
};

export default Navbar;