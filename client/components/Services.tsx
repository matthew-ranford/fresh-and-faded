import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!')
  )

  return (
    <div className="container-sm text-primary">
      <div className="text-center py-2">
        <button
          type="button"
          className="btn btn-primary"
          // style={{ backgroundColor: 'pink' }}
          onClick={decoratedOnClick}
        >
          {children}
        </button>
      </div>
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="container-xxl pt-5 pb-5">
      <div className=" text-center">
        <h2 className="text-primary">Services</h2>
        <p className="lead text-secondary">
          Checkout the services we offer before making a booking!
        </p>
      </div>
      <div
        className="d-flex flex-row pt-3 mb-3"
        // style={{ display: 'flex', justifyContent: 'space-evenly' }}
      >
        <div className="p-2">
          <Accordion>
            <Card
            // style={{
            //   width: '18rem',
            // }}
            >
              <Card.Header>
                <CustomToggle eventKey="0">Hair Services!</CustomToggle>
              </Card.Header>
              <Card.Img variant="top" src="client/styles/images/haircut.png" />
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Card.Title className="text-primary display-5 text-center">
                    Hair
                  </Card.Title>
                  <Card.Text className="text-center">
                    Take a look at some of our current hair services
                  </Card.Text>
                  <Accordion defaultActiveKey="14">
                    <Accordion.Item eventKey="14">
                      <Accordion.Header>Fathers Special</Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $70
                      </Accordion.Body>
                      <Accordion.Body>45 minutes</Accordion.Body>
                      <Accordion.Body>
                        Any hair cut along with a basic cut throat shave and
                        product to go with you hair cut style (good voucher
                        option)
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="15">
                      <Accordion.Header>Men's Re Style</Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $45
                      </Accordion.Body>
                      <Accordion.Body>30 minutes</Accordion.Body>
                      <Accordion.Body>
                        This service is for anyone wanting a whole new re style
                        of their hair
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="16">
                      <Accordion.Header>Toddle cut 0-4</Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $28
                      </Accordion.Body>
                      <Accordion.Body>25 minutes</Accordion.Body>
                      <Accordion.Body>
                        A good amount of time and patience for the cut. We have
                        time to get through the toddler tantrums, energy and
                        excitement to get the cut done hopefully. We all know
                        how toddlers can be!
                      </Accordion.Body>
                      <Accordion.Body>
                        We supply toy ride on cars and motorbikes for the kids
                        to play on and also kids channels on sky to keep them
                        occupied. (phone or iPad also good to keep kids
                        occupied) We have young kids of our own so we know how
                        it goes with kids 😊
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="17">
                      <Accordion.Header>Zero All Over</Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $15
                      </Accordion.Body>
                      <Accordion.Body>10 minutes</Accordion.Body>
                      <Accordion.Body>Standard zero all over</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="18">
                      <Accordion.Header>
                        Skin Fade (Kids & Men)
                      </Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $47
                      </Accordion.Body>
                      <Accordion.Body>40 minutes</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="19">
                      <Accordion.Header>Head Blade Shave</Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $30
                      </Accordion.Body>
                      <Accordion.Body>15 minutes</Accordion.Body>
                      <Accordion.Body>
                        Clipped zero and straight razored off, hot towel and
                        moisturiser after
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="20">
                      <Accordion.Header>Women's Undercut</Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $33
                      </Accordion.Body>
                      <Accordion.Body>20 minutes</Accordion.Body>
                      <Accordion.Body>
                        Women's undercut, includes lines and some designs
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="21">
                      <Accordion.Header>Kid's Basic Cut </Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $25
                      </Accordion.Body>
                      <Accordion.Body>15 minutes</Accordion.Body>
                      <Accordion.Body>
                        Kindy/Daycare children through to year 8. One clipper,
                        short back and sides, trim on top
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="22">
                      <Accordion.Header>Kid's Style Cut</Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $30
                      </Accordion.Body>
                      <Accordion.Body>30 minutes</Accordion.Body>
                      <Accordion.Body>
                        Kindy/Daycare children through to year 8. Kids basic
                        fade, zero fade lines and designs
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="23">
                      <Accordion.Header>
                        Gold Card Working Senior
                      </Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $25
                      </Accordion.Body>
                      <Accordion.Body>15 minutes</Accordion.Body>
                      <Accordion.Body>Working senior basic cut</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="24">
                      <Accordion.Header>
                        Gold Card Senior (not working)
                      </Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $20
                      </Accordion.Body>
                      <Accordion.Body>10 minutes</Accordion.Body>
                      <Accordion.Body>
                        Non working senior 65+ (gold card holder) Basic cut. Add
                        a Basic Beard trim for $5 extra
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="25">
                      <Accordion.Header>Multiple Clipper Cut</Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $27
                      </Accordion.Body>
                      <Accordion.Body>20 minutes</Accordion.Body>
                      <Accordion.Body>
                        More than one clipper length
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="26">
                      <Accordion.Header>Clipper Cut</Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $22
                      </Accordion.Body>
                      <Accordion.Body>10 minutes</Accordion.Body>
                      <Accordion.Body>
                        One clipper length all over, tapper at back, line up
                        around ears and neck
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="27">
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
                    <Accordion.Item eventKey="28">
                      <Accordion.Header>Men's Basic Cut</Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $35
                      </Accordion.Body>
                      <Accordion.Body>15 minutes</Accordion.Body>
                      <Accordion.Body>
                        Year 9 - 65 years. One clipper back and sides, trim on
                        top
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Button variant="primary" className="mt-3">
                    Make Booking
                  </Button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div className="p-2">
          <Accordion>
            <Card
              // style={{
              //   width: '18rem',
              // }}
              className="card border-primary border-4"
            >
              <Card.Header>
                <CustomToggle eventKey="1">Featured Services!</CustomToggle>
              </Card.Header>
              <Card.Img variant="top" src="client/styles/images/featured.png" />
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Card.Title className="card-header text-primary display-5 text-center mb-2">
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
                        Year 9 - 65 years. One clipper back and sides, trim on
                        top
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Kid's Basic Cut</Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $25
                      </Accordion.Body>
                      <Accordion.Body>15 minutes</Accordion.Body>
                      <Accordion.Body>
                        Kindy/Daycare children through to year 8. One clipper,
                        short back and sides, trim on top
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Kid's Style Cut</Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $30
                      </Accordion.Body>
                      <Accordion.Body>30 minutes</Accordion.Body>
                      <Accordion.Body>
                        Kindy/Daycare children through to year 8. Kids basic
                        fade, zero fade lines and designs
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
                        Non working senior 65+ (gold card holder) Basic cut. Add
                        a Basic Beard trim for $5 extra
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        Skin Fade (Kids & Men)
                      </Accordion.Header>
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
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div className="p-2">
          <Accordion>
            <Card
            // style={{
            //   width: '18rem',
            // }}
            >
              <Card.Header>
                <CustomToggle eventKey="2">Beard Services!</CustomToggle>
              </Card.Header>
              <Card.Img variant="top" src="client/styles/images/beard.png" />
              <Accordion.Collapse eventKey="2">
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
                        Basic of basic beard trims. One length all over, no line
                        up on cheeks or under neck
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                      <Accordion.Header>Senior Beard Trim</Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $12
                      </Accordion.Body>
                      <Accordion.Body>5 minutes</Accordion.Body>
                      <Accordion.Body>
                        Senior beard trim for seniors 65+. One length all over,
                        no line up on cheeks or under neck
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
                      <Accordion.Header>
                        Basic Beard Trim with Cut
                      </Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $19
                      </Accordion.Body>
                      <Accordion.Body>10 minutes</Accordion.Body>
                      <Accordion.Body>
                        Basic trim of beard with light line up of beard line
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="12">
                      <Accordion.Header>
                        Styled Beard Trim with Cut
                      </Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $22
                      </Accordion.Body>
                      <Accordion.Body>15 minutes</Accordion.Body>
                      <Accordion.Body>
                        Styled beard trim with any cut
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="13">
                      <Accordion.Header>Styled Beard Trim</Accordion.Header>
                      <Accordion.Body className="text-center text-primary">
                        NZ $25
                      </Accordion.Body>
                      <Accordion.Body>15 minutes</Accordion.Body>
                      <Accordion.Body>
                        Styled beard trim with line up and sharp edges, shaved
                        fresh
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Button variant="primary" className="mt-3">
                    Make Booking
                  </Button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div className="p-2">
          <Accordion>
            <Card
            // style={{
            //   width: '18rem',
            // }}
            >
              <Card.Header>
                <CustomToggle eventKey="3">Combo Services!</CustomToggle>
              </Card.Header>
              <Card.Img variant="top" src="client/styles/images/combo.png" />
              <Accordion.Collapse eventKey="3">
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
                        Father & son style cut combo with 2x product of your
                        choosing
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Button variant="primary" className="mt-3">
                    Make Booking
                  </Button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Services
