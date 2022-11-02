import Card from "../components/card";
import styles from "../../styles/Posts.module.css";

const Posts = ({ posts }) => {
  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <Card data={post} key={post.id} />
      ))}
    </div>
  );
};

// export async  function getServerSideProps(context) {
// 	let {query}= context;

// }

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
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}

export default Posts;
