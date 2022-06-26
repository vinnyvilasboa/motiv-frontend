import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const TopComponent = () => {
    return (
        <>
            <div className="background"></div>
            <div className="texture"></div>
            <Container className="container-top">
                <Row className='section-top'>
                    <Col xs={12} md={6}>

                    </Col>
                    <Col xs={12} md={6} className='section-top-right'>
                        <img src="../public/assets/Motive/img/Hero-image.png" alt="" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TopComponent