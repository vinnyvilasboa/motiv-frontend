import Head from "next/head";
import SignupCard from "../components/SignupCard"
import BlankFooter from "../components/BlankFooter"

export default function Signup() {
	return (
		<div style={{height:"60vh"}}>
			<Head>
				<title> Sign Up</title>
			</Head>
			<SignupCard/>
            <BlankFooter/>
		</div>
	);
}
