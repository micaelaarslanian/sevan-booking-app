const HeroSection = () => {
    return (

        <section className="hero">
            <div className="hero-container section-container">
                <div className="hero-text">
                    <h1> A quiet space for focused minds. </h1>
                    <h2> Where work feels natural — without the noise, the pressure, or the price tag.  </h2>
                    <p>
                        Sevan is a coworking space built for calm. No need to buy a latte to stay, no buzz of conversation around you — just respectful silence, soft design, and space to think.
                    </p>

                    <div className="hero-button-container">
                        <button className="hero-button">Book a Seat</button>
                    </div>
                </div>



                <div className="hero-image">
                    <img src="/img/img_06.jpg" alt="The working space" />
                </div>
            </div>
        </section>
    );
}


export default HeroSection;