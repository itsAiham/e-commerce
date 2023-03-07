<script setup>
const props = defineProps({
  nOfItem: Number,
  msg: String,
});
</script>

<template>
  <div
    v-if="!nOfItem"
    class="h-[400px] flex flex-row justify-center m-7 p-5 text-lg sm:text-"
  >
    <h2 class="xl">{{ msg }}</h2>
  </div>
</template>
