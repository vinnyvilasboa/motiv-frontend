import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import HeroImage from '../public/assets/Motive/img/transparent-hero.png'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Image from "next/image"

const TopComponent = () => {
    return (
        <>
            <div className="background"></div>
            <div className="texture"></div>

            <Container fluid>
                <Row className='section-top'>
                    <Col xs={12} md={6} className='section-top-left'>
                        <div className='p-5'>
                            <h1 className='fw-bold' style={{ fontSize: 70, color: "#263069" }}>Built for</h1>
                            <h1 className='fw-bold' style={{ fontSize: 70, color: "#759DF0" }}>Student Athletes</h1>
                            <h3 style={{ fontSize: 24, marginTop: 15, marginBottom: 30 }}>Motiv is a job marketplace created by student athletes for student athletes.</h3>
                            <Link className="nav-link" href="/signup">
                                <button type="button" className="btn btn-primary btn-lg active" style={{ background: "#5C8CEE" }}>Get Started <i className="fa fa-arrow-right"></i></button>
                            </Link>
                        </div>

                    </Col>
                    <Col xs={12} md={6} className='section-top-right'>
                        <Image src={HeroImage} alt="" width={800}
                            height={700} ></Image>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TopComponent