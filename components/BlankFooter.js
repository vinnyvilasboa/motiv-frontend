import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

function BlankFooter() {
  return (
    <Container fluid>
        <Row style={{minHeight:"40vh"}} >
            <Col style={{background:'#243374'}}></Col>
        </Row>
    </Container>
  )
}

export default BlankFooter