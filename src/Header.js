import { Link } from 'react-router-dom';
import './Header.css';
import { fallDown as Menu } from 'react-burger-menu';



function Header() {
    return (
        <>
            <header className="site-header">
                <div className="header-container">
                    <div className="logo">
                        <img src="/logos/branding-07.png" alt="sevan space logo" />
                    </div>

                    <nav className="main-nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/bookings">Bookings</Link></li>

                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>

                    <Menu
                        right className="mobile-nav"
                        pageWrapId={"page-wrap"}
                        outerContainerId={"outer-container"}
                    >
                        <Link to="/" className="bm-item">Home</Link>
                        <Link to="/bookings" className="bm-item">Bookings</Link>
                        <Link to="/about" className="bm-item">About</Link>
                        <Link to="/contact" className="bm-item">Contact</Link>
                    </Menu>
                </div>
            </header>

            {/* Mobile burger nav outside the header */}

        </>
    );
}


export default Header;
