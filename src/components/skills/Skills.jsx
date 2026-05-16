import "./Skills.css";

function Skills() {

    return (
        <div className="skills">

            <div className="skills-top">
                <h1 className="skills-title">My Skills</h1>

                <p className="skills-subtitle">
                    These are some skills and experiences that represent
                    creativity, development, communication, and continuous learning.
                </p>
            </div>

            <div className="skills-container">

                <div className="skill-card">
                    <div className="skill-info">
                        <h2>Lazy</h2>
                        <span>95%</span>
                    </div>

                    <div className="skill-line">
                        <div className="skill-fill html"></div>
                    </div>
                </div>

                <div className="skill-card">
                    <div className="skill-info">
                        <h2>Curious</h2>
                        <span>90%</span>
                    </div>

                    <div className="skill-line">
                        <div className="skill-fill css"></div>
                    </div>
                </div>

                <div className="skill-card">
                    <div className="skill-info">
                        <h2>Liar</h2>
                        <span>85%</span>
                    </div>

                    <div className="skill-line">
                        <div className="skill-fill js"></div>
                    </div>
                </div>

                <div className="skill-card">
                    <div className="skill-info">
                        <h2>Sport</h2>
                        <span>40%</span>
                    </div>

                    <div className="skill-line">
                        <div className="skill-fill react"></div>
                    </div>
                </div>

                <div className="skill-card">
                    <div className="skill-info">
                        <h2>Creator</h2>
                        <span>75%</span>
                    </div>

                    <div className="skill-line">
                        <div className="skill-fill ui"></div>
                    </div>
                </div>

                <div className="skill-card">
                    <div className="skill-info">
                        <h2>Communication</h2>
                        <span>98%</span>
                    </div>

                    <div className="skill-line">
                        <div className="skill-fill communication"></div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Skills;