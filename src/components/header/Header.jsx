import "./Header.css";

function Header() {
    return (
        <div className="header">

            <div className="left">
                <h1 className="headerTitle">
                    Hi, I'm <span className="mark">Rustam</span>
                </h1>

                <h2 className="subtitle">
                    High School Student
                </h2>

                <a href="contact">
                    <button className="btn-header">Get Started</button>
                </a>
            </div>

            <div className="right">
                <img className="img-right" src="/ru.jpg" alt="Rustam" />
            </div>

            <marquee className="marquee">
                High School Student | Future Teacher 📚 | High School Student | Future Teacher 📚 | High School Student | Future Teacher 📚
            </marquee>

        </div>
    );
}

export default Header;