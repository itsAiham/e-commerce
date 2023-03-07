<script setup>
definePageMeta({
  layout: "product",
  middleware: ["auth"],
});

const route = useRoute();
const user = useSupabaseUser();

const { data: purchases, pending } = await useFetch("/api/purchase", {
  query: { userId: user.value.id },
});
const { data: order } = await useFetchOrder(route.params.id);
</script>

<template>
  <div>
    <div class="sm:text-xl sm:m-5 mt-9 p-4 leading-10 font-ubuntu">
      <h1>
        Your order was made at
        {{
          purchases
            ?.filter((p) => p.id == route.params.id)[0]
            .createdAt.split("T")[0]
        }}
      </h1>

      <h2>
        Cost ${{ purchases?.filter((p) => p.id == route.params.id)[0].total }}
      </h2>
    </div>

    <Cards :products="order" v-if="order.length" />
  </div>
</template>
