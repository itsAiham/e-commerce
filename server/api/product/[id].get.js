import products from "@/data/data.json";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  const product = products.find((p) => {
    return p.id === parseInt(id);
  });

  return product;
});
