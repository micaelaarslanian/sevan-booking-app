function Main() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-container">
            <header>
              <h1> A quiet space for focused minds. </h1>
              <h2> Where work feels natural — without the noise, the pressure, or the price tag.  </h2>
              <p>
                Sevan is a coworking space built for calm. No need to buy a latte to stay, no buzz of conversation around you — just respectful silence, soft design, and space to think.
              </p>
            </header>

            <div className="hero-button-container">
              <button className="hero-button">Book a Seat</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/img/img_06.jpg" alt="The working space" />
          </div>
        </section>

        {/* Whats On Section */}
        <section className="whats-on">
          <div className="whats-on-container">
            <h2>What's on</h2>
            <div className="card-grid">
              <article className="card">
                <div className="card-image-container">
                  <img src="/img/img_01.jpeg" alt="Moodboard Wall" />
                </div>
                <div className="card-text">
                  <h3>Sketch Sessions</h3>
                  <p>Step into our creative corners where ideas come alive. Whether you’re sketching, journaling, or pinning up inspiration, these spaces are made for quiet exploration and visual thinking.</p>
                </div>
              </article>

              <article className="card">
                <div className="card-image-container">
                  <img src="/img/img_05.jpg" alt="Socials" />
                </div>
                <div className="card-text">
                  <h3>First Thursday Socials</h3>
                  <p>Join us every first Thursday of the month for a relaxed, no-pressure social after work hours. Meet fellow coworkers, share ideas, or just enjoy a drink with good company — community, no networking hustle.</p>
                </div>
              </article>

              <article className="card">
                <div className="card-image-container">
                  <img src="/img/img_07.jpg" alt="Workshops & Skill-Sharing" />
                </div>
                <div className="card-text">
                  <h3>Workshops & Skill-Sharing</h3>
                  <p>From creative writing to coding to mindful productivity — attend a workshop or host your own. Our open sessions are a way to learn, teach, and connect through what you love.</p>
                </div>
              </article>
            </div>

          </div>
        </section>


        {/* About Section */}
        <section className="about">
          <div className="about-container">
            <article className="about-text">
              <header>
                <h2> It's not just a seat, it's a space to return to.</h2>
                <h3> We believe focus thrives in a quiet, welcoming environment. <br></br> No pressure to buy, no noise — just people respecting each other.</h3>
              </header>
            </article>
          </div>
        </section>

      </main>
    </>
  );
}

export default Main;
