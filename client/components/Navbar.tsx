import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { motion, animate, stagger } from 'framer-motion'
import { useState } from 'react'

import logo from '../styles/images/barber-card-logo.png'

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
  const [isOpen, setIsOpen] = useState(false)

  const sequence = [
    ['li', { opacity: [0, 1], x: [-20, 0] }, { delay: stagger(0.1) }],
    [
      'div.container',
      {
        backgroundColor: isOpen ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.95)',
        opacity: [0.3, 1],
      },
      { at: 0.18 },
      {
        duration: () => {
          setIsOpen(!isOpen)
        },
      },
    ],
  ]

  const handleCloseNavbar = () => {
    setIsOpen(false)
  }

  const handleNavLinkClick = () => {
    setIsOpen(false)
  }

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
          <Navbar.Brand>
            <motion.img
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              src={logo}
              className="d-inline-block align-top"
              alt="Barber logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/">
            <motion.div
              className="nav-header-font-change lead"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              Fresh & Faded
            </motion.div>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setIsOpen(!isOpen, animate(sequence))}
            onClose={handleCloseNavbar}
            aria-controls="responsive-navbar-nav"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}
          >
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ ease: 'easeInOut', duration: 1.8 }}
                animate={{ opacity: 1 }}
                whileHover={{
                  textShadow: '0px 0px 20px rgb(255, 255, 255)',
                }}
              >
                <i
                  className="bi bi-x-lg display-6"
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                ></i>
              </motion.div>
            ) : (
              <i
                className="bi bi-justify display-6"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              ></i>
            )}
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                className="nav-link mx-lg-2"
                href="#about"
                onClick={handleNavLinkClick}
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ transition: 1 }}
                >
                  <li>About</li>
                </motion.div>
              </Nav.Link>
              <Nav.Link
                className="nav-link mx-lg-2"
                href="#services"
                onClick={handleNavLinkClick}
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ transition: 1 }}
                >
                  <li>Services</li>
                </motion.div>
              </Nav.Link>
              <Nav.Link
                className="nav-link mx-lg-2"
                href="#gallery"
                onClick={handleNavLinkClick}
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ transition: 1 }}
                >
                  <li>Gallery</li>
                </motion.div>
              </Nav.Link>
              <Nav.Link
                className="nav-link mx-lg-2"
                href="https://www.fresha.com/a/fresh-and-faded-barbershop-lower-hutt-1-wainui-road-43fb475l/booking?menu=true"
                target="_blank"
                rel="noreferrer"
                onClick={handleNavLinkClick}
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ transition: 1 }}
                >
                  <li>Booking</li>
                </motion.div>
              </Nav.Link>
              <Nav.Link
                className="nav-link mx-lg-2"
                href="#contact"
                onClick={handleNavLinkClick}
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ transition: 1 }}
                >
                  <li>Contact</li>
                </motion.div>
              </Nav.Link>
              <Nav.Link
                className="nav-link mx-lg-2"
                href="#hours"
                onClick={handleNavLinkClick}
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ transition: 1 }}
                >
                  <li>Hours</li>
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
