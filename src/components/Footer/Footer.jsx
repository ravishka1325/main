import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">CINEX</div>

        <div className="footer-links">
          <div className="footer-section">
            <a href="/">Home</a>
            <a href="/movies">Movies</a>
            <a href="/about">About CINEX</a>
            <a href="/contact">Contact Us</a>
          </div>

          <div className="footer-section">
            <a href="/faq">FAQ</a>
            <a href="/terms">Terms of Use</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>

        <div className="footer-social">
          <p>FOLLOW US</p>
          <div className="social-icons">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">in</a>
            <a href="#" className="social-icon">x</a>
            <a href="#" className="social-icon">tik</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>Copyright © Cinex 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;