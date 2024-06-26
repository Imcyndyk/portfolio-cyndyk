import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi'
// Free download of graphics library (two of PNGs in assets): https://illustrationz.design/
import notFound from '../assets/errorOne.png'

const NotFound = () => {
  return (
    <div className="notFoundWrapper">
      <Container>     
        <h2>Sorry...</h2>
        <p>Looks like you coded your way onto a hidden page!</p>
        <div className="notFoundCover">
          <img src={notFound} alt="notfound" />
        </div>
        {/* CUSTOM BUTTON */}
        <Link to="/" className="homeBtn">
          <FiHome id="btn-icon" />
        </Link>
      </Container>
    </div>
  )
}

export default NotFound