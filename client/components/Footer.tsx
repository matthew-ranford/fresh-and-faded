import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion } from 'framer-motion'

const easeInVariant = {
  initial: {
    opacity: 0,
  },

  inView: {
    opacity: 1,
  },
}

const buttonHoverVariant = {
  hover: {
    scale: [1, 1.2, 1, 1.2, 1],
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
  },
}

function Footer() {
  return (
    <Container fluid="md">
      <Row className="text-center justify-content-center pb-3">
        <Col xs={2}>
          <motion.div variants={buttonHoverVariant} whileHover="hover">
            <motion.a
              variants={easeInVariant}
              initial="initial"
              transition={{ duration: 2 }}
              whileInView="inView"
              style={{ color: 'rgb(180, 34, 34)' }}
              href="https://www.facebook.com/FreshandFadedBarberShop"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-facebook display-5"></i>
            </motion.a>
          </motion.div>
        </Col>
        <Col xs={2}>
          <motion.div variants={buttonHoverVariant} whileHover="hover">
            <motion.a
              variants={easeInVariant}
              initial="initial"
              transition={{ duration: 2 }}
              whileInView="inView"
              style={{ color: 'rgb(180, 34, 34)' }}
              href="https://www.instagram.com/freshandfaded17/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram display-5"></i>
            </motion.a>
          </motion.div>
        </Col>
        <Col xs={2}>
          <motion.div variants={buttonHoverVariant} whileHover="hover">
            <motion.a
              variants={easeInVariant}
              initial="initial"
              transition={{ duration: 2 }}
              whileInView="inView"
              href="tel: 021 243 7374"
              style={{ color: 'rgb(180, 34, 34)' }}
            >
              <i className="bi bi-telephone display-5"></i>
            </motion.a>
          </motion.div>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
