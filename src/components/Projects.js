import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/music.png";
import projImg2 from "../assets/img/meme.png";
import projImg3 from "../assets/img/food.png";
import projImg4 from "../assets/img/bhp.png";
import projImg5 from "../assets/img/social-media.png";
import projImg6 from "../assets/img/portfolio.png";
import projImg7 from "../assets/img/3dgame.jpeg";
import projImg8 from "../assets/img/airport.png";
import projImg9 from "../assets/img/resnel.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // AI & Machine Learning Projects
  const aiProjects = [
    {
      title: "Music Recommendation System",
      description: "AI-powered music suggestions based on the time of day.",
      imgUrl: projImg1,
    },
    {
      title: "AI-Powered Meme Recognition",
      description: "Hybrid meme classification using CNNs and OCR-based text analysis.",
      imgUrl: projImg2,
    },
    {
      title: "Restaurant Recommendation System",
      description: "Recommends restaurants based on cuisine preference and budget.",
      imgUrl: projImg3 ,
    },
  ];

  // Full-Stack & Web Development Projects
  const webProjects = [
    {
      title: "Bangalore Home Price Predictor",
      description: "Machine learning model predicting real estate prices with Flask API.",
      imgUrl: projImg4,
    },
    {
      title: "AI-Based Social Media Analysis",
      description: "NLP-powered sentiment & trend analysis using MERN & AI models.",
      imgUrl: projImg5,
    },
    {
      title: "Personal Portfolio",
      description: "Built a informative and information rich portfolio site.",
      imgUrl: projImg6,
    },
  ];

  // Automation & Other Projects
  const automationProjects = [
    {
      title: "RESNEL VTU Result Analysis",
      description: "Automated VTU result extraction using Python web scraping & MongoDB storage.",
      imgUrl: projImg9,
    },
    {
      title: "Airport Database Management",
      description: "A application that leverages SQL and Pyhton to provide Airport management service.",
      imgUrl: projImg8,
    },
    {
      title: "3D Shooter Game",
      description: "Developed a interactive open world 3D shooter game using OpenCV.",
      imgUrl: projImg7,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Transforming ideas into intelligent solutions! From AI-driven analytics to full-stack applications, my projects showcase innovation, automation, and problem-solving.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="ai">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="ai">AI & ML</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="web">Full-Stack Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="automation">Automation & Other</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="ai">
                      <Row>
                        {aiProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="web">
                      <Row>
                        {webProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="automation">
                      <Row>
                        {automationProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
