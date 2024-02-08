import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary justify-content-center"
      // data-bs-theme="dark"
    >
      <Container className="container-lg">
        <Navbar.Brand href="#home">
          <img
            src="client/styles/images/barber-logo.png"
            width="65"
            height="65"
            className="d-inline-block align-top"
            alt="Barber logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="#home">Fresh & Faded</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <Nav.Link className="nav-link mx-lg-2" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="nav-link mx-lg-2" href="#gallery">
              Gallery
            </Nav.Link>
            <Nav.Link className="nav-link mx-lg-2" href="#booking">
              Booking
            </Nav.Link>
            <Nav.Link className="nav-link mx-lg-2" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
