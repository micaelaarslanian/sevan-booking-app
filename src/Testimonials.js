
const testimonialsData = [
    //this is an array of objects containing testimonial data. each object has a name, image, rating, and quote. 
    {
        name: "Antonella",
        image: "/img/img_08.jpg",
        rating: "★★★★★",
        quote: "This is the first time I’ve found a workspace that truly respects silence.",
    },
    {
        name: "Clara",
        image: "/img/img_10.jpg",
        rating: "★★★★★",
        quote: "I love being able to stay all day and still stay focused. Also love the non necessary consumption.",
    },

]


const Testimonials = () => {
    return (
        < section className="testimonials" >
            <div className="section-container testimonial-container">
                <div className="testimonial-header">
                    <h2>Testimonials</h2>
                </div>
                <div className="testimonial-grid">
                    {testimonialsData.map((testimonial, index) => (
                        <blockquote key={index} className="testimonial-card">
                            <img
                                src={testimonial.image}
                                alt={`Person that is being quoted, in this case it's: ${testimonial.name}`}
                                className="testimonial-img"
                            />
                            <p className="rating"> {testimonial.rating}</p>
                            <div className="testimonial-info">
                                <strong>  "{testimonial.quote}" </strong>
                                <p> - {testimonial.name} </p>
                            </div>
                        </blockquote>
                    ))}
                </div>
            </div>
        </ section >
    );
}

export default Testimonials;