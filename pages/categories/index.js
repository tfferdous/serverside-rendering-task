import Link from "next/link";
import React, { useEffect, useState } from "react";
import { data } from "../../lib/data";
import { getAllCategories } from "../../utils/utils";

function Categories({ categories }) {
  return (
    <section>
      <h2 style={{ textAlign: "center" }}>All categories</h2>
      <ul style={{ listStyle: "none", textAlign: "center" }}>
        {categories.map((category, index) => (
          <li key={index}>
            <Link
              style={{ padding: "10px", display: "inline-block" }}
              href={`/categories/${category}`}
            >
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
