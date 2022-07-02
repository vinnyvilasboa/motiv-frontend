import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const BottomComponent = () => {
  return (
    <div className="bottom-bg">
                <Container fluid>
                <Row className="bottom-container">
                        <Col ></Col>
                        <Col xs={8} className="bottom-title" style={{justifyContent:"center", textAlign:"center",color:"#fff"}}>
                            <h1 style={{ fontSize: '3.2rem', paddingBottom: "20px", fontWeight: "700" }}>Gain The Competitive Edge You Deserve</h1>
                            <p style={{ fontSize: '1.4rem', paddingLeft: "60px", paddingRight: "60px", paddingBottom: "30px" }}>We aim to democratize how student athletes are hired by creating a competitive landscape that allows for equal opportunities. Student athletes have a unique set of skill sets that are highly desirable to employers and we seek to showcase that.</p>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
  )
}

export default BottomComponent