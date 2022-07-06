import Head from "next/head";
import NetworkComponent from "../components/NetworkComponent";

export default function Home() {
	return (
		<div>
			<Head>
				<title>About Motiv</title>
			</Head>
			<NetworkComponent />
		</div>
	);
}
