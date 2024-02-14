import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {
  return (
    <Container fluid="md">
      <Row className="text-center justify-content-center pb-3">
        <Col xs={2}>
          {/* <span className="input-group-text"> */}
          <a
            href="https://www.facebook.com/FreshandFadedBarberShop"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-facebook display-5"></i>
          </a>
          {/* </span> */}
        </Col>
        <Col xs={2}>
          {/* <span className="input-group-text"> */}
          <a
            href="https://www.instagram.com/freshandfaded17/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-instagram display-5"></i>
          </a>
          {/* </span> */}
        </Col>
        <Col xs={2}>
          {/* <span className="input-group-text"> */}
          <a href="tel: 021 243 7374">
            <i className="bi bi-telephone display-5"></i>
          </a>
          {/* </span> */}
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
