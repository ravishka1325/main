import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
        <div className="logo">
        <span className="logo-text">CINEX</span>
        </div>

          <div className="nav-links">
            <NavLink href="/" >Home</NavLink>
            <NavLink href="/movies">Movies</NavLink>
            <NavLink href="/offers">Offers & Promotions</NavLink>
            <NavLink href="/">Contact Us</NavLink>
          </div>

          <div className="auth-buttons">
          <Link to="/RegistrationForm">
            <button className="login-button">LOGIN</button>
          </Link>
          <Link to="/Signup">
            <button className="signup-button">SIGN UP</button>
          </Link>
        </div>
        </div>
      </div>
    </nav>
  );
};

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