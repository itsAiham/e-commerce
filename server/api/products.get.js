export default defineEventHandler(async (event) => {
  const { category, minPrice, maxPrice, search } = getQuery(event);

  let data = await $fetch("https://fakestoreapi.com/products");
  let filtered = data;
  const arr = [];

  // console.log(getQuery(event));

  if (category) {
    filtered = data.filter((product) => {
      return product.category.trim() === category.trim().toLowerCase();
    });
  }

  if (parseFloat(minPrice)) {
    filtered = filtered.filter((product) => {
      return product.price >= parseFloat(minPrice);
    });
  }

  if (parseFloat(maxPrice)) {
    filtered = filtered.filter((product) => {
      return product.price <= parseFloat(maxPrice);
    });
  }

  if (search) {
    filtered = filtered.filter((product) => {
      const titles = product.title.toLowerCase().trim().split(" ");
      const description = product.description.toLowerCase().trim().split(" ");
      const searching = search.toLowerCase().trim().split(" ");

      searching.forEach((element) => {
        if (titles.includes(element)) {
          arr.push(product);
        }
      });

      searching.forEach((element) => {
        if (description.includes(element)) {
          arr.push(product);
        }
      });
    });

    filtered = arr;
  }

  // console.log(filtered.length);

  return filtered;
});
