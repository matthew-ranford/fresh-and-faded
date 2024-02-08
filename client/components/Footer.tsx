import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {
  return (
    <Container fluid="md">
      <Row className="text-center justify-content-center mb-3">
        <Col xs={2}>
          {/* <span className="input-group-text"> */}
          <i className="bi bi-facebook display-5"></i>
          {/* </span> */}
        </Col>
        <Col xs={2}>
          {/* <span className="input-group-text"> */}
          <i className="bi bi-instagram display-5"></i>
          {/* </span> */}
        </Col>
        <Col xs={2}>
          {/* <span className="input-group-text"> */}
          <i className="bi bi-telephone display-5"></i>
          {/* </span> */}
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
