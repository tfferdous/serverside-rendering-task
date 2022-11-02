import React from "react";
import { data } from "../../lib/data";
import { getAllCategories } from "../../utils/utils";

function BlogsByCategory({ blogs, selectedCategory }) {
  return (
    <div className="blogs">
      <h1 style={{ textAlign: "center", padding: "20px" }}>
        {selectedCategory}
      </h1>
      {blogs.map((blog) => (
        <div
          className="blog"
          key={blog.id}
          style={{ padding: "10px", border: "1px solid #ddd", margin: "10px" }}
        >
          <h3 className="blog__title" style={{ marginBottom: "16px" }}>
            {blog.title}
          </h3>
          {blog.category.map((category, index) => (
            <span
              style={{
                display: "inline-block",
                textTransform: "uppercase",
                borderRadius: "30px",
                border: "1px solid #ddd",
                padding: "10px",
                marginRight: "5px",
                fontSize: "10px",
              }}
              key={index}
            >
              {category}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function getStaticPaths() {
  let categories = getAllCategories(data);

  let paths = categories.map((category) => ({
    params: { singleCategory: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  let { singleCategory } = params;

  let blogsBycategory = data.filter((item) =>
    item.category.includes(singleCategory)
  );

  return {
    props: {
      blogs: blogsBycategory,
      selectedCategory: singleCategory,
    },
  };
}

export default BlogsByCategory;
