import ListGroup from 'react-bootstrap/ListGroup'
import { useState } from 'react'
import Fade from 'react-bootstrap/Fade'
import { motion } from 'framer-motion'

import locationHeader from '../styles/images/hours-location-header.png'

const buttonHoverVariant = {
  hover: {
    scale: [1, 1.2, 1, 1.2, 1],
    textShadow: '0px 0px 12px rgb(0, 0, 0)',
    boxShadow: '0px 0px 12px rgb(255, 255, 255)',
  },
}

function Location() {
  const [shopOpen, setShopOpen] = useState(true)
  const [walkOpen, setWalkOpen] = useState(true)

  return (
    <>
      <section id="hours" className="location-section pb-5">
        <motion.div
          className="text-center pb-5 pt-5"
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          <motion.img
            className="responsive-img"
            src={locationHeader}
            height={'auto'}
            width={'1000px'}
            alt="Hours and Location"
          />
        </motion.div>
        <div className="container-lg mb-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8 d-md-block">
              <motion.iframe
                whileHover={{
                  boxShadow: '0px 0px 20px rgb(255, 255, 255)',
                }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8 }}
                whileInView={{ x: 0, opacity: 1 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.496136760547!2d174.91503366063242!3d-41.223369735726585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38aa43fdc7206d%3A0xc266558213600c39!2sFresh%20%26%20Faded%20BARBERSHOP!5e0!3m2!1sen!2snz!4v1707807960468!5m2!1sen!2snz"
                width="100%"
                height="500"
                title="Map of Fresh & Faded BARBERSHOP location"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></motion.iframe>
            </div>
          </div>
          <div className="container-lg mb-5">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-4 text-center px-3">
                <motion.button
                  className="btn btn-primary px-3 py-2 mt-4"
                  style={{
                    background: 'none',
                    color: 'white',
                    borderColor: 'white',
                  }}
                  onClick={() => setShopOpen(!shopOpen)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  variants={buttonHoverVariant}
                  whileHover="hover"
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.8 }}
                  whileInView={{ x: 0, opacity: 1 }}
                >
                  Barbershop Hours
                </motion.button>
                <Fade in={shopOpen}>
                  <div id="example-fade-text">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.8 }}
                      whileInView={{ x: 0, opacity: 1 }}
                    >
                      <ListGroup className="lead my-4">
                        <ListGroup.Item
                          variant="primary"
                          style={{ background: 'none' }}
                        >
                          <h1 className="text-secondary">Monday:</h1>
                          <p className="text-light">8:00 AM - 5:00 PM</p>
                        </ListGroup.Item>
                        <ListGroup.Item
                          variant="primary"
                          style={{ background: 'none' }}
                        >
                          <h1 className="text-secondary">Tuesday:</h1>
                          <p className="text-light">8:00 AM - 6:00 PM</p>
                        </ListGroup.Item>
                        <ListGroup.Item
                          variant="primary"
                          style={{ background: 'none' }}
                        >
                          <h1 className="text-secondary">Wednesday:</h1>
                          <p className="text-light"> 8:00 AM - 6:00 PM</p>
                        </ListGroup.Item>
                        <ListGroup.Item
                          variant="primary"
                          style={{ background: 'none' }}
                        >
                          <h1 className="text-secondary">Thursday:</h1>
                          <p className="text-light">8:00 AM - 8:00 PM</p>
                        </ListGroup.Item>
                        <ListGroup.Item
                          variant="primary"
                          style={{ background: 'none' }}
                        >
                          <h1 className="text-secondary">Friday:</h1>
                          <p className="text-light">8:00 AM - 8:00 PM</p>
                        </ListGroup.Item>
                        <ListGroup.Item
                          variant="primary"
                          style={{ background: 'none' }}
                        >
                          <h1 className="text-secondary">Saturday:</h1>
                          <p className="text-light">8:00 AM - 12:00 PM</p>
                        </ListGroup.Item>
                        <ListGroup.Item
                          variant="primary"
                          style={{ background: 'none' }}
                        >
                          <h1 className="text-secondary">Sunday:</h1>
                          <p className="text-light">CLOSED</p>
                        </ListGroup.Item>
                      </ListGroup>
                    </motion.div>
                  </div>
                </Fade>
              </div>
              <div className="col-md-4 text-center px-3">
                <motion.button
                  id="walk-in"
                  className="btn btn-primary px-3 py-2 mt-4"
                  style={{
                    background: 'none',
                    color: 'white',
                    borderColor: 'white',
                  }}
                  onClick={() => setWalkOpen(!walkOpen)}
                  aria-controls="example-collapse-texts"
                  aria-expanded={open}
                  variants={buttonHoverVariant}
                  whileHover="hover"
                  initial={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.8 }}
                  whileInView={{ x: 0, opacity: 1 }}
                >
                  Walk-in Hours
                </motion.button>
                <Fade in={walkOpen}>
                  <div id="example-fade-texts">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.8 }}
                      whileInView={{ x: 0, opacity: 1 }}
                    >
                      <ListGroup className="lead my-4 text-secondary">
                        <ListGroup.Item
                          variant="primary"
                          style={{ background: 'none' }}
                        >
                          <h1 className="text-secondary">Monday:</h1>
                          <p className="text-light">8:30 AM - 5:30 PM</p>
                        </ListGroup.Item>
                        <ListGroup.Item
                          variant="primary"
                          style={{ background: 'none' }}
                        >
                          <h1 className="text-secondary">Tuesday:</h1>
                          <p className="text-light">8:30 AM - 5:30 PM</p>
                        </ListGroup.Item>
                        <ListGroup.Item
                          variant="primary"
                          style={{ background: 'none' }}
                        >
                          <h1 className="text-secondary">Wednesday:</h1>
                          <p className="text-light">8:30 AM - 5:30 PM</p>
                        </ListGroup.Item>
                        <ListGroup.Item
                          variant="primary"
                          style={{ background: 'none' }}
                        >
                          <h1 className="text-secondary">Thursday:</h1>
                          <p className="text-light">8:00 AM - 8:00 PM</p>
                        </ListGroup.Item>
                        <ListGroup.Item
                          variant="primary"
                          style={{ background: 'none' }}
                        >
                          <h1 className="text-secondary">Friday:</h1>
                          <p className="text-light">8:30 AM - 5:30 PM</p>
                        </ListGroup.Item>
                        <ListGroup.Item
                          variant="primary"
                          style={{ background: 'none' }}
                        >
                          <h1 className="text-secondary">Saturday:</h1>
                          <p className="text-light">8:00 AM - 2:30 PM</p>
                        </ListGroup.Item>
                        <ListGroup.Item
                          variant="primary"
                          style={{ background: 'none' }}
                        >
                          <h1 className="text-secondary">Sunday:</h1>
                          <p className="text-light">CLOSED</p>
                        </ListGroup.Item>
                      </ListGroup>
                    </motion.div>
                  </div>
                </Fade>
              </div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                whileInView={{ y: 0, opacity: 1 }}
              >
                <div className="text-center pt-2 pb-4">
                  <motion.a
                    href="https://www.fresha.com/a/fresh-and-faded-barbershop-lower-hutt-1-wainui-road-43fb475l/booking?menu=true"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary px-3 py-2 "
                    style={{
                      background: '#272727',
                      color: 'white',
                      borderColor: 'white',
                    }}
                    aria-controls="example-collapse-text"
                    aria-label="Link to booking page"
                    aria-expanded={open}
                    variants={buttonHoverVariant}
                    whileHover="hover"
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    whileInView={{ y: 0, opacity: 1 }}
                  >
                    Make a Booking
                  </motion.a>
                </div>
                <p className="text-light">
                  *For after-hours bookings, send us a DM on
                  <motion.a
                    className="px-1"
                    whileHover={{ color: 'rgb(180, 34, 34)' }}
                    style={{
                      textDecoration: 'none',
                      color: 'rgb(33, 124, 243)',
                    }}
                    href="https://www.facebook.com/FreshandFadedBarberShop"
                    target="_blank"
                    rel="noreferrer"
                  >
                    facebook
                  </motion.a>
                  or an email*
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
