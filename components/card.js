import Link from "next/link";
import React from "react";
import styles from "../styles/Card.module.css";

function Card({ data }) {
	let { title, body, id } = data || {};
	return (
		<Link href={`/posts/${id}`}>
			<div className={styles.card}>
				<h4 className={styles.card__title}>{title}</h4>
				<p className={styles.card__text}>{body}</p>
				<p className={styles.id}>Id:{id}</p>
			</div>
		</Link>
	);
}

export default Card;
