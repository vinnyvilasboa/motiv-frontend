import React from 'react'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col, Img } from 'react-bootstrap'
import styles from "../styles/network.module.css";
import SignupIcon from '../public/assets/Motive/icons/SignupIcon.svg'
import SharePlayer from '../public/assets/Motive/icons/SharePlayer.svg'
import ConnectNCAA from '../public/assets/Motive/icons/ConnectNCAA.svg'
import MotivLogo from '../public/assets/Motive/icons/motivLogo.png'




const NetworkComponent = () => {
    return (
        <>
            <div className="network-bg">

                <Container fluid className="text-center">
                    <Row>
                        <h1 className={styles.sectionTitle}>Get Started and Grow your Network</h1>
                    </Row>
                    <Row>
                        <p className="styles sectionText">
                            Motiv's Profile creation process is fast and easy
                        </p>
                    </Row>
                    

                </Container>
                <Container fluid >
                        <Row className={styles.iconsCenter}>
                            <Col sm={4} className={styles.iconCol}>
                                <Card className={styles.iconCard}>

                                    <Card.Img variant="top" src={SignupIcon} />
                                    <Card.Body>
                                        <Card.Title>Sign Up With Your Univerisity Email</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={4} className={styles.iconCol}>
                            <Card className={styles.iconCard}>
                                    <Card.Img variant="top" src={SharePlayer} />
                                    <Card.Body>
                                        <Card.Title>Share Your <br /> "Player Profile Card"</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={4} className={styles.iconCol}>
                            <Card Card className={styles.iconCard}>
                                    <Card.Img variant="top" src={ConnectNCAA} />
                                    <Card.Body>
                                        <Card.Title>Connect with Other NCAA athletes</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Container>
            </div>
        </>

    )
}

export default NetworkComponent
{/* <Container>
    <Row className="network-top">
        <Col className="network-title">
            <h1 style={{ fontSize: '4rem' }}>Get Started & Grow Your Network</h1>
            <h5 style={{ fontSize: '1.5rem' }}>Motiv's profile creation process is fast and easy.</h5>
        </Col>
    </Row> */}
{/* <Row className="network-bottom">
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
    </Row> */}
{/* </Container> */ }