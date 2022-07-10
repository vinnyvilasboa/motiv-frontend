import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "../styles/aboutIcons.module.css";

const AboutIcons = () => {
	return (
		<Container className={styles.HeroAboutContainer}>
			<Row className={styles.HeroAboutRow}>
				<Col xs={12} sm={6} md={3} className={styles.HeroAboutCol}>
					<div className={styles.heroIconsContainer}>
						<Image
							src={
								require("../public/assets/Motive/icons/Founding.svg").default
									.src
							}
							width={60}
							height={60}
							className={styles.AboutHeroIcons}
						/>
					</div>
					<p className={styles.heroDate} style={{ color: "#6158BA" }}>
						2021
					</p>
					<h4 className={styles.heroText}>Founding</h4>
					<p className={styles.heroSubtext}>
						Motiv was founded to address under utilization of student athlete
						talent within the job marketplace.
					</p>
				</Col>
				<Col xs={12} sm={6} md={3} className={styles.HeroAboutCol}>
					<div className={styles.heroIconsContainer}>
						<Image
							src={
								require("../public/assets/Motive/icons/Development.svg").default
									.src
							}
							width={60}
							height={60}
							className={styles.AboutHeroIcons}
						/>
					</div>
					<p className={styles.heroDate} style={{ color: "#25A6CF" }}>
						2022
					</p>
					<h4 className={styles.heroText}>Development</h4>
					<p className={styles.heroSubtext}>
						We aim to design a platform to showcase the unique skills student
						athletes possess.
					</p>
				</Col>

				<Col xs={12} sm={6} md={3} className={styles.HeroAboutCol}>
					<div className={styles.heroIconsContainer}>
						<Image
							src={
								require("../public/assets/Motive/icons/Launch.svg").default.src
							}
							width={60}
							height={60}
							className={styles.AboutHeroIcons}
						/>
					</div>
					<p className={styles.heroDate} style={{ color: "#FF833E" }}>
						2022
					</p>
					<h4 className={styles.heroText}>Launch</h4>
					<p className={styles.heroSubtext}>
						Introduce Motiv to both student athletes and employers to connect
						talent with opportunity.
					</p>
				</Col>
				<Col xs={12} sm={6} md={3} className={styles.HeroAboutCol}>
					<div className={styles.heroIconsContainer}>
						<Image
							src={
								require("../public/assets/Motive/icons/Growth.svg").default.src
							}
							width={60}
							height={60}
							className={styles.AboutHeroIcons}
						/>
					</div>
					<p className={styles.heroDate} style={{ color: "#27BBA3" }}>
						2023
					</p>
					<h4 className={styles.heroText}>Growth</h4>
					<p className={styles.heroSubtext}>
						The growth of Motiv is dependent on the unification on the student
						athlete and employer
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default AboutIcons;
