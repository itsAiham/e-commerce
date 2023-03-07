export default async (id) => {
  const { data, error } = await useFetch(`/api/order/${id}`);

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      statusMessage: error.value.statusMessage,
    });
  }

  return { data };
};
