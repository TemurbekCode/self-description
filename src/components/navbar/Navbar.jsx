import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeAll = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="nav">
            <div className="navContainer">

                {/* LOGO */}
                <Link to="/" className="logo" onClick={closeAll}>
                    <img className="logoImg" src="/ru.jpg" alt="logo" />
                    <span>Rustam</span>
                </Link>

                {/* LINKS */}
                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <Link to="/" className="nav-link" onClick={closeAll}>Home</Link>
                    <Link to="/about" className="nav-link" onClick={closeAll}>About</Link>
                    <Link to="/photos" className="nav-link" onClick={closeAll}>Photos</Link>
                    <Link to="/skills" className="nav-link" onClick={closeAll}>Skills</Link>
                    <Link to="/register" className="nav-link" onClick={closeAll}>Register</Link>
                </div>

                {/* RIGHT */}
                <div className="nav-right">
                    <button>EN</button>
                    <button>UZ</button>
                </div>

                {/* BURGER */}
                <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

            </div>
        </nav>
    );
}

export default Navbar;