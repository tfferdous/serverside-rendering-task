export function getAllCategories(data) {
  let arr = [];
  for (let blog of data) {
    let { category } = blog;
    arr = [...arr, ...category];
  }

  return [...new Set(arr)];
}

