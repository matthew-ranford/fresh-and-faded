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
          <div className="container-lg">
            <motion.div
              className="text-center pt-5"
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              <h2 className=" display-4 text-primary">Meet The Barbers</h2>
            </motion.div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-5 pt-5">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  transition={{ ease: 'linear', duration: 2.5 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <div className="image-container">
                    <motion.img
                      initial={{ x: -20, opacity: -3 }}
                      transition={{ duration: 1 }}
                      whileHover={{
                        boxShadow: '0px 0px 20px rgb(255, 255, 255)',
                      }}
                      whileInView={{ x: 0, opacity: 1 }}
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
                    <p className="my-4 pt-2 text-center text-light">
                      <motion.div
                        className="font-change"
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 1 }}
                        whileInView={{ y: 0, opacity: 1 }}
                      >
                        Jamie Rolton
                      </motion.div>
                    </p>

                    <p className="text-center text-primary">
                      <motion.div
                        className="font-change"
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 1 }}
                        whileInView={{ y: 0, opacity: 1 }}
                      >
                        Since 2017
                      </motion.div>
                    </p>
                    <div className="pb-3 pt-3 text-center">
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        transition={{ duration: 1 }}
                        whileInView={{ x: 0, opacity: 1 }}
                      >
                        <p className="lead my-4 text-light">
                          Jamie barber info..
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        transition={{ duration: 1 }}
                        whileInView={{ x: 0, opacity: 1 }}
                      >
                        <p className="lead my-4 text-light">More text..</p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        transition={{ duration: 1 }}
                        whileInView={{ x: 0, opacity: 1 }}
                      >
                        <p className="lead my-4 text-light">More text..</p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="col-md-5 pt-5">
                <div className="image-container">
                  <motion.img
                    initial={{ x: 20, opacity: -3 }}
                    transition={{ duration: 1 }}
                    whileHover={{
                      boxShadow: '0px 0px 20px rgb(255, 255, 255)',
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
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
                  <p className="my-4 pt-2 text-center text-light">
                    <motion.div
                      className="font-change"
                      initial={{ opacity: 0, y: 50 }}
                      transition={{ duration: 1 }}
                      whileInView={{ y: 0, opacity: 1 }}
                    >
                      Other barber name here
                    </motion.div>
                  </p>

                  <p className="text-center text-primary">
                    <motion.div
                      className="font-change"
                      initial={{ opacity: 0, y: 50 }}
                      transition={{ duration: 1 }}
                      whileInView={{ y: 0, opacity: 1 }}
                    >
                      Since year
                    </motion.div>
                  </p>
                  <div className="pb-3 pt-3 text-center">
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
                      <p className="lead my-4 text-light">More text..</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      transition={{ duration: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                    >
                      <p className="lead my-4 text-light">More text..</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Barbers
