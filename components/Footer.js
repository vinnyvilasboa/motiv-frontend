import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagramSquare,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Nav.Link href="#home" style={{ fontSize: 14, fontWeight: "400" }}>
					info@joinmotiv.io
				</Nav.Link>
				<Navbar.Collapse className="justify-content-end">
					<Nav.Link href="#home">
						<FontAwesomeIcon icon={faFacebook} style={{ width: "24px" }} />
					</Nav.Link>
					<Nav.Link href="#home">
						<FontAwesomeIcon
							icon={faInstagramSquare}
							style={{ width: "24px" }}
						/>
					</Nav.Link>

					<Nav.Link href="#home">
						<FontAwesomeIcon icon={faLinkedin} style={{ width: "24px" }} />
					</Nav.Link>
					<Nav.Link href="#home">
						<FontAwesomeIcon icon={faTwitter} style={{ width: "24px" }} />
					</Nav.Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Footer;
