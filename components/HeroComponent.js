import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../public/assets/Motive/img/hero-10.png";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Image from "next/image";
import styles from "../styles/hero.module.css";

export default function HeroComponent() {
	return (
		<>
			<div className={styles.topBackground} style={{background:"white"}}>
				<Container fluid>
					<Row
						className={styles.sectionTop}
						style={{ display: "flex", alignItems: "center", justifyContent: "center", height:"100%" }}
					>
						<Col xs={12} md={6}>
							<div className={'mx-4'}>
								<h1
									className="fw-bold"
									style={{ fontSize: 70, color: "#263069" }}
								>
									Built for
								</h1>
								<h1
									className="fw-bold"
									style={{ fontSize: 70, color: "#759DF0" }}
								>
									Student Athletes
								</h1>
								<h3
									style={{
										fontSize: 24,
										marginTop: 15,
										marginBottom: 30,
										color: "#263069",
                                        lineHeight: "150%"
									}}
								>
									Motiv is a job marketplace created by student athletes for
									student athletes.
								</h3>
								<Link className="nav-link" href="/signup">
									<button
										type="button"
										className="btn btn-primary btn-lg active"
										style={{
											background: "#5C8CEE",
											boxShadow: "1px 1px 6px gray",
                                            border: "1px none"
										}}
									>
										Get Started <i className="fa fa-arrow-right"></i>
									</button>
								</Link>
							</div>
						</Col>
						<Col
							sm={12} md={6} lg={5}
							className="d-none d-md-block pt-5 pb-5"
							style={{ display: "flex", alignItems: "flex-start" }}
						>
							<Image
								className={styles.heroImage}
								src={HeroImage}
								alt="HeroImage"
								width={1000}
								height={900}
							></Image>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}
