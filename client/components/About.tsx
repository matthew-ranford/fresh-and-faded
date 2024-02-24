import { motion } from 'framer-motion'

function About() {
  return (
    <>
      <section className="about-section mb-5" id="about">
        <div className="container-lg">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7 d-none d-md-block mt-5 pt-5">
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
                src="client/styles/images/hero-image.png"
                alt="Barbershop card"
              />
            </div>
            <div className="col-md-5 text-center text-md-start">
              <motion.div
                className="pt-5"
                initial={{ x: 100, opacity: 0 }}
                transition={{ ease: 'linear', duration: 2.5 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <h1>
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="display-4 mt-5 pt-5"
                    style={{ color: 'rgb(180, 34, 34)' }}
                  >
                    Welcome to Fresh & Faded
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="display-5 p"
                    style={{ color: 'rgb(31, 99, 224)' }}
                  >
                    Barbershop
                  </motion.div>
                </h1>
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
