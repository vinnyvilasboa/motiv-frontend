import { useState } from "react";
import {
	Container,
	Row,
	Col,
	Image,
	Form,
	Button,
	Alert,
	Spinner,
} from "react-bootstrap";
import Link from "next/link";

// import Image from "next/image";
const BACKEND =
	"https://ey7ozxkwng7ogzwvkekzgk3coa0yyrwk.lambda-url.us-east-1.on.aws/";

const SignupCard = () => {
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [isEmployer, setIsEmployer] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errorText, setErrorText] = useState(null);
	const [signupSuccess, setSignupSuccess] = useState(false);
	const onSignup = async () => {
		setErrorText(null);
		setSignupSuccess(false);
		if (!name || !email || !password)
			return setErrorText("One or more fields are empty.");
		if (name.length < 5)
			return setErrorText("Name must be at least 5 characters long.");
		if (email.length < 5) return setErrorText("Email address is too short.");
		if (!email.includes("@") || !email.includes("."))
			return setErrorText("Email address is invalid.");
		if (!isEmployer && !email.endsWith(".edu"))
			return setErrorText("Must be an .edu email.");
		if (password.length < 8)
			return setErrorText("Password must be at least 8 characters long.");
		setLoading(true);
		fetch(BACKEND, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, password, isEmployer }),
		})
			.then((res) => {
				if (res.status === 200) {
					setSignupSuccess(true);
				} else {
					setErrorText(
						"There was an unexpected error signing up. Please try again later!"
					);
				}
			})
			.catch((err) => {
				console.error(err);
				setErrorText(
					"There was an unexpected error signing up. Please try again later!"
				);
			})
			.finally(() => setLoading(false));
		setLoading(false);
	};
	return (
		<Container fluid style={{ height: "100vh" }} className="p-5">
			<Row
				style={{
					height: "100%",
					display: "flex",
					justifyCenter: "center",
					alignItems: "center",
				}}
			>
				<Col></Col>
				<Col
					xs={12}
					sm={8}
					md={6}
					lg={8}
					style={{
						display: "flex",
						justifyCenter: "center",
						alignItems: "center",
						background: "white",
						borderRadius: "30px",
					}}
					className="shadow-lg p-3 mb-5 bg-body rounded"
				>
					<Container>
						<Row>
							<Col>
								<Form style={{ margin: "0 0 10px 0" }}>
									<h1
										style={{
											margin: "30px 0 30px 0",
											fontSize: "1.5rem",
											color: "#263069",
											fontWeight: "700",
										}}
									>
										Create Your Free Account
									</h1>
									{signupSuccess && (
										<Alert variant="success">
											Thank you for signing up! We will let you know when Motiv
											is ready.
										</Alert>
									)}
									{errorText && <Alert variant="danger">{errorText}</Alert>}
									<Form.Group className="mb-3" controlId="formBasicName">
										<Form.Label>Your Full Name</Form.Label>
										<Form.Control
											type="text"
											placeholder="Lebron James"
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>Email address</Form.Label>
										<Form.Control
											type="email"
											placeholder="Enter email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
										{/* <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text> */}
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicPassword">
										<Form.Label>Password</Form.Label>
										<Form.Control
											type="password"
											placeholder="Password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
										<Form.Text>
											Your password must be at least 8 characters long.
										</Form.Text>
									</Form.Group>
									{/* ---> Radio for employer option */}
									<Form.Check
										type="switch"
										id="custom-switch"
										label="Are You An Employer?"
										style={{ paddingBottom: "10px" }}
										value={isEmployer}
										onChange={(e) => setIsEmployer(!isEmployer)}
									/>
									{/* ---> Radio for employer option */}
									{/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
										<Form.Check type="checkbox" label="Remember Me" />
									</Form.Group> */}
									<div className="d-grid gap-2" size="lg">
										<Button variant="primary" onClick={onSignup}>
											{loading ? (
												<Spinner
													as="span"
													animation="border"
													variant="light"
													size="md"
												/>
											) : (
												"Let's Get Started"
											)}
										</Button>
									</div>
								</Form>
								<Form.Text className="text-muted">
									Already have a Motiv account? <Link href="/login">Login</Link>
								</Form.Text>
							</Col>
							{/* <Col>
                        <Image
							src={
								require("../public/assets/Motive/img/Signup-form.png").default
									.src
							}
							width={400}
							height={300}
							
						/>
                        </Col> */}
						</Row>
					</Container>
				</Col>
				<Col></Col>
			</Row>
		</Container>
	);
};

export default SignupCard;
