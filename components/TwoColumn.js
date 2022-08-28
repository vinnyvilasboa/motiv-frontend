import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/twoColumn.module.css";

export function TextColumn({ title, children, style }) {
	return (
		<div style={style} className={styles.textContainer}>
			<h1 className={styles.title}>{title}</h1>
			<span className={styles.paragraph}>{children}</span>
		</div>
	);
}

export default function TwoColumn({
	leftColumn,
	rightColumn,
	leftOrder = 1,
	rightOrder = 2,
	leftColumnWidth,
	rightColumnWidth,
	style,
	className,
}) {
	return (
		<Container fluid style={style} className={className}>
			<Row style={{ alignItems: "center" }}>
				<Col md={leftColumnWidth} xs={{ span: 12, order: leftOrder }}>
					{leftColumn}
				</Col>
				<Col md={rightColumnWidth} xs={{ span: 12, order: rightOrder }}>
					{rightColumn}
				</Col>
			</Row>
		</Container>
	);
}
