import { Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const FunFacts = () => {
  const facts = [
    "☕ I function best with two cups of coffee.",
    "🎵 I love coding while listening to lo-fi beats.",
    "💡 AI + Web Dev Enthusiast – I love merging machine learning with full-stack development to build smart solutions.",
    "🚀 My dream project is to build an AI startup.",
    "🌍 I enjoy learning about space and AI ethics.",
    "🎧 My best ideas come when I’m coding at midnight, coffee in hand, and lo-fi beats playing.",
    "🚀 My goal? Build an AI-powered platform that makes an impact."
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <Col lg={12}>
      <div className="funfacts-bx wow slideInUp">
        <h3>Fun Facts About Me</h3>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000} // Changes every 3 seconds
          transitionDuration={650}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {facts.map((fact, index) => (
            <div className="funfact-item" key={index}>
              <p>{fact}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </Col>
  );
};
