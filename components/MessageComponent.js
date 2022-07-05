import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import  Image  from 'next/image';
import MessagePic from '../public/assets/Motive/img/Message.png'

const MessageComponent = () => {
  return (
    <div className="message-bg">
        <Container fluid>
        <Row className="message-outer" style={{height:"100vh", margin:"auto 0"}}>
            <div className="message-inner-container" style={{display:"flex"}}>
                <Col sm={8}className="message-left" style={{ display:"flex", alignItems:"center"}}>
                <Image src={MessagePic} alt="message landing pic" width="1000" height="800vh"></Image>
                </Col>
                <Col sm={4} className="message-right" style={{marginRight: "20px", justifyContent:"center"}}>
                                <h1 style={{ paddingBottom: "20px", fontSize:"3.5rem" }}>Message</h1>
                                <p style={{ fontSize:"1.7rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime minus incidunt, deleniti non optio soluta suscipit modi rerum quaerat unde. Quisquam fugiat vero id voluptatem nisi quos officia recusandae!</p>

                            </Col>
            </div>
        </Row>
        </Container>
    </div>
  )
}

export default MessageComponent