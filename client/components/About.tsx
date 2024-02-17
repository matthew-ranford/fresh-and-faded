import { motion } from 'framer-motion'

function About() {
  return (
    <>
      <section className="about-section" id="about">
        <div className="container-lg ">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7 d-md-block">
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                transition={{ ease: 'linear', duration: 2.5 }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                drag
                dragConstraints={{
                  top: -20,
                  left: -20,
                  right: 20,
                  bottom: 20,
                }}
                className="img-fluid"
                src="client/styles/images/barbershop-logo.png"
                alt="Barbershop card"
              />
            </div>
            <div className="col-md-5 text-center text-md-start">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                transition={{ ease: 'linear', duration: 2.5 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <h1>
                  <div className="display-4 text-primary">
                    Welcome to Fresh & Faded
                  </div>
                  <div className="display-5 text-secondary p">Barbershop</div>
                </h1>
                <p className="lead my-4 text-secondary">
                  Come in for a fresh cut, nice fade, beard trim or a cut throat
                  shave.
                </p>
                <p className="lead my-4 text-secondary">
                  Great barber! Great banter! Quality cuts!
                </p>
                <p className="lead my-4 text-secondary">
                  We like to make you feel good!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
