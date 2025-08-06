


const whatsOnData = [
    //this is an array of objects containing testimonial data. each object has a name, image, rating, and quote. 
    {
        image: "/img/img_01.jpeg",
        title: "Sketch Sessions",
        description: "Step into our creative corners where ideas come alive. Whether you’re sketching, journaling, or pinning up inspiration, these spaces are made for quiet exploration and visual thinking.",
    },
    {
        image: "/img/img_05.jpg",
        title: "First Thursday Socials",
        description: "Join us every first Thursday of the month for a relaxed, no-pressure social after work hours. Meet fellow coworkers, share ideas, or just enjoy a drink with good company — community, no networking hustle.",
    },
    {
        image: "/img/img_07.jpg",
        title: "Workshops & Skill-Sharing",
        description: "From creative writing to coding to mindful productivity — attend a workshop or host your own. Our open sessions are a way to learn, teach, and connect through what you love.",
    }
]


const WhatsOn = () => {
    return (
        < section className="whats-on" >
            <div className="section-container whats-on-container">
                <h2>What's on</h2>

                <div className="card-grid">
                    {whatsOnData.map((whatson, index) => (
                        <blockquote key={index} className="card">
                            <div className="card-image-container">
                                <img
                                    src={whatson.image}
                                    alt={`Whats on: ${whatson.title}`}
                                />
                            </div>
                            <div className="card-text">
                                <h3>  {whatson.title} </h3>
                                <p> {whatson.description} </p>
                            </div>
                        </blockquote>
                    ))}
                </div>
            </div>

        </ section >
    );
}

export default WhatsOn;