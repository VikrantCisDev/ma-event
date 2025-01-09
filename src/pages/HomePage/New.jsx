import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const New = () => {
  return (
    <Container>
      <Row>
        <Col sm={8}>smdsfsdf=8</Col>
        <Col sm={4}>sm=4</Col>
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
  )
}

export default New