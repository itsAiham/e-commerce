export default defineEventHandler(async (event) => {
  const { category, minPrice, maxPrice, search } = getQuery(event);

  let data = await $fetch("https://fakestoreapi.com/products");
  let filtered = data;

  if (category.trim()) {
    filtered = data.filter((product) => {
      return product.category === category.trim().toLowerCase();
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

  const arr = [];

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

  return filtered;
});
