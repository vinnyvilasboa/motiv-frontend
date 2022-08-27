import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import TwoColumn, { TextColumn } from "../components/TwoColumn";
import HeroComponent from "../components/HeroComponent";
import Footer from "../components/Footer";

import NextCareerPic from "../public/assets/Motive/img/Next-Career.png";
import PlayerPic from "../public/assets/Motive/img/Player-Profile.png";
import MessagePic from "../public/assets/Motive/img/Message.png";

import styles from "../styles/index.module.css";
import TextSection from "../components/TextSection";

export default function Home() {
    return (
        <>
            <Head>
                <title>Motiv ®</title>
                <link rel="icon" href="/favicon.ico" />

            </Head>
            <main>
                <HeroComponent />
                <div className={styles.networkBG}>

                    <TextSection
                        title="Get Started and Grow your Network"
                        subtitle="Motiv's Profile creation process is fast and easy"
                    />

                    <Container fluid className={styles.networkContainer}>
                        <Row className={styles.networkRow} style={{marginTop:"20px"}}>
                            {/* 1 */}
                            <Col xs={8} sm={8} md={4} lg={3} className={styles.networkCol}>
                                <div className={styles.networkIconsContainer}>
                                    <Image
                                        src={
                                            require("../public/assets/Motive/icons/SignupIcon.svg").default
                                                .src
                                        }
                                        width={60}
                                        height={60}
                                        className={styles.networkIcons}
                                    />
                                </div>
                                <h4 className={styles.networkText}>Sign up with your university email</h4>
                                <p className={styles.networkSubtext}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien quam.
                                </p>
                            </Col>
                            {/* 2 */}
                            <Col xs={8} sm={8} md={4} lg={3}  className={styles.networkCol}>
                                <div className={styles.networkIconsContainer}>
                                    <Image
                                        src={
                                            require("../public/assets/Motive/icons/SharePlayer.svg").default
                                                .src
                                        }
                                        width={60}
                                        height={60}
                                        className={styles.networkIcons}
                                    />
                                </div>
                                <h4 className={styles.networkText}>Share your
                                    <br/> "Player Profile Card"</h4>
                                <p className={styles.networkSubtext}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien quam.
                                </p>
                            </Col>
                            {/* 3 */}
                            <Col xs={8} sm={8} md={4} lg={3}  className={styles.networkCol}>
                                <div className={styles.networkIconsContainer}>
                                    <Image
                                        src={
                                            require("../public/assets/Motive/icons/ConnectNCAA.svg").default
                                                .src
                                        }
                                        width={60}
                                        height={60}
                                        className={styles.networkIcons}
                                    />
                                </div>
                                <h4 className={styles.networkText}>Connect with <br/> NCAA athletes & companies</h4>
                                <p className={styles.networkSubtext}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien quam.
                                </p>
                            </Col>
                        </Row>

                    </Container>
                </div>
                {/* <NetworkComponent /> */}
                <div className={styles.careerBG}>
                    <TextSection
                        
                        title="Motiv recognizes that is it difficult to balance a rigorous schedule and find time to identify job opportunities."
                        subtitle="We aim to bridge the gap between a collegiate athletic career and your next professional journey by bringing opportunities to you."
                    />
                    {/* Find Your Next Career section */}
                    <Row></Row>
                    <TwoColumn
                        leftColumnWidth={8}
                        leftColumn={
                            <div style={{ position: "relative", width: "100%" }}>
                                <Image
                                    src={NextCareerPic}
                                    alt="Next career image"
                                    objectFit="contain"
                                />
                            </div>
                        }
                        rightColumnWidth={4}
                        rightColumn={
                            <TextColumn title="Find your Next Career">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p>
                                    Fugit maxime minus incidunt, deleniti non optio soluta suscipit
                                    modi rerum quaerat unde. Quisquam fugiat vero id voluptatem nisi
                                    quos officia recusandae!
                                </p>
                            </TextColumn>

                        }
                    />
                </div>
                {/* Player Profile Section */}
                <div style={{background:"white"}}>
                <TwoColumn
                    leftColumnWidth={6}
                    leftColumn={
                        <TextColumn title="Player Profile">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                                maxime minus incidunt, deleniti non optio soluta suscipit modi
                                rerum quaerat unde. Quisquam fugiat vero id voluptatem nisi quos
                                officia recusandae!
                            </p>
                        </TextColumn>
                        
                    }
                    rightColumnWidth={6}
                    rightColumn={
                        <div style={{ position: "relative", width: "100%" }}>
                            <Image
                                src={PlayerPic}
                                alt="Player Profiles"
                                objectFit="contain"
                            />
                        </div>
                    }
                />
                
                {/* Message Section */}
                
                <TwoColumn
                    leftColumnWidth={8}
                    leftColumn={
                        <div style={{ position: "relative", width: "100%" }}>
                            <Image src={MessagePic} alt="Messages" objectFit="contain" />
                        </div>
                    }
                    rightColumnWidth={4}
                    rightColumn={
                        <TextColumn title="Message">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                                maxime minus incidunt, deleniti non optio soluta suscipit modi
                                rerum quaerat unde. Quisquam fugiat vero id voluptatem nisi quos
                                officia recusandae!
                            </p>
                        </TextColumn>
                    }
                    
                />
                </div>
                {/* Footer Header Section */}
                <Container fluid className={styles.footerHeader + " text-center"}>
                    <h1 className={styles.footerHeaderTitle}>
                        Gain The Competitive Edge You Deserve
                    </h1>
                    <p className={styles.footerHeaderSubtitle}>
                        We aim to democratize how student athletes are hired by creating a
                        competitive landscape that allows for equal opportunities. Student
                        athletes have a unique set of skill sets that are highly desirable
                        to employers and we seek to showcase that.
                    </p>
                </Container>
            </main>
            <Footer />
        </>
    );
}
