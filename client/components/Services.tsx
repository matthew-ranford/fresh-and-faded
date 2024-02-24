import { motion } from 'framer-motion'

function Services() {
  return (
    <>
      <section id="services" className="container pt-5 pb-5">
        <div className=" text-center">
          <h2 className="text-primary">Services</h2>
          <p className="lead text-secondary">
            Checkout the services we offer before making a booking!
          </p>
        </div>
        <div className="container-lg ">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7 d-md-block">
              <img
                className="img-fluid"
                src="client/styles/images/haircut1.png"
                alt="barber giving haircut"
              />
            </div>
            <div className="col-md-5 text-center text-md-end">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <h1>
                  <div className="display-5 text-primary">Haircut</div>
                </h1>

                <p className="lead my-4 text-secondary">
                  Check out many of our hair services that we have on offer!
                </p>
                <div className="mb-4 text-end">
                  <a
                    className="btn btn-primary"
                    type="submit"
                    href="https://www.fresha.com/a/fresh-and-faded-barbershop-lower-hutt-1-wainui-road-43fb475l/booking?menu=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Services!
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="container-lg ">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5 text-center text-md-start">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <h1>
                  <div className="display-5 text-primary">Featured</div>
                </h1>
                <p className="lead my-4 text-secondary">
                  Check out many of our featured services that we have on offer!
                </p>
                <div className="mb-4 text-start">
                  <a
                    className="btn btn-primary"
                    type="submit"
                    href="https://www.fresha.com/a/fresh-and-faded-barbershop-lower-hutt-1-wainui-road-43fb475l/booking?menu=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Services!
                  </a>
                </div>
              </motion.div>
            </div>
            <div
              className="
            col-md-7 d-md-block"
            >
              <div>
                <img
                  className="img-fluid"
                  src="client/styles/images/featured.png"
                  alt="barber giving haircut"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-lg ">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7 d-md-block">
              <img
                className="img-fluid"
                src="client/styles/images/beard1.png"
                alt="barber giving haircut"
              />
            </div>
            <div className="col-md-5 text-center text-md-end">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <h1>
                  <div className="display-5 text-primary">Beard</div>
                </h1>
                <p className="lead my-4 text-secondary">
                  Check out many of our beard services that we have on offer!
                </p>
                <div className="mb-4 text-end">
                  <a
                    className="btn btn-primary"
                    type="submit"
                    href="https://www.fresha.com/a/fresh-and-faded-barbershop-lower-hutt-1-wainui-road-43fb475l/booking?menu=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Services!
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="container-lg ">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5 text-center text-md-start">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <h1>
                  <div className="display-5 text-primary">Combo</div>
                </h1>
                <p className="lead my-4 text-secondary">
                  Check out our combo services that we have on offer!
                </p>
                <div className="mb-4 text-start">
                  <a
                    className="btn btn-primary"
                    type="submit"
                    href="https://www.fresha.com/a/fresh-and-faded-barbershop-lower-hutt-1-wainui-road-43fb475l/booking?menu=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Services!
                  </a>
                </div>
              </motion.div>
            </div>
            <div
              className="
            col-md-7 d-md-block"
            >
              <div>
                <img
                  className="img-fluid"
                  src="client/styles/images/combo1.png"
                  alt="barber giving haircut"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
