<script setup>
import products from "@/data/data.json";
</script>

<template>
  <div
    class="grid justify-around items-center sm:m-1 md:m-4 gap-12 grid-flow-row gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <Card v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>
