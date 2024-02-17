import { motion } from 'framer-motion'

const buttonHoverVariant = {
  hover: {
    scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
  },
}

function Contact() {
  return (
    <>
      <section id="contact" className="bg-dark">
        <div className="container-lg text-primary">
          <div className="text-center pt-5">
            <h2>Get in Touch</h2>
            <p className="lead text-secondary">
              Questions? Fill out the form to contact me directly!
            </p>
          </div>

          <div className="row justify-content-center my-5 ">
            <div className="col-lg-6">
              <form>
                <label htmlFor="email" className="form-label">
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

                <label htmlFor="name" className="form-label">
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

                <label htmlFor="subject" className="form-label">
                  Your Question:
                </label>
                <div className="mb-4 input-group">
                  <span className="input-group-text">
                    <i className="bi bi-chat-right-dots-fill"></i>
                  </span>
                  <select id="subject" className="form-select">
                    <option value="Product" selected>
                      Product Query
                    </option>
                    <option value="Pricing">Pricing Query</option>
                    <option value="Other">Other Query</option>
                  </select>
                </div>

                <div className="form-floating mb-4 mt-5">
                  <textarea
                    id="query"
                    className="form-control"
                    // style="height: 10rem"
                  ></textarea>
                  <label htmlFor="query">Your query..</label>
                </div>

                <div className="mb-4 text-center">
                  <motion.a
                    variants={buttonHoverVariant}
                    whileHover="hover"
                    className="btn btn-primary"
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
