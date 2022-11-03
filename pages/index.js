import Card from "../components/card";
import styles from "../styles/Posts.module.css";

const Posts = ({ posts }) => {
	return (
		<section>
			<h1 className="text-center text-4xl">All Posts</h1>
			<div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3	gap-4">
				{posts.map((post) => (
					<Card data={post} key={post.id} />
				))}
			</div>
		</section>
	);
};

export async function getServerSideProps(context) {
	let { query } = context;
	let queryString = "";
	for (const key in query) {
		queryString += `&${key}=${query[key]}`;
	}

	let res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?${queryString}`
	);
	let posts = await res.json();
	return {
		props: {
			posts,
		},
	};
}

export default Posts;
