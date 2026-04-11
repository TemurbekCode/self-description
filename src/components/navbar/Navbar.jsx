import "./Navbar.css"
import { Link } from "react-router-dom";
import { useState } from "react";
/*import { useTranslation } from "react-i18next";*/

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    /*  const { t, i18n } = useTranslation();*/

    const closeAll = () => {
        setMenuOpen(false);
    }

    return (
        <div className="nav">
            <div className="navContainer">
                <Link to="/" onClick={closeAll}>
                    <div className="logo">
                        <img className="logoImg" src="ru.jpg" alt="" />
                    </div>
                </Link>

                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <Link to="/" className="nav-link" onClick={closeAll}>
                        <h3>Home</h3>
                    </Link>
                    <Link to="/about" className="nav-link" onClick={closeAll}>
                        <h3>About</h3>
                    </Link>
                    <Link to="/photos" className="nav-link" onClick={closeAll}>
                        <h3>Photos</h3>
                    </Link>
                    <Link to="/skills" className="nav-link" onClick={closeAll}>
                        <h3>Skills</h3>
                    </Link>
                    <Link to="/register" className="nav-link" onClick={closeAll}>
                        <h3>Register</h3>
                    </Link>

                    <div className="nav-right nav-right-mobile">
                        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
                        <button onClick={() => i18n.changeLanguage("uz")}>UZ</button>
                    </div>
                </div>

                <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>
            </div>
        </div>
    )
}

export default Navbar;