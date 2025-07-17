import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
    return (
        <header className="site-header">
            <div className="header-container">
                <div className="logo">
                    <img src="/logos/branding-03.png" alt="sevan space logo" />
                </div>
                <nav className="main-nav">
                    <ul>
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/bookings">Bookings</Link> </li>
                        <li> <Link to="/about">About</Link> </li>
                        <li> <Link to="/contact">Contact us</Link> </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
