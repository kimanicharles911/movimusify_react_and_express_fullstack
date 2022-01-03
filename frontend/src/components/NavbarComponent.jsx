import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Navbar, Container, Nav, Row} from 'react-bootstrap';
import './NavbarComponent.css';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

/* 
  * I imported FontAwesomeIcon component from @fortawesome/react-fontawesome
  * I imported the Navbar, Container, Nav, Row components from react-bootstrap.
  * I imported the css style file i.e NavbarComponent.css.
  * I imported the faHeart and faGithub components @fortawesome library.
  * I imported the Link component from the react-router-dom.
*/

const NavbarComponent = () => {

  return (
    <>
      <Navbar className="nav-class" expand="sm">
        <Container fluid>
          {/* Application Name */}
          <Navbar.Brand>
            <Link to="/" id="brand-id">MOVIMUSIFY</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Container>
              <Row>
                <Nav className="me-auto">
                  <ul className="navbar-nav me-auto mb-2 mb-sm-0">           
                  </ul>
                  <ul className="d-flex navbar-nav me-2 mb-2 mb-sm-0">
                    {/* Favourites Page Link/Button */}
                    <Link to="/favourites" id="nav-link-class">
                      <FontAwesomeIcon icon={faHeart} className="font-awesome-icons" id="heart-icon"/>&nbsp;Favourites
                    </Link>
                    
                    {/* Github Repository Link Button */}
                    <Nav.Link href="https://github.com/kimanicharles911/movimusify_react_and_express_fullstack" target="_blank" id="nav-link-class"><FontAwesomeIcon icon={faGithub} className="font-awesome-icons" id="github-icon"/>&nbsp;GitHub</Nav.Link>
                  </ul>
                </Nav>
              </Row>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

export default NavbarComponent;

/* 
  * I created a Navbar component.
  * I then wrote the navbar JSX that heavily relies on bootstrap and react-bootstrap libraries.
  * The first major JSX item is the Favourites Page Link/Button.
  * The second major JSX item is the Github Repository Link Button that redirects the user to this Application's source code repository.
*/