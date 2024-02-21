import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Stack from 'react-bootstrap/Stack'

function Services() {
  return (
    <>
      <section id="services" className="container pt-5 pb-5">
        <Container className="bg-light">
          <Row>
            <Col>
              <img
                className="img-fluid"
                src="client/styles/images/haircut.png"
                alt="Barbershop card"
              />
            </Col>
            <Col className="pt-5  text-center">
              Checkout some of our hair services
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>Checkout some of our featured services</Col>
            <Col>
              <img
                className="img-fluid"
                src="client/styles/images/featured.png"
                alt="Barbershop card"
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <img
                className="img-fluid"
                src="client/styles/images/beard.png"
                alt="Barbershop card"
              />
            </Col>
            <Col>Checkout some of our beard services</Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>Checkout some of our combo services</Col>
            <Col>
              <img
                className="img-fluid"
                src="client/styles/images/combo.png"
                alt="Barbershop card"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Services
