import "./About.css";

function About() {

    return (
        <div className="about">

            {/* LEFT SIDE */}
            <div className="about-left">

                <h1 className="about-h1">About Me</h1>

                <p className="about-text">
                    Hello! My name is Rustam. I am currently a high school student
                    who loves learning new things and improving my skills every day.
                </p>

                <p className="about-text">
                    My dream is to become a teacher in the future and help students
                    achieve their goals through education and motivation.
                </p>

                <button className="about-btn">
                    Explore More
                </button>

            </div>

            {/* RIGHT SIDE */}
            <div className="about-right">

                <div className="carousel">

                    <div className="slide active">
                        <div className="image-placeholder">
                            YOUR PHOTO
                        </div>
                    </div>

                    <div className="slide">
                        <div className="image-placeholder">
                            YOUR PHOTO
                        </div>
                    </div>

                    <div className="slide">
                        <div className="image-placeholder">
                            YOUR PHOTO
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default About;