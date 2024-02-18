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
            <Card.Title className="text-primary display-5 text-center">
              Featured
            </Card.Title>
            <Card.Text className="text-center">
              Take a look at some of our current featured services
            </Card.Text>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Men's Basic Fade or Zero Fade
                </Accordion.Header>
                <Accordion.Body className="text-center text-primary">
                  NZ $40
                </Accordion.Body>
                <Accordion.Body>30 minutes</Accordion.Body>
                <Accordion.Body>
                  Year 9 - 65 years. Basic fade/Zero fade or Re-Style
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Men's Basic Cut</Accordion.Header>
                <Accordion.Body className="text-center text-primary">
                  NZ $35
                </Accordion.Body>
                <Accordion.Body>15 minutes</Accordion.Body>
                <Accordion.Body>
                  Year 9 - 65 years. One clipper back and sides, trim on top
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Kid's Basic Cut</Accordion.Header>
                <Accordion.Body className="text-center text-primary">
                  NZ $25
                </Accordion.Body>
                <Accordion.Body>15 minutes</Accordion.Body>
                <Accordion.Body>
                  Kindy/Daycare children through to year 8. One clipper, short
                  back and sides, trim on top
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Kid's Style Cut</Accordion.Header>
                <Accordion.Body className="text-center text-primary">
                  NZ $30
                </Accordion.Body>
                <Accordion.Body>30 minutes</Accordion.Body>
                <Accordion.Body>
                  Kindy/Daycare children through to year 8. Kids basic fade,
                  zero fade lines and designs
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Gold Card Senior (not working)
                </Accordion.Header>
                <Accordion.Body className="text-center text-primary">
                  NZ $20
                </Accordion.Body>
                <Accordion.Body>10 minutes</Accordion.Body>
                <Accordion.Body>
                  Non working senior 65+ (gold card holder) Basic cut. Add a
                  Basic Beard trim for $5 extra
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Skin Fade (Kids & Men)</Accordion.Header>
                <Accordion.Body className="text-center text-primary">
                  NZ $47
                </Accordion.Body>
                <Accordion.Body>40 minutes</Accordion.Body>
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
          <Card.Img variant="top" src="client/styles/images/haircut.png" />
          <Card.Body>
            <Card.Title className="text-primary display-5 text-center">
              Hair
            </Card.Title>
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
          <Card.Img variant="top" src="client/styles/images/beard.png" />
          <Card.Body>
            <Card.Title className="text-primary display-6 text-center">
              Beard Services
            </Card.Title>
            <Card.Text className="text-center">
              Take a look at some of our current beard services
            </Card.Text>
            <Accordion defaultActiveKey="7">
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  Basic of the basic beard trim
                </Accordion.Header>
                <Accordion.Body className="text-center text-primary">
                  NZ $15
                </Accordion.Body>
                <Accordion.Body>5 minutes</Accordion.Body>
                <Accordion.Body>
                  Basic of basic beard trims. One length all over, no line up on
                  cheeks or under neck
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>Senior Beard Trim</Accordion.Header>
                <Accordion.Body className="text-center text-primary">
                  NZ $12
                </Accordion.Body>
                <Accordion.Body>5 minutes</Accordion.Body>
                <Accordion.Body>
                  Senior beard trim for seniors 65+. One length all over, no
                  line up on cheeks or under neck
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>
                  Traditional Hot Towel Cut Throat Shave with Haircut
                </Accordion.Header>
                <Accordion.Body className="text-center text-primary">
                  NZ $85
                </Accordion.Body>
                <Accordion.Body>1 hour 15 minutes</Accordion.Body>
                <Accordion.Body>
                  Traditional deluxe hot towel shave with haircut chosen
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>
                  Traditional Hot Towel Cut Throat Shave
                </Accordion.Header>
                <Accordion.Body className="text-center text-primary">
                  NZ $60
                </Accordion.Body>
                <Accordion.Body>45 minutes</Accordion.Body>
                <Accordion.Body>
                  Full deluxe hot towel shave (Very relaxing! Highly
                  Recommended!)
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>Basic Beard Trim with Cut</Accordion.Header>
                <Accordion.Body className="text-center text-primary">
                  NZ $19
                </Accordion.Body>
                <Accordion.Body>10 minutes</Accordion.Body>
                <Accordion.Body>
                  Basic trim of beard with light line up of beard line
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header>Styled Beard Trim with Cut</Accordion.Header>
                <Accordion.Body className="text-center text-primary">
                  NZ $22
                </Accordion.Body>
                <Accordion.Body>15 minutes</Accordion.Body>
                <Accordion.Body>Styled beard trim with any cut</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="13">
                <Accordion.Header>Styled Beard Trim</Accordion.Header>
                <Accordion.Body className="text-center text-primary">
                  NZ $25
                </Accordion.Body>
                <Accordion.Body>15 minutes</Accordion.Body>
                <Accordion.Body>
                  Styled beard trim with line up and sharp edges, shaved fresh
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
          <Card.Img variant="top" src="client/styles/images/combo.png" />
          <Card.Body>
            <Card.Title className="text-primary display-6 text-center">
              Combo
            </Card.Title>
            <Card.Text className="text-center">
              Take a look at our current father son combo deal
            </Card.Text>
            <Accordion defaultActiveKey="6">
              <Accordion.Item eventKey="6">
                <Accordion.Header>Father Son Combo</Accordion.Header>
                <Accordion.Body className="text-center text-primary">
                  NZ $85
                </Accordion.Body>
                <Accordion.Body>45 minutes</Accordion.Body>
                <Accordion.Body>
                  Father & son style cut combo with 2x product of your choosing
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Button variant="primary" className="mt-3">
              Make Booking
            </Button>
          </Card.Body>
        </Card>
      </div>
    </section>
  )
}

export default Services
