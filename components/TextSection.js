import { Container, Row, Col } from "react-bootstrap";

import styles from "../styles/textSection.module.css";

export default function TextSection({ title, subtitle, titleSize }) {
	return (
		<Container fluid>
			<Row>
				<Col md={{ span: 8, offset: 2 }} className={styles.textCenter}>
					<h1
						style={{ fontSize: titleSize }}
						className={styles.title}
						dangerouslySetInnerHTML={{ __html: title }}
					/>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 6, offset: 3 }} className={styles.textCenter}>
					<p className={styles.subtitle}>{subtitle}</p>
				</Col>
			</Row>
		</Container>
	);
}
