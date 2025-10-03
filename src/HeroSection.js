const HeroSection = () => {
    return (

        <section className="hero">
            <div className="hero-container section-container">
                <div className="hero-text">
                    <h1> A quiet space for focused minds. </h1>
                    <p>
                        We believe focus thrives in a quiet, welcoming environment. <br></br> No pressure to buy, no noise — just people respecting each other.
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