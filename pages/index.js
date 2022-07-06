import Head from "next/head";
import HeroComponent from "../components/HeroComponent";
import NetworkComponent from "../components/NetworkComponent";
import CareerComponent from "../components/CareerComponent";
import PlayerProfile from "../components/PlayerProfile";
import MessageComponent from "../components/MessageComponent";
import BottomComponent from "../components/BottomComponent";
import Footer from "../components/Footer";

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
				<BottomComponent />
			</main>
			<Footer />
		</div>
	);
}
