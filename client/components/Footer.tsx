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

const iconHoverVariant = {
  hover: {
    scale: [1, 1.2, 1, 1.2, 1],
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
  },
}

const buttonHoverVariant = {
  hover: {
    scale: [1, 1.2, 1, 1.2, 1],
    textShadow: '0px 0px 12px rgb(0, 0, 0)',
    boxShadow: '0px 0px 12px rgb(255, 255, 255)',
  },
}

function Footer() {
  return (
    <Container fluid="md">
      <Row className="text-center justify-content-center pb-3">
        <Col xs={2}>
          <motion.div variants={iconHoverVariant} whileHover="hover">
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
          <motion.div variants={iconHoverVariant} whileHover="hover">
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
          <motion.div variants={iconHoverVariant} whileHover="hover">
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
        <Col xs={2}>
          <motion.a
            className="btn btn-primary px-3 py-2"
            style={{
              background: 'rgb(180, 34, 34)',
              color: 'white',
              borderColor: 'white',
            }}
            variants={buttonHoverVariant}
            whileHover="hover"
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
            whileInView={{ x: 0, opacity: 1 }}
            type="submit"
            href="https://www.google.com/search?hl=en-NZ&gl=nz&q=Fresh+%26+Faded+BARBERSHOP+1+Wainui+Road,+Waiwhetu,+Lower+Hutt+5010&ludocid=14007977708141677625&lsig=AB86z5VRjJzEzTiU32DsLrIWA1K8&hl=en&gl=NZ#lrd=0x6d38aa43fdc7206d:0xc266558213600c39,1"
            target="_blank"
            rel="noreferrer"
          >
            Write a Review!
          </motion.a>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
