import Image from "next/image";
import React from "react";
import { data } from "../../lib/data";
import { getAllCategories } from "../../utils/utils";

function BlogsByCategory({ blogs, selectedCategory }) {
	return (
		<div className="blogs">
			<h1 className="text-center p-5">{selectedCategory}</h1>
			<div className="grid md:grid-cols-2	">
				{blogs.map((blog) => (
					<div
						className="blog p-4 m-2 shadow-sm	border border-gray-300	"
						key={blog.id}>
						<div className="relative" style={{ minHeight: "250px" }}>
							<Image
								src={blog.img}
								fill={true}
								alt=""
								style={{ objectFit: "cover" }}
							/>
						</div>
						<h3 className="blog__title mt-4 mb-4">{blog.title}</h3>
						{blog.category.map((category, index) => (
							<span
								className="inline-block px-3 py-1 uppercase rounded-2xl border border-gray-300 mr-1 text-xs"
								key={index}>
								{category}
							</span>
						))}
					</div>
				))}
			</div>
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
