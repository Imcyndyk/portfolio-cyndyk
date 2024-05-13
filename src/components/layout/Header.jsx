// Import Bootstrap modules
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import { SiConstruct3 } from "react-icons/si";

// Socail media icons
import { RxGithubLogo } from "react-icons/rx";
import { RxLinkedinLogo } from "react-icons/rx";

import styles from './Header.module.scss';
import useTheme from "../../hooks/useTheme";
// theme toggler
import ThemeToggler from  "../common/ThemeToggler";


const Header = () => {
  const { theme } = useTheme();

  return (
    <Navbar className={styles[theme]}>
      <Container>
        <Navbar.Brand className={styles.navLink} as={Link} to="/">
          <SiConstruct3 className={styles.icon}/>{' '}Cyndy K
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={styles.navLink} as={Link} to="/">
              Profile
            </Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} to="/about1">
              About
            </Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} to="/contact1">
              Contact
            </Nav.Link>
          
          </Nav>


          <a
            href="https://github.com/Imcyndyk"
            target="_blank"
            rel="noreferrer"
          >
            <RxGithubLogo
              className="github"
              style={{ color: "white", fontSize: "30px", marginRight: "10px" }}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/thunwarat-kamolthong-282174186/"
            target="_blank"
            rel="noreferrer"
          >
            <RxLinkedinLogo
              className="inkedin"
              style={{ color: "white", fontSize: "30px", marginRight: "10px" }}
            />
          </a>
          <div>
            <ThemeToggler />
          </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;



