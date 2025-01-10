import { Link, useLocation } from "react-router-dom";
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
            <NavLink href="/">Home</NavLink>
            <NavLink href="/Moviepage">Movies</NavLink>
            <NavLink href="/offers">Offers & Promotions</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
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

const NavLink = ({ href, children }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={`nav-link ${isActive ? "active" : ""}`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
