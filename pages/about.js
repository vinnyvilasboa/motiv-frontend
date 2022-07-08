import Head from "next/head";
// import NetworkComponent from "../components/NetworkComponent";
import HeroComponent from "../components/HeroComponent";

export default function Home() {
	return (
		<div>
			<Head>
				<title>About Motiv</title>
			</Head>
			<HeroComponent />
		</div>
	);
}
