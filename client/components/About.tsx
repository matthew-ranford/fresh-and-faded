import { motion } from 'framer-motion'

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
      <section className="about-section " id="about">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 1.5 }}
        >
          <div className="container-lg about-main">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6 pt-5 mt-5 text-center text-md-start">
                <motion.div
                  className="pt-5 "
                  initial={{ x: -100, opacity: 0 }}
                  transition={{ ease: 'linear', duration: 2.5 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <h1>
                    <motion.div
                      initial={{ opacity: 0, y: -50 }}
                      transition={{ duration: 1 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      className="display-6 text-center"
                      style={{ color: 'rgb(180, 34, 34)' }}
                    >
                      {/* <div style={{ color: 'rgb(31, 99, 224)' }}>Welcome to</div> */}
                      <motion.div
                        className=" display-1 font-change"
                        initial={{ opacity: 0, y: -50 }}
                        transition={{ duration: 1 }}
                        whileInView={{ y: 0, opacity: 1 }}
                      >
                        Fresh & Faded
                      </motion.div>
                    </motion.div>
                  </h1>
                  <motion.img
                    initial={{ y: 70, opacity: 0 }}
                    transition={{ ease: 'linear', duration: 1 }}
                    whileHover={{
                      scale: [1, 1.1, 1, 1.1, 1],
                    }}
                    whileInView={{ y: 0, opacity: 1 }}
                    drag
                    dragConstraints={{
                      top: -20,
                      left: -20,
                      right: 20,
                      bottom: 20,
                    }}
                    className="img-fluid"
                    src="client/styles/images/barbershop-hero2.png"
                    alt="Barbershop card"
                  />
                </motion.div>
                <p
                  className="my-4 text-center"
                  style={{ color: 'rgb(255, 255, 255)' }}
                >
                  <motion.div
                    className="font-change"
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                    whileInView={{ y: 0, opacity: 1 }}
                  >
                    Keeping the mature man fresh & the young man faded
                  </motion.div>
                </p>
              </div>
              <div className="col-md-6 pt-5 mt-5 px-5">
                <div className="pb-3">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 1 }}
                    whileInView={{ x: 0, opacity: 1 }}
                  >
                    <p
                      className="lead my-4"
                      style={{ color: 'rgb(255, 255, 255)' }}
                    >
                      Come in for a fresh cut, nice fade, beard trim or a cut
                      throat shave.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 1 }}
                    whileInView={{ x: 0, opacity: 1 }}
                  >
                    <p
                      className="lead my-4"
                      style={{ color: 'rgb(255, 255, 255)' }}
                    >
                      Great barber! Great banter! Quality cuts!
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 1 }}
                    whileInView={{ x: 0, opacity: 1 }}
                  >
                    <p
                      className="lead my-4"
                      style={{ color: 'rgb(255, 255, 255)' }}
                    >
                      We like to make you feel good!
                    </p>
                  </motion.div>
                  <motion.a
                    href="#hours"
                    className="btn btn-primary px-3 py-2 mt-2"
                    style={{
                      background: '#272727',
                      color: 'white',
                      borderColor: 'white',
                    }}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    variants={buttonHoverVariant}
                    whileHover="hover"
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.8 }}
                    whileInView={{ y: 0, opacity: 1 }}
                  >
                    Barbershop Hours!
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default About
