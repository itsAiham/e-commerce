import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  if (!id) {
    return {
      status: 403,
      message: "Invalid Request",
    };
  }

  const products = await prisma.product.findMany({
    where: {
      orderId: parseInt(id),
    },
  });

  if (!products.length) {
    return {
      status: 204,
      message: "No Content",
    };
  }

  return products;
});
