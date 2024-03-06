import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {
    y: -500,
  },
  visible: {
    y: 0,
    transition: {
      duration: 2.5,
    },
  },
}

function Navigation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'linear', duration: 1.5 }}
    >
      <Navbar
        collapseOnSelect
        expand="lg"
        className="justify-content-center fixed-top"
      >
        <Container className="container">
          <Navbar.Brand href="/">
            <motion.img
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              src="client/styles/images/barber-card-logo.png"
              className="d-inline-block align-top"
              alt="Barber logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/">
            <motion.div
              className="font-change"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              Fresh & Faded
            </motion.div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="nav-link mx-lg-2" href="#about">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ transition: 1 }}
                >
                  About
                </motion.div>
              </Nav.Link>
              <Nav.Link className="nav-link mx-lg-2" href="#services">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ transition: 1 }}
                >
                  Services
                </motion.div>
              </Nav.Link>
              <Nav.Link className="nav-link mx-lg-2" href="#gallery">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ transition: 1 }}
                >
                  Gallery
                </motion.div>
              </Nav.Link>
              <Nav.Link
                className="nav-link mx-lg-2"
                href="https://www.fresha.com/a/fresh-and-faded-barbershop-lower-hutt-1-wainui-road-43fb475l/booking?menu=true"
                target="_blank"
                rel="noreferrer"
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ transition: 1 }}
                >
                  Booking
                </motion.div>
              </Nav.Link>
              <Nav.Link className="nav-link mx-lg-2" href="#contact">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ transition: 1 }}
                >
                  Contact
                </motion.div>
              </Nav.Link>
              <Nav.Link className="nav-link mx-lg-2" href="#hours">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ transition: 1 }}
                >
                  Hours
                </motion.div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  )
}

export default Navigation
