
import './Footer.css';


function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">

        <nav className="footer-nav">
          <a href="/home">Home</a>
          <a href="/bookings">Bookings</a>
          <a href="/about">About</a>

        </nav>

        <p > London <br /> United Kingdom</p>

      </div>


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
