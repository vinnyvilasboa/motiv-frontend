import { Container, Navbar, Nav } from "react-bootstrap";
import '../node_modules/font-awesome/css/font-awesome.min.css';

const Footer = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Nav.Link href="#home" style={{ fontSize: 14, fontWeight: "400" }}>
                    info@joinmotiv.io
                </Nav.Link>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="#home">test</Nav.Link>
                    <Nav.Link href="#home"><i className="fa fa-arrow-right"></i></Nav.Link>  
                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
};

export default Footer;
