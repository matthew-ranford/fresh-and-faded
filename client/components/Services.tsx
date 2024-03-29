import { motion } from 'framer-motion'

import servicesHeader from '../styles/images/services.png'
import walkIn from '../styles/images/walk-in.png'
import haircut from '../styles/images/haircut1.png'
import featured from '../styles/images/featured.png'
import beard from '../styles/images/beard1.png'
import combo from '../styles/images/combo1.png'

const buttonHoverVariant = {
  hover: {
    scale: [1, 1.2, 1, 1.2, 1],
    textShadow: '0px 0px 12px rgb(0, 0, 0)',
    boxShadow: '0px 0px 12px rgb(255, 255, 255)',
  },
}

function Services() {
  return (
    <>
      <section id="services" className="container pt-5 pb-5">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          <motion.img
            className="responsive-img"
            src={servicesHeader}
            height={'auto'}
            width={'1000px'}
            alt="Services We Have"
          />
          <p className="lead text-light mb-4 pb-3 pt-4">
            Checkout the services we offer before making a booking!
          </p>
        </motion.div>
        <div className="container-lg">
          <div className="row justify-content-center align-items-center reverse-col">
            <div className="col-md-5 text-center text-md-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 1.5 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <h1>
                  <div className="display-5 text-primary services-font-change">
                    Walk-Ins
                  </div>
                </h1>
                <p className="lead my-4 text-light">
                  Check out our current walk-in times!
                </p>
                <motion.a
                  href="#walk-in"
                  className="btn btn-primary px-3 py-2 mb-4"
                  style={{
                    background: '#272727',
                    color: 'white',
                    borderColor: 'white',
                  }}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  variants={buttonHoverVariant}
                  whileHover="hover"
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.8 }}
                  whileInView={{ x: 0, opacity: 1 }}
                >
                  Hours
                </motion.a>
              </motion.div>
            </div>
            <div
              className="
            col-md-7 d-md-block"
            >
              <div className="d-md-block">
                <motion.img
                  className="img-fluid"
                  src={walkIn}
                  alt="Walk in open door"
                  initial={{ opacity: 0, x: 20 }}
                  transition={{ duration: 1.5 }}
                  whileInView={{ x: 0, opacity: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-lg">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7 d-md-block">
              <motion.img
                className="img-fluid"
                src={haircut}
                alt="barber giving haircut"
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 1.5 }}
                whileInView={{ x: 0, opacity: 1 }}
              />
            </div>
            <div className="col-md-5 text-center text-md-end">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                transition={{ duration: 1.5 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <h1>
                  <div className="display-5 text-primary services-font-change">
                    Haircut
                  </div>
                </h1>

                <p className="lead my-4 text-light">
                  Check out many of our hair services that we have on offer!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="container-lg">
          <div className="row justify-content-center align-items-center reverse-col">
            <div className="col-md-5 text-center text-md-start pb-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 1.5 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <h1>
                  <div className="display-5 text-primary services-font-change">
                    Featured
                  </div>
                </h1>
                <p className="lead my-4 text-light">
                  Check out many of our featured services that we have on offer!
                </p>
              </motion.div>
            </div>
            <div
              className="
            col-md-7 d-md-block"
            >
              <div className="d-md-block">
                <motion.img
                  className="img-fluid"
                  src={featured}
                  alt="Orange star symbol"
                  initial={{ opacity: 0, x: 20 }}
                  transition={{ duration: 1.5 }}
                  whileInView={{ x: 0, opacity: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-lg">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7 d-md-block">
              <motion.img
                className="img-fluid"
                src={beard}
                alt="Skull with beard"
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 1.5 }}
                whileInView={{ x: 0, opacity: 1 }}
              />
            </div>
            <div className="col-md-5 text-center text-md-end">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                transition={{ duration: 1.5 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <h1>
                  <div className="display-5 text-primary services-font-change">
                    Beard
                  </div>
                </h1>
                <p className="lead my-4 text-light">
                  Check out many of our beard services that we have on offer!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="container-lg ">
          <div className="row justify-content-center align-items-center reverse-col">
            <div className="col-md-5 text-center text-md-start pb-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 1.5 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <h1>
                  <div className="display-5 text-primary services-font-change">
                    Combo
                  </div>
                </h1>
                <p className="lead my-4 text-light">
                  Check out our combo services that we have on offer!
                </p>
              </motion.div>
            </div>
            <div
              className="
            col-md-7 d-md-block"
            >
              <div className="d-md-block">
                <motion.img
                  className="img-fluid"
                  src={combo}
                  alt="Father holding son's hand"
                  initial={{ opacity: 0, x: 20 }}
                  transition={{ duration: 1.5 }}
                  whileInView={{ x: 0, opacity: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 text-center mt-4">
          <motion.a
            variants={buttonHoverVariant}
            whileHover="hover"
            className="btn btn-primary px-3 py-2"
            style={{
              background: '#272727',
              color: 'white',
              borderColor: 'white',
            }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
            whileInView={{ y: 0, opacity: 1 }}
            type="submit"
            href="https://www.fresha.com/a/fresh-and-faded-barbershop-lower-hutt-1-wainui-road-43fb475l/booking?menu=true"
            aria-label="Link to booking page"
            target="_blank"
            rel="noreferrer"
          >
            Check Services
          </motion.a>
        </div>
      </section>
    </>
  )
}

export default Services
