import Head from "next/head";
import LoginCard from "../components/LoginCard";

export default function Login() {
	return (
		<div>
			<Head>
				<title>Login</title>
			</Head>
            <LoginCard/>
		</div>
	);
}
