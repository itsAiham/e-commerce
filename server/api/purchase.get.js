import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { userId } = getQuery(event);

  if (!userId) {
    return {
      status: 403,
      message: "Invalid Request",
    };
  }

  const orders = await prisma.order.findMany({
    where: {
      customerId: userId,
    },
  });

  if (!orders.length) {
    return {
      status: 204,
      message: "No Content",
    };
  }

  return orders;
  //   return "orders";
});
