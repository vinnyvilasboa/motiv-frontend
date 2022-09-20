import Head from "next/head";
import AboutIcons from "../components/AboutIcons";
import TwoColumn from "../components/TwoColumn";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import TextSection from "../components/TextSection";
import Footer from "../components/Footer";

import styles from "../styles/about.module.css";
import textSectionStyles from "../styles/textSection.module.css";

function PersonCard({ src, name, description }) {
	return (

		<Card
			style={{
				width: 360,
				borderRadius: 20,
				padding: 30,
				border: 0,
				color: "#263069",
				marginBottom: 40,
			}}
		>
			<Card.Img variant="top" src={src} />
			<Card.Body>
				<Card.Title style={{ paddingTop: 20, paddingBottom: 20 }}>
					{name}
				</Card.Title>
				<Card.Text style={{ fontSize: 14 }}>{description}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default function Home() {
	return (
		<>
			<Head>
				<title>About Us</title>
			</Head>
			<main>
				<Container fluid style={{ background: "white" }} className="pb-5">
					<Row>
						<Col md={{ span:10, offset:1}} lg={10}>
							<h1 className={textSectionStyles.title}>This is Motiv</h1>
							<p className={textSectionStyles.subtitle}>Motiv is the new way for student athletes to find jobs. Our platform looks to demonstrate the unique skills and experiences student athletes bring to employers by providing a niche marketplace exclusive to student athletes. <br/> <br/>By highlighting this unique talent pool, Motiv aims to increase hiring efficiency by showing employers more than a resume.</p>
						</Col>
					</Row>
					<AboutIcons />
				</Container>
				<Container fluid style={{ background: "white" }} className="pb-5">
					<Row>
						<Col md={{ offset: 1 }}>
							<h1 className={textSectionStyles.title} style={{ paddingTop: "50px" }}>Our Mission</h1>
						</Col>
					</Row>
					<TwoColumn
						leftColumnWidth={{ span:10, offset: 1 }}
						leftColumn={
							<div className={styles.missionContainer}>
								<h1 className={styles.missionTitle}>
                                Helping student athletes find their second career.

								</h1>
								<p>
                                Our mission here at Motiv is to help student athletes find their next career. We aim to demonstrate equal opportunities for student athletes in the job marketplace by highlighting their unique skill sets and experiences. Motiv works closely with our corporate partners to enable their hiring departments to recruit student-athlete talent.

								</p>
								{/* <p>
									Maecenas hendrerit pulvinar tristique. Etiam nec neque eu
									dolor lacinia iaculis eget at turpis. Nullam rhoncus lectus at
									leo iaculis, quis mollis quam rhoncus. Nulla lacinia
									condimentum malesuada.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Suspendisse quis imperdiet urna.
								</p> */}
							</div>
						}
						// rightColumnWidth={4}
						// rightColumn={
						// 	<div className={styles.missionContainer}>
						// 		<h1 className={styles.missionTitle}>
						// 			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
						// 			a est maximus, semper libero quis.
						// 		</h1>
						// 		<p>
						// 			Maecenas hendrerit pulvinar tristique. Etiam nec neque eu
						// 			dolor lacinia iaculis eget at turpis. Nullam rhoncus lectus at
						// 			leo iaculis, quis mollis quam rhoncus. Nulla lacinia
						// 			condimentum malesuada.
						// 		</p>
						// 	</div>
						// }
						className="mb-5"
					/>
					{/* <Container fluid>
						<Row className={styles.statBannerRow}>
							<Col
								xs={4}
								className={styles.statBannerCol}
								style={{ background: "#455189" }}
							>
								<span>
									<h1>2022</h1>
									<p>Year founded</p>
								</span>
							</Col>
							<Col
								xs={4}
								className={styles.statBannerCol}
								style={{ background: "#394782" }}
							>
								<span>
									<h1>450+</h1>
									<p>Lorem ipsum dolor</p>
								</span>
							</Col>
							<Col
								xs={4}
								className={styles.statBannerCol}
								style={{ background: "#243374" }}
							>
								<span>
									<h1>$160M+</h1>
									<p>Lorem ipsum dolor</p>
								</span>
							</Col>
						</Row>
					</Container> */}
				</Container>
				<TextSection
					title="Meet the team"
					subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a est maximus, semper libero quis, finibus ligula."
				/>
				<Container fluid style={{ marginBottom: 100, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
					<Row  >
						<Col xs={12} md={6} className={styles.personCol}>
							<PersonCard
								src={
									require("../public/assets/Motive/img/Team 1.png").default.src
								}
								name="Danny Romanello"
								description="Ut cursus pulvinar leo ut sollicitudin. Aliquam erat volutpat. Suspendisse eget bibendum mi."
								style={{ margin: "10px" }}

							/>
						</Col>
						<Col xs={12} md={6} className={styles.personCol}>
							<PersonCard
								src={
									require("../public/assets/Motive/img/Team 2.png").default.src
								}
								name="Andrea Lopez"
								description="Ut cursus pulvinar leo ut sollicitudin. Aliquam erat volutpat. Suspendisse eget bibendum mi."
							/>
						</Col>
					</Row>
					<Row style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
						<Col xs={12} md={6} className={styles.personCol}>
							<PersonCard
								src={
									require("../public/assets/Motive/img/Team 3.png").default.src
								}
								name="Jane Doe"
								description="Ut cursus pulvinar leo ut sollicitudin. Aliquam erat volutpat. Suspendisse eget bibendum mi."
							/>
						</Col>
						<Col xs={12} md={6} className={styles.personCol}>
							<PersonCard
								src={
									require("../public/assets/Motive/img/Team 4.png").default.src
								}
								name="John Doe"
								description="Ut cursus pulvinar leo ut sollicitudin. Aliquam erat volutpat. Suspendisse eget bibendum mi."
							/>
						</Col>
					</Row>
				</Container>
				{/* <AboutIcons /> */}
				{/* Footer Header Section */}
				<Container fluid className={styles.footerHeader + " text-center"}>
					<h1 className={styles.footerHeaderTitle}>Work with us!</h1>
					<p className={styles.footerHeaderSubtitle}>
						We’re always looking for smart and talented people to join our team.
					</p>
					<a href="mailto:motiv@joinmotiv.io?subject=Career%20Opportunity">
						<button
							type="button"
							className="btn btn-primary btn-lg active"
							style={{
								background: "white",
								color: "#243374",
								padding: 20,
								marginTop: 30,
								border: "1px none",
							}}
						>
							Join our team <i className="fa fa-arrow-right"></i>
						</button>
					</a>


				</Container>
			</main>
			<Footer />
		</>
	);
}
