<script setup>
const route = useRoute();
const { data: product } = await useFetchProduct(route.params.id);

definePageMeta({
  layout: "product",
});
</script>

<template>
  <div>
    <Product v-if="product" :product="product" />
  </div>
</template>
