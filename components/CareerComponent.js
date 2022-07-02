import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import NextCareer from '../public/assets/Motive/img/Next-Career.png'



const CareerComponent = () => {
    return (
        <>
            <div className="career-bg">
                <Container fluid>
                    <Row className="career-top" style={{ marginBottom:"30px" }}>
                        <Col ></Col>
                        <Col xs={10} className="career-title"  >
                            <h1 style={{ fontSize: '3rem', fontWeight: "700", marginBottom:"30px" }}>Motiv recognizes that is it difficult to balance a rigorous schedule and fine time to identify job opportunities</h1>
                            <p style={{ fontSize: '1.2rem', paddingLeft: "100px", paddingRight: "100px", paddingBottom: "30px" }}>We aim to bridge the gap between a collegiate athletic career and your next professional journey by bringing opportunities to you.</p>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row className="career-bottom">
                        <div className="career-bottom-container" style={{ display: "flex" }}>
                            <Col sm={8}className="career-left">
                                <Image src={NextCareer} width="900" height="650"></Image>
                            </Col>
                            <Col sm={4}className="career-right" style={{ paddingTop: "70px", paddingBottom: "70px", paddingRight: "70px" }}>
                                <h1 style={{ paddingBottom: "20px", fontSize:"3.5rem" }}>Find your Next Career</h1>
                                <p style={{ fontSize:"1.5rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <p style={{ fontSize:"1.5rem" }}>Fugit maxime minus incidunt, deleniti non optio soluta suscipit modi rerum quaerat unde. Quisquam fugiat vero id voluptatem nisi quos officia recusandae!</p>

                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </>

    )
}

export default CareerComponent;