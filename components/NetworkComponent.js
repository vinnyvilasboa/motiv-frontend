import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import SignupIcon from '../public/assets/Motive/icons/SignupIcon.svg'
import SharePlayer from '../public/assets/Motive/icons/SharePlayer.svg'
import ConnectNCAA from '../public/assets/Motive/icons/ConnectNCAA.svg'




const NetworkComponent = () => {
    return (
        <> 
            <div className="network-bg">
                <Container>
                    <Row className="network-top">
                        <Col className="network-title">
                            <h1 style={{ fontSize: '4rem' }}>Get Started & Grow Your Network</h1>
                            <h5 style={{ fontSize: '1.5rem' }}>Motiv's profile creation process is fast and easy.</h5>
                        </Col>
                    </Row>
                    <Row className="network-bottom">
                        <div className="network-container" style={{display:"flex"}}>
                            <Col className="network-details">
                                <div className="card" style={{ width: "18rem", textAlign: "center", borderRadius: "25px" }}>
                                    <div className="card-img-top" style={{ width: "100%", height: "100%", textAlign: "center" }}>
                                        <Image src={SignupIcon}
                                            alt="SIGNUP ICON"
                                            width={120} height={120} />
                                    </div>
                                    <div className="card-body" >
                                        <h3 className="card-text">Sign Up With Your Univerisity Email</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque tempora esse molestiae amet nisi illo obcaecati!</p>
                                    </div>
                                </div>

                            </Col>
                            <Col className="network-details">
                                <div className="card" style={{ width: "18rem", textAlign: "center", borderRadius: "25px" }}>
                                    <div className="card-img-top" style={{ width: "100%", height: "100%", textAlign: "center" }}>
                                        <Image src={SharePlayer}
                                            alt="SIGNUP ICON"
                                            width={120} height={120} />
                                    </div>
                                    <div className="card-body" >
                                        <h3 className="card-text">Share Your <br /> "Player Profile Card"</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque tempora esse molestiae amet nisi illo obcaecati!</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className="network-details">
                                <div className="card" style={{ width: "18rem", textAlign: "center", borderRadius: "25px" }}>
                                    <div className="card-img-top" style={{ width: "100%", height: "100%", textAlign: "center" }}>
                                        <Image src={ConnectNCAA}
                                            alt="SIGNUP ICON"
                                            width={120} height={120} />
                                    </div>
                                    <div className="card-body" >
                                        <h3 className="card-text">Connect with Other NCAA athletes</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque tempora esse molestiae amet nisi illo obcaecati!</p>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </>

    )
}

export default NetworkComponent