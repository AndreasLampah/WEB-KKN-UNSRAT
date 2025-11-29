import Carousel from 'react-bootstrap/Carousel';
import foto1 from "../assets/hq720.jpg";
import foto2 from "../assets/hq720.jpg";
import foto3 from "../assets/hq720.jpg";
import '../index.css'; // CSS tambahan

const carouselItems = [
  {
    src: foto1,
    alt: "First slide",
    title: "Explore the World",
    caption: "Discover amazing places and adventures.",
    button: "Learn More",
  },
  {
    src: foto2,
    alt: "Second slide",
    title: "Capture Moments",
    caption: "Photography that tells a story.",
    button: "View Gallery",
  },
  {
    src: foto3,
    alt: "Third slide",
    title: "Create Memories",
    caption: "Make your journey unforgettable.",
    button: "Get Started",
  }
];

const Carousels = () => {
  return (
    <div className="modern-carousel">
      <Carousel fade interval={4000}>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-image"
              src={item.src}
              alt={item.alt}
            />
            <div className="carousel-overlay" />
            <Carousel.Caption className="text-start text-white">
              <h2 className="carousel-title">{item.title}</h2>
              <p className="carousel-caption">{item.caption}</p>
              <button className="carousel-button">{item.button}</button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;
