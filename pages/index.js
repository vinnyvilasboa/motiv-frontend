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
				<title>Motiv App</title>
			</Head>
			<main>
				<HeroComponent />
				<div className={styles.networkBG}>
               
					<TextSection
						title="Get Started and Grow your Network"
						subtitle="Motiv's Profile creation process is fast and easy"
					/>
                   
					<Container fluid>
						<Row className={styles.iconsCenter}>
							<Col sm={4} md={4} className={styles.iconCol}>
								<Image
									src={
										require("../public/assets/Motive/icons/SignupIcon.svg")
											.default.src
									}
									width={100}
									height={100}
									className={styles.icons}
								/>
								<h3 className={styles.iconText}>
									Sign Up <br /> With Your Univerisity Email
								</h3>
								<p className={styles.subtext}>
									lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
									ipsum dolor sit amet consectetur adipis
								</p>
							</Col>
							<Col sm={4} md={4} className={styles.iconCol}>
								<Image
									src={
										require("../public/assets/Motive/icons/SharePlayer.svg")
											.default.src
									}
									width={100}
									height={100}
									className={styles.icons}
								/>
								<h3 className={styles.iconText}>
									Share Your <br /> "Player Profile Card"
								</h3>
								<p className={styles.subtext}>
									lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
									ipsum dolor sit amet consectetur adipis
								</p>
							</Col>
							<Col sm={4} md={4} className={styles.iconCol}>
								<Image
									src={
										require("../public/assets/Motive/icons/ConnectNCAA.svg")
											.default.src
									}
									width={100}
									height={100}
									className={styles.icons}
								/>
								<h3 className={styles.iconText}>
									Connect <br /> with Other NCAA athletes
								</h3>
								<p className={styles.subtext}>
									lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
									ipsum dolor sit amet consectetur adipis
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
