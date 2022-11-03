import styles from "../styles/Posts.module.css";

export default function Post({ post }) {
	let { title, body, id } = post || {};
	return (
		<div className={styles.postWrapper}>
			<h4 className={styles.post__title}>{title}</h4>
			<p>{body}</p>
			<p className={styles.id}>Id:{id}</p>
		</div>
	);
}

export async function getStaticPaths() {
	let res = await fetch("https://jsonplaceholder.typicode.com/posts");
	let posts = await res.json();
	const paths = posts.map((post) => ({
		params: {
			postId: post.id.toString(),
		},
	}));

	return {
		paths: paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	let { postId } = params;
	let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
	let post = await res.json();
	return {
		props: {
			post,
		},
	};
}
