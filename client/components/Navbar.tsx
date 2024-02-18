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
      ease: 'linear',
      duration: 2.5,
    },
  },
}

function Navigation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'linear', duration: 2 }}
    >
      <Navbar collapseOnSelect expand="lg" className="justify-content-center  ">
        <Container className="container-lg">
          <Navbar.Brand href="#home">
            <motion.img
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              src="https://scontent.fpmr1-1.fna.fbcdn.net/v/t1.18169-9/15698060_222415818208286_2851917130035870513_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7a1959&_nc_ohc=IrQt0O2YF5AAX_aBSgV&_nc_ht=scontent.fpmr1-1.fna&oh=00_AfBbRPOveThPJeJK975YRvu5igMi8wv1rDPvJllXGljQ2g&oe=65ECF1B3"
              width="65"
              height="65"
              className="d-inline-block align-top"
              alt="Barber logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <motion.div
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
                  whileHover={{ color: 'rgb(139, 23, 23)', transition: 1 }}
                >
                  About
                </motion.div>
              </Nav.Link>
              <Nav.Link className="nav-link mx-lg-2" href="#gallery">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ color: 'rgb(139, 23, 23)', transition: 1 }}
                >
                  Gallery
                </motion.div>
              </Nav.Link>
              <Nav.Link className="nav-link mx-lg-2" href="#services">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ color: 'rgb(139, 23, 23)', transition: 1 }}
                >
                  Services
                </motion.div>
              </Nav.Link>
              <Nav.Link className="nav-link mx-lg-2" href="#booking">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ color: 'rgb(139, 23, 23)', transition: 1 }}
                >
                  Booking
                </motion.div>
              </Nav.Link>
              <Nav.Link className="nav-link mx-lg-2" href="#contact">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ color: 'rgb(139, 23, 23)', transition: 1 }}
                >
                  Contact
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
