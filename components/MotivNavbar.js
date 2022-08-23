import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";
import Image from "next/image";
import MotivLogo from "../public/assets/Motive/icons/MOTIV-NEW-3.svg";

export default function MotivNavbar() {
	return (
		<Navbar bg="light" expand="lg" collapseOnSelect>
			<Container fluid>
				<Navbar.Brand>
                <Link href="/" passHref>
					<Image 
                    src={MotivLogo} 
                    alt="Motiv Logo"
                    width={150}
					height={50}   
                    />
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
					{/* <Link href="/login" passHref>
						<Nav.Link>Login</Nav.Link>
					</Link> */}
					<Link href="/signup" passHref>
						<Nav.Link>Signup</Nav.Link>
					</Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
