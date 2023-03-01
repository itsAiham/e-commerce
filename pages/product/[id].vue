<script setup>
const route = useRoute();
const { data: product } = await useFetchProduct(route.params.id);

definePageMeta({
  layout: "product",
});
</script>

<template>
  <div>
    <Product :product="product" />
  </div>
</template>
