import Head from "next/head";
import MotivNavbar from "../components/MotivNavbar";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<MotivNavbar />
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
