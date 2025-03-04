import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

// Import skill logos
import htmlLogo from "../assets/img/html.svg";
import cssLogo from "../assets/img/css.svg";
import jsLogo from "../assets/img/logo-javascript.svg";
import pythonLogo from "../assets/img/python.svg";
import javaLogo from "../assets/img/java.svg";
import springLogo from "../assets/img/spring-boot.svg";
import mongodbLogo from "../assets/img/mongodb.svg";
import tensorflowLogo from "../assets/img/tensorflow.svg";
import cLogo from "../assets/img/c.svg";
import githubLogo from "../assets/img/github-icon-2.svg";
import figmaLogo from "../assets/img/figma.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };

  const skills = [
    { name: "Java", logo: javaLogo },
    { name: "Python", logo: pythonLogo },
    { name: "TensorFlow", logo: tensorflowLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "Spring Boot", logo: springLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "MongoDB", logo: mongodbLogo },
    { name: "C Programming", logo: cLogo },
    { name: "GitHub", logo: githubLogo },
    { name: "Figma", logo: figmaLogo },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Proficient in modern web development and AI/ML technologies. Always learning, innovating, and building intelligent solutions.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true} // Enable auto-play
                autoPlaySpeed={2000} // Adjust speed of rotation (2 seconds)
                transitionDuration={700} // Smooth transition
                removeArrowOnDeviceType={["tablet", "mobile"]} // Hide arrows on small screens
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="item skill-item" key={index}>
                    <img src={skill.logo} alt={skill.name} className="skill-logo" />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
