import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const NetworkComponent = () => {
  return (
      <>
    <Container>
        <Row className="network-top">
            <Col>top</Col>
        </Row>
        <Row className="network-bottom">
            <Col>Left</Col>
            <Col sx={6}>Middle Wide</Col>
            <Col>Right</Col>
        </Row>
    </Container>
      </>
   
  )
}

export default NetworkComponent