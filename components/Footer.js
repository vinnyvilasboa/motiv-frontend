import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagramSquare,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/motivNavbar.module.css";

const Footer = () => {
	return (
		<Navbar bg="light" expand="lg" >
			<Container fluid style={{display:'flex', flexDirection:'column'}}>
				{/* <Navbar.Toggle /> */}
				{/* <Navbar.Collapse className="justify-content-end"> */}
                <Row >
                <Col style={{display:'flex'}}>
					<Nav.Link href="#home">
                <a>
						<FontAwesomeIcon icon={faFacebook} className={styles.icon} size="6x" />
                        </a>

					</Nav.Link>
					<Nav.Link href="#home">
						<FontAwesomeIcon icon={faInstagramSquare} className={styles.icon} size="6x" />
					</Nav.Link>

					<Nav.Link href="#home">
						<FontAwesomeIcon icon={faLinkedin} className={styles.icon} size="6x" />
					</Nav.Link>
					<Nav.Link href="#home">
						<FontAwesomeIcon icon={faTwitter} className={styles.icon} size="6x" />
					</Nav.Link>
                    </Col>
                    </Row>
            <Row>
            <Col>
				<Nav.Link href="#home" className={styles.emailText}>
                    <a href="mailto:info@joinmotiv.io?subject=Information%20on%20Motiv%20App">
                    info@joinmotiv.io
                    </a>
				</Nav.Link>
                </Col>
                </Row>
				{/* </Navbar.Collapse> */}
			</Container>
		</Navbar>
	);
};

export default Footer;
