import { Container, Navbar, Nav } from "react-bootstrap";
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
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Nav.Link href="#home" className={styles.emailText}>
					info@joinmotiv.io
				</Nav.Link>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Nav.Link href="#home">
						<FontAwesomeIcon icon={faFacebook} className={styles.icon} />
					</Nav.Link>
					<Nav.Link href="#home">
						<FontAwesomeIcon icon={faInstagramSquare} className={styles.icon} />
					</Nav.Link>

					<Nav.Link href="#home">
						<FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
					</Nav.Link>
					<Nav.Link href="#home">
						<FontAwesomeIcon icon={faTwitter} className={styles.icon} />
					</Nav.Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Footer;
