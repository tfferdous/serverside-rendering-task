import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";
function Header() {
	return (
		<header className={styles.header}>
			<Link className={styles.header__logo} href="/">
				Logo
			</Link>
			<nav className="nav">
				<ul className={styles.nav__list}>
					<li className="nav__item">
						<Link className={styles.nav__link} href="/">
							Home
						</Link>
					</li>
					{/* <li className="nav__item">
						<Link className={styles.nav__link} href="/posts">
							Posts
						</Link>
					</li> */}
					<li className="nav__item">
						<Link className={styles.nav__link} href="/categories">
							Categories
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
