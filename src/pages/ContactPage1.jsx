import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const contactPage = () => {
  return (
<div id="contact">
  <Container>
    <h1>Contact Me</h1>
    <Card>
      <Card.Body>
       
         <p>My Email: tk2m22@gmail.com</p>
  
        <a
            href="https://github.com/Imcyndyk"
            target="_blank"
            rel="noreferrer"
          >
            <RxGithubLogo
              className="github"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/thunwarat-kamolthong-282174186/"
            target="_blank"
            rel="noreferrer"
          >
            <RxLinkedinLogo
              className="linkedin"
            />
          </a>
      </Card.Body>
    </Card>
  </Container>
</div>
  )

}

export default contactPage;