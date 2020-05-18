import React, { memo } from 'react';
import Link from 'next/link';
import { Row, Container, Col, CardDeck, Card } from 'reactstrap';

const HomePage = () => {
  return (
    <>
      <div className="hero-start">
        <h1 className="title">Welcome to Track Map!</h1>
        <p className="description">
          View Track Map location points, maps and routes.
        </p>
        <Container>
          <div className="lead my-5">
            <Row className="text-center mx-auto my-5">
              <Col className="my-3">
                <i className="fab fa-bootstrap fa-8x text-primary"></i>
              </Col>
              <Col className="my-3">
                <i className="fab fa-sass fa-8x text-danger"></i>
              </Col>
              <Col className="my-3">
                <i className="fab fa-react fa-8x text-info"></i>
              </Col>
              <Col className="my-3">
                <i className="fab fa-aws fa-8x text-secondary"></i>
              </Col>
            </Row>
            <Row className="text-center mx-auto my-5">
              <Col className="my-3">
                <i className="fab fa-css3 fa-8x text-primary"></i>
              </Col>
              <Col className="my-3">
                <i className="fab fa-html5 fa-8x text-danger"></i>
              </Col>
              <Col className="my-3">
                <i className="fab fa-font-awesome fa-8x text-info"></i>
              </Col>
              <Col className="my-3">
                <i className="fab fa-github fa-8x text-secondary"></i>
              </Col>
            </Row>
            <h4>Powered By:</h4>
            <ul>
              <li>
                Built with React framework using classes and functional
                components.
              </li>
              <li>Styled using Bootstrap SCSS.</li>
              <li>Packaged by WebPack.</li>
              <li>Compiled and rendered with Vercel engines.</li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
