import { motion } from 'framer-motion'

const buttonHoverVariant = {
  hover: {
    scale: [1, 1.2, 1, 1.2, 1],
    textShadow: '0px 0px 12px rgb(0, 0, 0)',
    boxShadow: '0px 0px 12px rgb(0, 0, 0)',
  },
}

function Contact() {
  return (
    <>
      <section id="contact" style={{ backgroundColor: 'rgb(240, 234, 234)' }}>
        <div className="container-lg">
          <motion.div
            className="text-center pt-5"
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <h2 className="display-4" style={{ color: 'rgb(31, 99, 224)' }}>
              Get in Touch
            </h2>
            <p className="lead text-dark">
              Questions? Fill out the form to contact me directly!
            </p>
          </motion.div>

          <div className="row justify-content-center my-5 ">
            <div className="col-lg-6">
              <form>
                <label htmlFor="email" className="form-label text-dark">
                  Email Address:
                </label>
                <div className="mb-4 input-group">
                  <span className="input-group-text ">
                    <i className="bi bi-envelope-at-fill"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="e.g. example@example.com"
                  />
                </div>

                <label htmlFor="name" className="form-label text-dark">
                  Name:
                </label>
                <div className="mb-4 input-group">
                  <span className="input-group-text">
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="e.g. name"
                  />
                </div>

                <label htmlFor="subject" className="form-label text-dark">
                  Subject:
                </label>
                <div className="mb-4 input-group">
                  <span className="input-group-text">
                    <i className="bi bi-chat-right-dots-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="subject matter"
                  />
                </div>

                <div className="form-floating mb-4 mt-5">
                  <textarea
                    id="query"
                    className="form-control"
                    style={{ height: '10rem' }}
                  ></textarea>
                  <label htmlFor="query" className="text-dark">
                    Your query..
                  </label>
                </div>

                <div className="mb-4 text-center pb-3">
                  <motion.a
                    variants={buttonHoverVariant}
                    whileHover="hover"
                    className="btn btn-primary px-3 py-2 mb-4 mt-4"
                    style={{
                      background: '#272727',
                      color: 'white',
                      borderColor: 'white',
                    }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.8 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    type="submit"
                    href="mailto: matt.ranford16@gmail.com"
                  >
                    Submit
                  </motion.a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
