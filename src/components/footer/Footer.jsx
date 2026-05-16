import "./Footer.css";
import { FaInstagram, FaTelegramPlane, FaTiktok, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* LEFT */}
                <div className="footer-left">
                    <h2>Rustam</h2>
                    <p>
                        High school student passionate about web development,
                        teaching and building future projects.
                    </p>
                </div>

                {/* MIDDLE */}
                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>

                {/* RIGHT SOCIALS */}
                <div className="footer-socials">

                    <a href="https://instagram.com/jamsedovic" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>

                    <a href="https://t.me/rzz_12l" target="_blank" rel="noreferrer">
                        <FaTelegramPlane />
                    </a>

                    <a href="https://tiktok.com/rzzz3353" target="_blank" rel="noreferrer">
                        <FaTiktok />
                    </a>

                </div>

            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Rustam. All rights reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;