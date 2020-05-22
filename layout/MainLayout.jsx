import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './nav/NavBar';
import Footer from './foot/Footer';
import styles from './MainLayout.module.css';

function MainLayout(mainProps) {
  const { children } = mainProps;

  return (
    <>
      <NavBar />
      <Container fluid className={styles.wrapper}>
        <Row>
          <Col className={styles.wrappercontent}>{children}</Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default MainLayout;
