import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const newOrder = await prisma.order.create({
      data: {
        customerId: body.userId,
        total: body.totalPrice,
      },
      select: {
        id: true,
      },
    });

    for (const [key, value] of Object.entries(body)) {
      if (parseInt(key)) {
        await prisma.product.create({
          data: {
            originalId: key,
            price: value.reservingPrice,
            quantity: value.amount,
            title: value.title,
            image: value.image,
            orderId: newOrder.id,
          },
        });
      }
    }
  } catch (error) {
    return {
      status: 500,
      message: "Invalue Request",
    };
  }
  return {
    status: 200,
    message: "Sync with db",
  };
});
