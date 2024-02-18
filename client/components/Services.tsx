import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

function Services() {
  return (
    <section id="product" className="bg-dark pt-5 pb-5">
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Card
          style={{
            width: '18rem',
          }}
        >
          <Card.Img variant="top" src="client/styles/images/featured.png" />
          <Card.Body>
            <Card.Title className="text-primary display-6 text-center">
              Featured
            </Card.Title>
            <Card.Text className="text-center">
              Take a look at some of our current featured services
            </Card.Text>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Men's basic fade or zero fade
                </Accordion.Header>
                <Accordion.Body>30 minutes</Accordion.Body>
                <Accordion.Body>
                  Year 9 - 65 years. Basic fade/Zero fade or Re-Style
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Men's Basic Cut</Accordion.Header>
                <Accordion.Body>15 minutes</Accordion.Body>
                <Accordion.Body>
                  Year 9 - 65 years. One clipper back and sides, trim on top
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Kid's Basic Cut</Accordion.Header>
                <Accordion.Body>15 minutes</Accordion.Body>
                <Accordion.Body>
                  Kindy/Daycare children through to year 8. One clipper, short
                  back and sides, trim on top
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Button variant="primary" className="mt-3">
              Make Booking
            </Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: '18rem',
          }}
        >
          <Card.Img variant="top" src="client/styles/images/scissors.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>Lorem ipsum dolor sit amet.</Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Button variant="primary">Make Booking</Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: '18rem',
          }}
        >
          <Card.Img variant="top" src="client/styles/images/scissors.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Accordion defaultActiveKey="2">
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>Lorem ipsum dolor sit amet.</Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Button variant="primary">Make Booking</Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: '18rem',
          }}
        >
          <Card.Img variant="top" src="client/styles/images/scissors.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Accordion defaultActiveKey="3">
              <Accordion.Item eventKey="3">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>Lorem ipsum dolor sit amet.</Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Button variant="primary">Make Booking</Button>
          </Card.Body>
        </Card>
      </div>
    </section>
  )
}

export default Services
