import Link from "next/link";
import React, { useEffect, useState } from "react";
import { data } from "../../lib/data";
import { getAllCategories } from "../../utils/utils";

function Categories({ categories }) {
	return (
		<section>
			<h2 className="text-center text-4xl">All categories</h2>
			<ul className="mt-5 flex items-center justify-center text-center ">
				{categories.map((category, index) => (
					<li key={index}>
						<Link
							className="inline-block text-sm uppercase py-3 px-5 text-uppercase border border-gray-200 mx-2 rounded-3xl"
							href={`/categories/${category}`}>
							{category}
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}

export function getStaticProps() {
	let categories = getAllCategories(data);
	return {
		props: {
			categories,
		},
	};
}

export default Categories;
