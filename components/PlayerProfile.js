import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import PlayerPic from '../public/assets/Motive/img/Player-Profile.png'



const PlayerProfile = () => {
    return (
        <>
            <div className="player-bg">
                <Container fluid>
                    <Row className="player-outer" style={{height:"100vh", margin:"auto 0"}}>
                        <div className="player-inner-container" style={{ display: "flex" }}>
                            <Col sm={4}className="player-left" style={{marginLeft: "20px", justifyContent:"center"}}>
                                <h1 style={{ paddingBottom: "20px", fontSize:"3.5rem" }}>Player Profile</h1>
                                <p style={{ fontSize:"1.7rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime minus incidunt, deleniti non optio soluta suscipit modi rerum quaerat unde. Quisquam fugiat vero id voluptatem nisi quos officia recusandae!</p>

                            </Col>
                            <Col sm={8}className="player-right"  style={{justifyContent:"center", alignItems:"center", margin:"auto 0"}}>
                                <Image src={PlayerPic} width="1000" height="900"></Image>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </>

    )
}

export default PlayerProfile