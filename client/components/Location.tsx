import ListGroup from 'react-bootstrap/ListGroup'
import { motion } from 'framer-motion'

function Location() {
  return (
    <>
      <section className="location-section">
        <div className="container-lg mb-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7 d-md-block">
              <motion.iframe
                whileHover={{
                  boxShadow: '0px 0px 20px rgb(255, 255, 255)',
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.496136760547!2d174.91503366063242!3d-41.223369735726585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38aa43fdc7206d%3A0xc266558213600c39!2sFresh%20%26%20Faded%20BARBERSHOP!5e0!3m2!1sen!2snz!4v1707807960468!5m2!1sen!2snz"
                width="600"
                height="450"
                title="Map of Fresh & Faded BARBERSHOP location"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></motion.iframe>
            </div>
            <div className="col-md-5 text-center text-md-start">
              <h1>
                <div className="display-4 text-primary">Hours</div>
                {/* <div className="display-5 text-secondary p">Barbershop</div> */}
              </h1>
              <ListGroup className="lead my-4 text-secondary">
                <ListGroup.Item variant="primary">
                  Monday: 8:00 AM - 5:00 PM
                </ListGroup.Item>
                <ListGroup.Item variant="primary">
                  Tuesday: 8:00 AM - 6:00 PM
                </ListGroup.Item>
                <ListGroup.Item variant="primary">
                  Wednesday: 8:00 AM - 6:00 PM
                </ListGroup.Item>
                <ListGroup.Item variant="primary">
                  Thursday: 8:00 AM - 8:00 PM
                </ListGroup.Item>
                <ListGroup.Item variant="primary">
                  Friday: 8:00 AM - 6:00 PM
                </ListGroup.Item>
                <ListGroup.Item variant="primary">
                  Saturday: 8:00 AM - 12:00 PM
                </ListGroup.Item>
                <ListGroup.Item variant="primary">
                  Sunday: CLOSED
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
