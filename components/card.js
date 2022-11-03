import Link from "next/link";
import React from "react";
import styles from "../styles/Card.module.css";

function Card({ data }) {
	let { title, body, id } = data || {};
	return (
		<Link href={`/${id}`}>
			<div className={styles.card}>
				<h2 className="text-xl mb-3 text-red-800 uppercase">{title}</h2>
				<p className={styles.card__text}>{body}</p>
				<p className={styles.id}>Id:{id}</p>
			</div>
		</Link>
	);
}

export default Card;
