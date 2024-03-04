import { motion } from 'framer-motion'

function Barbers() {
  return (
    <>
      <section className="barbers-section" id="about">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 1.5 }}
        >
          <div className="container-lg about-main">
            <motion.div
              className="text-center pt-5"
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              <h2 className=" display-4 text-primary">Meet The Barbers</h2>
            </motion.div>
            <div className="row justify-content-center align-items-center reverse-col">
              <div className="col-md-5 px-5 text-center text-md-start">
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  transition={{ ease: 'linear', duration: 2.5 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <div className="pb-5 text-center">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      transition={{ duration: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                    >
                      <p className="lead my-4 text-light">
                        Jamie is the founder..
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      transition={{ duration: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                    >
                      <p className="lead my-4 text-light">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laborum quae velit, sint doloremque accusamus
                        esse? Iure aliquid nesciunt velit pariatur!
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      transition={{ duration: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                    >
                      <p className="lead my-4 text-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed magni similique adipisci possimus consectetur
                        sapiente voluptatibus sequi cum delectus corporis!
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              <div className="col-md-5 d-md-block">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  transition={{ ease: 'linear', duration: 2.5 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <div className="image-container pt-5">
                    <motion.img
                      initial={{ y: -20, opacity: -3 }}
                      transition={{ duration: 1 }}
                      whileHover={{
                        boxShadow: '0px 0px 20px rgb(255, 255, 255)',
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
                      style={{ borderRadius: '5%' }}
                      src="client/styles/images/barber-card-logo.png"
                      alt="Barbershop card"
                    />
                    <p className="my-4 text-center text-light">
                      <motion.div
                        className="font-change"
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 1 }}
                        whileInView={{ y: 0, opacity: 1 }}
                      >
                        Jamie Rolton
                      </motion.div>
                    </p>

                    <p className="my-4 text-center text-primary">
                      <motion.div
                        className="font-change"
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 1 }}
                        whileInView={{ y: 0, opacity: 1 }}
                      >
                        Since 2017
                      </motion.div>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 1.5 }}
        >
          <div className="container-lg about-main">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-5 d-md-block">
                <motion.div
                  className="pt-5 d-md-block"
                  initial={{ x: -100, opacity: 0 }}
                  transition={{ ease: 'linear', duration: 2.5 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <div className="image-container">
                    <motion.img
                      initial={{ y: -20, opacity: -3 }}
                      transition={{ duration: 1 }}
                      whileHover={{
                        boxShadow: '0px 0px 20px rgb(255, 255, 255)',
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
                      style={{ borderRadius: '5%' }}
                      src="client/styles/images/barber-card-logo.png"
                      alt="Barbershop card"
                    />
                    <p className="my-4 text-center text-light">
                      <motion.div
                        className="font-change"
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 1 }}
                        whileInView={{ y: 0, opacity: 1 }}
                      >
                        Other barber name here
                      </motion.div>
                    </p>

                    <p className="my-4 text-center text-primary">
                      <motion.div
                        className="font-change"
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 1 }}
                        whileInView={{ y: 0, opacity: 1 }}
                      >
                        Since year
                      </motion.div>
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="col-md-5 px-5 text-center text-md-start">
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  transition={{ ease: 'linear', duration: 2.5 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <div className="pb-5 text-center">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      transition={{ duration: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                    >
                      <p className="lead my-4 text-light">
                        Other barber info..
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      transition={{ duration: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                    >
                      <p className="lead my-4 text-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste similique, magnam recusandae quis libero atque
                        facilis magni possimus ipsam commodi?
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      transition={{ duration: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                    >
                      <p className="lead my-4 text-light">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Saepe, tempore quisquam quam dolorum odit harum
                        libero expedita! Commodi, debitis omnis!
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Barbers
