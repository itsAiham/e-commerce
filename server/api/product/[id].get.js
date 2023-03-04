export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const product = await $fetch(`https://fakestoreapi.com/products/${id}`);

  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: `Product with ID ${id} is not exist`,
    });
  }

  return product;
});
