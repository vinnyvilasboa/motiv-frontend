import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Image } from "react-bootstrap";
import Link from "next/link"

// import Image from "next/image";


const LoginCard = () => {
    return (
        <Container fluid style={{ height: "100vh" }} className="p-5">

            <Row style={{ height: "100%", display: "flex", justifyCenter: "center", alignItems: "center" }}>

                <Col></Col>
                <Col xs={12} sm={8} md={6} lg={8} style={{ display: "flex", justifyCenter: "center", alignItems: "center", background: "white", borderRadius: "30px" }} className="shadow-lg p-3 mb-5 bg-body rounded" >
                    <Container>
                        <Row>
                            <Col>
                                <Form style={{ margin: "0 0 10px 0"}} >
                                    <h1 style={{ margin: "30px 0 30px 0", fontSize: "1.5rem", color: "#263069", fontWeight: "700" }}>Login to Motiv</h1>
                                
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                       
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
                                            Login
                                        </Button>
                                    </div>
                                </Form>
                                <Form.Text className="text-muted">
                                    Don't have a Motiv account? <Link href="/signup">Sign Up</Link>
                                </Form.Text>
                            </Col>
                            
                        </Row>

                    </Container>

                </Col>
                <Col></Col>

            </Row>
        </Container>
    )
}

export default LoginCard

