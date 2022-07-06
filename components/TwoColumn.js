import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/twoColumn.module.css";

export function TextColumn({ title, children, style }) {
	return (
		<div className={styles.textContainer}>
			<h1 className={styles.title}>{title}</h1>
			<span className={styles.paragraph}>{children}</span>
		</div>
	);
}

export default function TwoColumn({
	leftColumn,
	rightColumn,
	leftColumnWidth,
	rightColumnWidth,
}) {
	return (
		<Container fluid>
			<Row>
				<Col md={leftColumnWidth} xs={{ span: 12, order: 12 }}>
					{leftColumn}
				</Col>
				<Col md={rightColumnWidth} xs={{ span: 12, order: 1 }}>
					{rightColumn}
				</Col>
			</Row>
		</Container>
	);
}
