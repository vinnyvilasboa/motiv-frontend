import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";
import Image from "next/image";
import MotivLogo from "../public/assets/Motive/icons/Logo_Motiv.png";

export default function MotivNavbar() {
	return (
		<Navbar bg="light" expand="lg" collapseOnSelect>
			<Container fluid>
				<Navbar.Brand>
					<Link href="/" passHref>
						{/* Wrap in a portal to avoid ref error */}
						<>
							<Image
								className="motiv-logo"
								src={MotivLogo}
								alt="Motiv Logo"
								width={120}
								height={25}
							/>
						</>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Link href="/" passHref>
						<Nav.Link>Home</Nav.Link>
					</Link>
					<Link href="/about" passHref>
						<Nav.Link>About</Nav.Link>
					</Link>

					<Link href="/signup" passHref>
						<Nav.Link>Signup</Nav.Link>
					</Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
