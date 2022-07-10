import { Container, Row, Col } from "react-bootstrap";

import styles from "../styles/textSection.module.css";

export default function TextSection({ title, subtitle }) {
	return (
		<Container fluid className="text-center">
			<Row>
				<Col md={{ span: 8, offset: 2 }}>
					<h1 className={styles.title}>{title}</h1>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<p className={styles.subtitle}>{subtitle}</p>
				</Col>
			</Row>
		</Container>
	);
}
