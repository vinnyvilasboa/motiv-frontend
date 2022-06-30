import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import NextCareer from '../public/assets/Motive/img/Next-Career.png'



const CareerComponent = () => {
    return (
        <> 
            <div className="career-bg">
                <Container fluid>
                    <Row className="career-top">
                    <Col ></Col>
                        <Col xs={8}className="career-title" >
                            <h1 style={{ fontSize: '2.2rem', paddingBottom: "20px", fontWeight:"700"}}>Motiv recognizes that is it difficult to balance a rigorous schedule and fine time to identify job opportunities</h1>
                            <p style={{ fontSize: '1.4rem', paddingLeft:"60px",paddingRight:"60px", paddingBottom:"30px" }}>We aim to bridge the gap between a collegiate athletic career and your next professional journey by bringing opportunities to you.</p>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row className="career-bottom">
                        <div className="career-bottom-container" style={{display:"flex"}}>
                            <Col className="career-left">
                                <Image src={NextCareer} width="900" height="650"></Image>
                            </Col>
                            <Col className="career-right" style={{paddingTop:"70px",paddingBottom:"70px", paddingRight:"70px"}}>
                              <h1 style={{paddingBottom:"20px"}}>Find your Next Career</h1>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                              <p>Fugit maxime minus incidunt, deleniti non optio soluta suscipit modi rerum quaerat unde. Quisquam fugiat vero id voluptatem nisi quos officia recusandae!</p>

                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </>

    )
}

export default CareerComponent