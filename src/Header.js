import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className="App-header">
                <img src="/logos/branding-03.png" alt="sevan logo" width="200" />
                <nav>
                    <ul>
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/bookings">Bookings</Link> </li>
                        <li> <Link to="/about">About</Link> </li>
                        <li> <Link to="/contact">Contact us</Link> </li>
                    </ul>

                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/bookings">Bookings</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
