import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// my projects
import html from "../components/image/html.jpg";
import html2 from "../components/image/html2.jpg";
import moviejs from "../components/image/moviejs.jpg";
// my designs
import uxui from "../components/image/uxui.jpg";
import page from "../components/image/page.jpg";


const ProjectPage = () =>{
  return (
    <div id="projectPage">
         <h1> My Projects</h1>
    <Container>
    <Row className="justify-content-center">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={html} />
            <Card.Body>
              <h2>Travel website</h2>
              <a href="https://portfolio-design-taupe.vercel.app"
              target="_blank"
              rel="noopener noreferrer">
              <Button variant="warning">Visit Site</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
    <Col md={4}>
          <Card>
            <Card.Img variant="top" src={html2} />
            <Card.Body>
              <h2>Construction</h2>
              <a href="https://myprotfolio-iota.vercel.app"
              target="_blank"
              rel="noopener noreferrer">
              <Button variant="warning">Visit Site</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={moviejs} />
            <Card.Body>
              <h2>Movie App</h2>
              <a href="https://movies-one-tan.vercel.app"
              target="_blank"
              rel="noopener noreferrer">
              <Button variant="warning">Visit Site</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>

        <h1>My Designs</h1>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={uxui} />
            <Card.Body>
              <h2>Clothing Design</h2>
              <a href="https://www.figma.com/design/Dl9t0xMDUvd8KYPgH6upJY/unisex-wireframe?node-id=35%3A1004&t=Eo5DBFszFspfeHyv-1"
              target="_blank"
              rel="noopener noreferrer">
              <Button variant="warning">Visit Site</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={page} />
            <Card.Body>
              <h2>Own Custom Landing Page</h2>
              <a href="https://www.figma.com/proto/BCHDj7EpGX4W4HR6mykEp7/Own-custom-landing-page-concept?node-id=1-4&starting-point-node-id=1%3A4&t=jqlj6sstJSe2xoH2-1"
              target="_blank"
              rel="noopener noreferrer">
              <Button variant="warning">Visit Site</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </Container>
    </div>
  );
}

export default ProjectPage;