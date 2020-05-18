import React, { memo } from 'react';
import { Container, Row, Col } from 'reactstrap';

const AboutPage = memo(props => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12" id="profile">
            <h1>About</h1>
            <Container>
              <Row>
                <Col xs="12" lg="12" className="mx-auto">
                  <div className="text-center">
                    <h1 className="font-head-base text-dark mt-5">
                      Chief Geek
                      <small className="h5 d-block">Cristov</small>
                    </h1>
                    <Col xs="10" md="5" className="mx-auto">
                      <img
                        src="/images/profile12.jpg"
                        className="rounded-circle img-thumbnail mt-5"
                        alt="Profile"
                      />
                    </Col>
                    <div className="text-dark mt-5">
                      <p className="lead my-4 mx-0 mx-sm-auto">
                        Born inside a server room, raised by a family of Alpha 1
                        Pro Humanoid robots, Cris acquired a taste for all
                        things tech while growing up. Nowadays he's found
                        tapping away at keyboards creating webapps, mobile apps,
                        serverless systems and even dabbles with machine
                        learning.
                      </p>
                      <hr className="col-3 col-lg-3 mx-auto" />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
});

export default AboutPage;
