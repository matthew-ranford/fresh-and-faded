import { motion } from 'framer-motion'
import Barbers from './Barbers'
import { Carousel } from 'react-bootstrap'

const buttonHoverVariant = {
  hover: {
    scale: [1, 1.2, 1, 1.2, 1],
    textShadow: '0px 0px 12px rgb(0, 0, 0)',
    boxShadow: '0px 0px 12px rgb(255, 255, 255)',
  },
}

function About() {
  return (
    <>
      <section className="about-section" id="about">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 1.5 }}
        >
          <div className="container-lg">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6 pt-5 mt-5 text-center text-md-start">
                <motion.div
                  className="pt-5"
                  initial={{ x: -100, opacity: 0 }}
                  transition={{ ease: 'linear', duration: 2.5 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <Carousel fade>
                    <Carousel.Item interval={3000}>
                      <motion.img
                        initial={{ y: -20, opacity: -3 }}
                        transition={{ duration: 1 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="img-fluid"
                        style={{ borderRadius: '50%' }}
                        src="client/styles/images/barber-card-logo.png"
                        alt="Barbershop card"
                        text="Company card"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                      <motion.img
                        initial={{ y: -20, opacity: -3 }}
                        transition={{ duration: 1 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="img-fluid"
                        style={{ borderRadius: '50%' }}
                        src="client/styles/images/van-company-logo.png"
                        alt="Barbershop van"
                        text="Company card"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                      <motion.img
                        initial={{ y: -20, opacity: -3 }}
                        transition={{ duration: 1 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="img-fluid"
                        style={{ borderRadius: '50%' }}
                        src="client/styles/images/barbershop-shop.png"
                        alt="Barbershop building"
                        text="Company card"
                      />
                    </Carousel.Item>
                  </Carousel>
                  <p className="my-4 text-center text-light">
                    <motion.div
                      className="font-change"
                      initial={{ opacity: 0, y: 30 }}
                      transition={{ duration: 1 }}
                      whileInView={{ y: 0, opacity: 1 }}
                    >
                      Keeping the mature man fresh & the young man faded
                    </motion.div>
                  </p>

                  <p className="my-4 text-center text-primary">
                    <motion.div
                      className="font-change"
                      initial={{ opacity: 0, y: 30 }}
                      transition={{ duration: 1 }}
                      whileInView={{ y: 0, opacity: 1 }}
                    >
                      Since 2017
                    </motion.div>
                  </p>
                </motion.div>
              </div>
              <div className="col-md-6 pt-5 px-5">
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  transition={{ ease: 'linear', duration: 2.5 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <div className="pb-3">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      transition={{ duration: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                    >
                      <motion.div
                        className="display-3 font-change text-primary text-center"
                        initial={{ opacity: 0, y: -20 }}
                        transition={{ duration: 1 }}
                        whileInView={{ y: 0, opacity: 1 }}
                      >
                        <motion.img
                          className="about-img"
                          src="client/styles/images/about-header-image.png"
                          height={'auto'}
                          width={'450px'}
                          alt="Fresh & Faded Barbershop"
                        />
                      </motion.div>

                      <p className="lead my-2 text-light pt-1 text-center">
                        Come in for a fresh cut, nice fade, beard trim or a cut
                        throat shave!
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      transition={{ duration: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                    >
                      <p className="lead my-4 text-light text-center">
                        Great barber! Great banter! Quality cuts!
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      transition={{ duration: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                    >
                      <p className="lead my-4 text-light text-center">
                        We like to make you feel good!
                      </p>
                    </motion.div>
                    <div className="text-center">
                      <motion.a
                        href="#hours"
                        className="btn btn-primary px-3 py-2 "
                        style={{
                          background: '#272727',
                          color: 'white',
                          borderColor: 'white',
                        }}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        variants={buttonHoverVariant}
                        whileHover="hover"
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                        whileInView={{ y: 0, opacity: 1 }}
                      >
                        Barbershop Hours
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        <Barbers />
      </section>
    </>
  )
}

export default About
