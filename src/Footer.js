
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <nav className="footer-nav">
          <a href="/home">Home</a>
          <a href="/bookings">Bookings</a>
          <a href="/about">About</a>
          <a href="/contact">Contact Us</a>

        </nav>

        <p > London <br /> United Kingdom</p>

      </div>

      {/* Contact Form */}
      <form className="footer-form">
        <h2>Contact us</h2>
        <div className="form-row">
          <input type="text" placeholder="full name" />
          <input type="email" placeholder="e-mail" />
          <input type="tel" placeholder="phone" />
        </div>
        <textarea placeholder="your message..." rows="3"></textarea>
        <button type="submit">Send</button>
      </form>


      <div className="footer-cta">
        <h1>Join Sevan®. Have your space. Start your journey towards productivity.</h1>
      </div>

      <div className="footer-bottom">
        <p>Sevan and CO © 2025. All rights reserved.</p>
        <p>Made by Studio ARS</p>
      </div>

    </footer>
  );
}

export default Footer;
