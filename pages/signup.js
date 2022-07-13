import Head from "next/head";
import SignupCard from "../components/SignupCard"

export default function Signup() {
	return (
		<div>
			<Head>
				<title> Sign Up</title>
			</Head>
			<SignupCard/>
		</div>
	);
}
