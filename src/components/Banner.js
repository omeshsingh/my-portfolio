import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/3d-portrait-people.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [showMore, setShowMore] = useState(false); // State for showing more text

  const toRotate = ["Web Developer", "AI/ML Enthusiast","Innovator"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Omesh`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="80"
                      data-rotate='[ "Web Developer", "AI/ML Enthusiast","Innovator"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  {/* <p>
                  🚀 AI/ML Developer | Full-Stack Engineer | Innovator
                  </p> */}
                  <p>
                  I’m a passionate AI/ML developer and full-stack engineer with a solid foundation in computer science and a drive to build intelligent, real-world solutions. From analyzing social media trends with NLP to predicting real estate prices using machine learning, I thrive on solving complex problems through technology.
                  </p>

                  {/* Wrapping button and extra content in a div so they move together */}
                  <div className="extra-content">
                    {showMore && (
                      <div className="animate__animated animate__fadeIn">
                        <p>
                        With expertise in machine learning, backend development (Spring Boot, REST APIs), and full-stack engineering (MERN stack), I focus on automation, optimization, and seamless user experiences. Every project I work on is an opportunity to push the boundaries of technology and make a meaningful impact.                        </p>
                        <p>
                          📍 Based in Bangalore, India | 💡 AI Enthusiast | 🚀 Always Learning & Innovating
                        </p>
                        <p>Let’s collaborate and build something incredible!</p>
                      </div>
                    )}

                    {/* "Know More" button moves along with the additional content */}
                    <button onClick={() => setShowMore(!showMore)}>
                      {showMore ? "Show Less" : "Know More"} <ArrowRightCircle size={25} />
                    </button>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
