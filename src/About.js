// About.js
import "./About.css";

const About = () => {
    const bg = `${process.env.PUBLIC_URL || ""}/img/about-background.jpg`;

    return (
        <section
            className="about"
            id="about"
            style={{ "--about-bg": `url(${bg})`, "--texture-opacity": 0.15 }}
        >
            <div className="about-container section-container">
                <article className="about-text">
                    <header>
                        <h2 className="about-title">
                            It’s not just a seat, it’s a<br />space to return to.
                        </h2>
                        <p className="about-subtitle">
                            Sevan is more than just a café — it’s a space designed for focus. Here, you can
                            book your own table, settle in with your work, and enjoy the calm atmosphere without
                            distractions. Whether you’re writing, studying, or building your next idea, Sevan
                            gives you the freedom to concentrate in comfort, without the pressure to constantly
                            consume or the noise of a busy café.
                        </p>
                    </header>

                    {/* CTA */}
                    <a className="about-button" href="mailto:sevancafe@bookings.com">
                        Contact us
                    </a>
                </article>
            </div>
        </section>
    );
};

export default About;
