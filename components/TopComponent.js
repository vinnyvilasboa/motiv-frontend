import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HeroImage from '../public/assets/Motive/img/transparent-hero.png'
import Image from "next/image"

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
                        <Image src={HeroImage} alt="" className="img-fluid" />
                        <h2> TEST</h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TopComponent