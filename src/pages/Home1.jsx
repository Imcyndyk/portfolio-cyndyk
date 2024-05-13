import { Container } from "react-bootstrap";

import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import photo from "../components/image/photo.jpg";

// Page content
const Home1 = () => {

  return (
    <>
      <section id="hero-section">
      <Container>
      <Row>
      <Col>
      <img src={photo} alt="" 
      style={{
        borderRadius: "15.5%",
        height: "32.5rem",
        width: "23rem",
        objectFit: "cover",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
      }}/>
      </Col>
      <Col>
          <h1>HI, This is me</h1>
          <h2 className="name">Thunwarat Kamolthong</h2>
          <p>
            Hi, I am Cyndy, a Holmesglen student passionate about UX/UI
            design and diving into web development. As a beginner, I am
            exploring the fundamentals of HTML, CSS, and JavaScript, eager to
            craft intuitive designs and learn alongside a creative community.
            Let's connect and create together!
          </p>
          <div>
            <Link to="/about1" className="homeBtn">
              About Me
            </Link>
            <Link to="/projects" className="homeBtn">
              My Project
            </Link>
          </div>
          </Col>
          </Row>
        </Container>
      </section>
   
    
    </>
  );
};

export default Home1;
