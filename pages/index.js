import Head from "next/head";
import { Container } from "react-bootstrap";
import HeroComponent from "../components/HeroComponent";
import NetworkComponent from "../components/NetworkComponent";
import CareerComponent from "../components/CareerComponent";
import PlayerProfile from "../components/PlayerProfile";
import MessageComponent from "../components/MessageComponent";
import Footer from "../components/Footer";
import styles from "../styles/index.module.css";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Motiv App</title>
			</Head>
			<main>
				<HeroComponent />
				<NetworkComponent />
				<CareerComponent />
				<PlayerProfile />
				<MessageComponent />
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
		</div>
	);
}
