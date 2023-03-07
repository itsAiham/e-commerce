<script setup>
const props = defineProps({
  products: Object,
});
</script>

<template>
  <div
    class="grid content-center sm:m-1 md:m-4 gap-12 grid-flow-row gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <Card
      v-if="products"
      v-for="product in products"
      :key="product?.id"
      :product="product"
    />
  </div>
</template>
