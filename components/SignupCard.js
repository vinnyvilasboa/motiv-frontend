import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Image } from "react-bootstrap";
import Link from "next/link"
import RadioEmployer from "./RadioEmployer"

// import Image from "next/image";


const SignupCard = () => {
    return (
        <Container fluid style={{ height: "100vh" }} className="p-5">

            <Row style={{ height: "100%", display: "flex", justifyCenter: "center", alignItems: "center" }}>

                <Col></Col>
                <Col xs={12} sm={8} md={6} lg={8} style={{ display: "flex", justifyCenter: "center", alignItems: "center", background: "white", borderRadius: "30px" }} className="shadow-lg p-3 mb-5 bg-body rounded" >
                    <Container>
                        <Row>
                            <Col>
                                <Form style={{ margin: "0 0 10px 0"}} >
                                    <h1 style={{ margin: "30px 0 30px 0", fontSize: "1.5rem", color: "#263069", fontWeight: "700" }}>Create Your Free Account</h1>
                                    <RadioEmployer/>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Your Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="Alex Jones..." />

                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        {/* <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text> */}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember Me" />
                                    </Form.Group>
                                    <div className="d-grid gap-2" size="lg">
                                        <Button variant="primary" type="submit">
                                            Let's Get Started
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
    )
}

export default SignupCard

