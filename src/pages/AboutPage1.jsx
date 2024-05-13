import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const AboutPage1 = () => {
  const cardTitles = ["HTML", "Bootstrap","Next.js", "React", "CSS","JavaScript" , "Sass", "Figma"];

  return (
    <>
        <div id="skill">
        <Container>
          <h2>My Skills</h2>
          <p>Here are some of the technologies I have experience with</p>
          <Row xs={1} md={2} className="g-4">
            {cardTitles.map((title, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutPage1;
